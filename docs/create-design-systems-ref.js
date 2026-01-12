const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer,
        AlignmentType, HeadingLevel, BorderStyle, WidthType, LevelFormat, PageNumber, PageBreak,
        ShadingType } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

// Helper to create DS section
function createDSSection(name, theme, source, keyFeature, colors, fonts, animations, radius, shadows, recommendation) {
  return [
    new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(name)] }),
    new Paragraph({ spacing: { after: 100 }, children: [
      new TextRun({ text: "Theme: ", bold: true }), new TextRun(theme),
      new TextRun({ text: "  |  Source: ", bold: true }), new TextRun(source)
    ]}),
    new Paragraph({ spacing: { after: 200 }, children: [
      new TextRun({ text: "Key Feature: ", bold: true }), new TextRun(keyFeature)
    ]}),

    new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Colors")] }),
    new Table({
      columnWidths: [3000, 6360],
      rows: colors.map(([label, value]) => new TableRow({ children: [
        new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
          children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
          children: [new Paragraph({ children: [new TextRun({ text: value, font: "Courier New", size: 20 })] })] })
      ]}))
    }),

    new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300 }, children: [new TextRun("Typography")] }),
    new Table({
      columnWidths: [3000, 6360],
      rows: fonts.map(([label, value]) => new TableRow({ children: [
        new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
          children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
          children: [new Paragraph({ children: [new TextRun(value)] })] })
      ]}))
    }),

    new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300 }, children: [new TextRun("Animations")] }),
    new Table({
      columnWidths: [3000, 6360],
      rows: animations.map(([label, value]) => new TableRow({ children: [
        new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
          children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
          children: [new Paragraph({ children: [new TextRun({ text: value, font: "Courier New", size: 20 })] })] })
      ]}))
    }),

    new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300 }, children: [new TextRun("Border Radius & Shadows")] }),
    new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Default radius: ", bold: true }), new TextRun(radius)] }),
    new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "Shadow style: ", bold: true }), new TextRun(shadows)] }),

    new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Best for: ", bold: true, color: "6366F1" }), new TextRun(recommendation)] }),
    new Paragraph({ children: [new PageBreak()] })
  ];
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 52, bold: true, color: "1a1a2e", font: "Arial" },
        paragraph: { spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "1a1a2e", font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "444444", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "ADAPTY Design Systems Reference", italics: true, size: 20, color: "666666" })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", size: 20 }), new TextRun({ children: [PageNumber.CURRENT], size: 20 }),
                   new TextRun({ text: " of ", size: 20 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 20 })]
      })] })
    },
    children: [
      // Title page
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Design Systems Reference")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 },
        children: [new TextRun({ text: "5 Design System Variants for A/B Testing", size: 26, color: "666666" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 },
        children: [new TextRun({ text: "Extracted from Linear, Attio, Polar, Vercel, Clerk", size: 22, color: "888888" })] }),

      // Quick Comparison Table
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Quick Comparison")] }),
      new Table({
        columnWidths: [1600, 1200, 1600, 2400, 2560],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 1600, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "DS", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Theme", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 1600, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Primary Font", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 2400, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Animation Speed", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 2560, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Key Feature", bold: true })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("DS1")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Dark")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Inter Variable")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("100-250ms")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2560, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("67+ animations")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("DS2")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Light")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Inter + 3 fonts")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("150-200ms")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2560, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("LAB color space")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("DS3")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Dark")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Geist")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("150ms (fastest)")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2560, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Minimal aesthetic")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("DS4")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("True Black")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Geist")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("200ms bouncy")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2560, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Signature gradients")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "F0FDF4", type: ShadingType.CLEAR }, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "DS5 *", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "F0FDF4", type: ShadingType.CLEAR }, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Warm Gray")] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "F0FDF4", type: ShadingType.CLEAR }, width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Inter")] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "F0FDF4", type: ShadingType.CLEAR }, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("150-200ms bouncy")] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "F0FDF4", type: ShadingType.CLEAR }, width: { size: 2560, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Best of all")] })] })
          ]})
        ]
      }),
      new Paragraph({ spacing: { before: 100, after: 400 }, children: [new TextRun({ text: "* Recommended for Adapty", italics: true, color: "22C55E" })] }),

      new Paragraph({ children: [new PageBreak()] }),

      // DS1 - Linear
      ...createDSSection(
        "DS1: Linear-Inspired",
        "Dark (#08090a)",
        "linear.app",
        "Premium micro-interactions with 67+ custom animations",
        [
          ["Primary", "#5e6ad2 (Indigo)"],
          ["Background", "#08090a (Near-black)"],
          ["Text Primary", "#f7f8f8"],
          ["Text Secondary", "#d0d6e0"],
          ["Border", "#23252a"],
          ["Success", "#4cb782"],
          ["Error", "#eb5757"]
        ],
        [
          ["Sans", "Inter Variable (cv01, ss03 enabled)"],
          ["Mono", "Berkeley Mono"],
          ["Weight Medium", "510 (custom)"],
          ["Weight Semibold", "590 (custom)"],
          ["Letter-spacing", "-0.022em headlines, -0.011em body"]
        ],
        [
          ["Fast", "100ms"],
          ["Normal", "250ms"],
          ["Slow", "350ms"],
          ["Easing", "15+ custom cubic-bezier curves"],
          ["Spring", "cubic-bezier(0.175, 0.885, 0.32, 1.1)"]
        ],
        "6-8px default, up to 24px for cards",
        "Multi-layer shadows for depth, glow effects",
        "Premium positioning, apps requiring extensive animation library"
      ),

      // DS2 - Attio
      ...createDSSection(
        "DS2: Attio-Inspired",
        "Light (pure white)",
        "attio.com",
        "LAB color space for perceptual accuracy, 4-font system",
        [
          ["Primary", "lab(47.85% 16.78 -73.44) (Blue)"],
          ["Background", "lab(99.99% 0.03 0) (Warm white)"],
          ["Text Primary", "lab(0% 0 0)"],
          ["Text Secondary", "lab(25.91% -0.87 -6.44)"],
          ["Border", "lab(86.10% -0.78 -4.10)"],
          ["Success", "lab(69.45% -54.62 23.89)"],
          ["Error", "lab(61.97% 63.13 36.95)"]
        ],
        [
          ["Sans", "Inter"],
          ["Display", "Inter Display"],
          ["Mono", "JetBrains Mono"],
          ["Serif", "Tiempos Text (editorial)"],
          ["Body Weight", "500 (heavier than typical)"],
          ["Letter-spacing", "-0.02em headlines"]
        ],
        [
          ["Fast", "150ms"],
          ["Normal", "200ms"],
          ["Slow", "300ms"],
          ["Easing", "cubic-bezier(0.2, 0, 0, 1) emphasized"],
          ["Spring", "cubic-bezier(0.175, 0.885, 0.32, 1.1)"]
        ],
        "6px default (smaller, professional)",
        "Soft shadows for light theme",
        "Content-heavy sections, editorial design, multi-font hierarchy needs"
      ),

      // DS3 - Polar
      ...createDSSection(
        "DS3: Polar-Inspired",
        "Dark (#171719)",
        "polar.sh",
        "Minimal aesthetic with fastest animations (150ms)",
        [
          ["Primary", "lab(44.06% 29.03 -86.04) (Deep blue)"],
          ["Background", "#171719"],
          ["Text Primary", "#d7d7db (polar-50)"],
          ["Text Secondary", "#6f717b (polar-500)"],
          ["Border", "#1d1d20 (single color everywhere)"],
          ["Success", "lab(66.98% -58.27 19.54)"],
          ["Error", "lab(55.48% 75.07 48.85)"]
        ],
        [
          ["Sans", "Geist Sans"],
          ["Mono", "Geist Mono (prominent)"],
          ["Weight Scale", "300-700 standard"],
          ["Letter-spacing", "-0.025em headlines"]
        ],
        [
          ["Default", "150ms (signature speed)"],
          ["Slow", "200ms"],
          ["Slower", "300ms"],
          ["Easing", "cubic-bezier(0.4, 0, 0.2, 1)"]
        ],
        "9.6px (0.6rem) - slightly larger base",
        "Minimal shadows, rely on borders",
        "Developer audience, code-focused products, minimal aesthetic"
      ),

      // DS4 - Vercel
      ...createDSSection(
        "DS4: Vercel-Inspired",
        "True Black (#000000)",
        "vercel.com",
        "Bouncy easing, signature gradients, compound shadows",
        [
          ["Primary", "hsl(206, 100%, 50%)"],
          ["Background", "hsl(0, 0%, 0%) (true black)"],
          ["Text Primary", "hsl(0, 0%, 93%)"],
          ["Text Secondary", "hsl(0, 0%, 63%)"],
          ["Border", "rgba(255, 255, 255, 0.14)"],
          ["Gradient Develop", "#007cf0 -> #00dfd8"],
          ["Gradient Preview", "#7928ca -> #ff0080"],
          ["Gradient Ship", "#ff4d4d -> #f9cb28"]
        ],
        [
          ["Sans", "Geist"],
          ["Display", "Space Grotesk"],
          ["Mono", "Geist Mono"],
          ["Letter-spacing", "-0.03em headlines"]
        ],
        [
          ["Fast/Normal", "200ms"],
          ["Slow", "300ms"],
          ["Swift (bouncy)", "cubic-bezier(0.175, 0.885, 0.32, 1.1)"],
          ["Note", "1.1 overshoot creates premium feel"]
        ],
        "6px default (compact, professional)",
        "Compound shadows with white border + black outline",
        "Design system scalability, bold visual presence"
      ),

      // DS5 - Hybrid (no page break after)
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("DS5: Hybrid Premium (RECOMMENDED)")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "Theme: ", bold: true }), new TextRun("Light with warm gray (#F7F7F8)"),
        new TextRun({ text: "  |  Inspired by: ", bold: true }), new TextRun("Best of all 5 sites")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "Key Feature: ", bold: true }), new TextRun("Balanced approach - Clerk warmth + Linear polish + Vercel bounce + Polar speed")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Colors")] }),
      new Table({
        columnWidths: [3000, 6360],
        rows: [
          ["Primary", "#6366F1 (Indigo - between Linear & Clerk)"],
          ["Background", "#F7F7F8 (warm gray, NOT pure white)"],
          ["Card/Elevated", "#FFFFFF"],
          ["Text Primary", "#131316"],
          ["Text Secondary", "#42434D"],
          ["Border", "#D9D9DE"],
          ["Success", "#22C55E"],
          ["Error", "#EF4444"]
        ].map(([label, value]) => new TableRow({ children: [
          new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
            children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })] }),
          new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
            children: [new Paragraph({ children: [new TextRun({ text: value, font: "Courier New", size: 20 })] })] })
        ]}))
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300 }, children: [new TextRun("Typography")] }),
      new Table({
        columnWidths: [3000, 6360],
        rows: [
          ["Sans", "Inter (industry standard)"],
          ["Display", "Inter Display (headlines)"],
          ["Mono", "JetBrains Mono (developer favorite)"],
          ["Weight Scale", "400, 500, 600, 700"],
          ["Letter-spacing", "-0.05em headlines, 0 body"],
          ["Line Height", "1.5 body, 1.125 headlines"]
        ].map(([label, value]) => new TableRow({ children: [
          new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
            children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })] }),
          new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
            children: [new Paragraph({ children: [new TextRun(value)] })] })
        ]}))
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300 }, children: [new TextRun("Animations")] }),
      new Table({
        columnWidths: [3000, 6360],
        rows: [
          ["Fast", "150ms (Polar speed)"],
          ["Normal", "200ms"],
          ["Slow", "300ms"],
          ["Default ease", "cubic-bezier(0.4, 0, 0.2, 1)"],
          ["Bouncy ease", "cubic-bezier(0.175, 0.885, 0.32, 1.1)"],
          ["Note", "Use bouncy for primary interactions"]
        ].map(([label, value]) => new TableRow({ children: [
          new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
            children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })] }),
          new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
            children: [new Paragraph({ children: [new TextRun({ text: value, font: "Courier New", size: 20 })] })] })
        ]}))
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300 }, children: [new TextRun("Spacing & Radius")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Base unit: ", bold: true }), new TextRun("4px")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Primary gap: ", bold: true }), new TextRun("24px (space-6)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Section padding: ", bold: true }), new TextRun("80px vertical")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Default radius: ", bold: true }), new TextRun("6px (professional)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "Card radius: ", bold: true }), new TextRun("8px")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "CTA buttons: ", bold: true }), new TextRun("Full radius (pills) for friendliness")] }),

      new Paragraph({ spacing: { before: 200, after: 100 }, children: [
        new TextRun({ text: "Why Recommended: ", bold: true, color: "22C55E" })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Light theme appeals to broader audience (not just developers)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Warm gray is easier on eyes than pure white")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Inter font is universally supported and professional")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Bouncy animations add premium feel without being excessive")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Balanced approach works for both marketing and dashboard")] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/kirniy/dev/adapty-dev/docs/Adapty-Design-Systems-Reference.docx", buffer);
  console.log("Created: Adapty-Design-Systems-Reference.docx");
});
