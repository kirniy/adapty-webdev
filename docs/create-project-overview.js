const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer,
        AlignmentType, HeadingLevel, BorderStyle, WidthType, LevelFormat, PageNumber,
        ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 56, bold: true, color: "1a1a2e", font: "Arial" },
        paragraph: { spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, color: "1a1a2e", font: "Arial" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "333333", font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "444444", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "ADAPTY Website Redesign - Project Overview", italics: true, size: 20, color: "666666" })]
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
      // Title
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("ADAPTY Website Redesign")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 },
        children: [new TextRun({ text: "Project Overview & Research Summary", size: 28, color: "666666" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 },
        children: [new TextRun({ text: "January 12, 2026", size: 22, color: "888888" })] }),

      // Executive Summary
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("This document summarizes the strategic redesign of the ADAPTY website using systematic A/B testing methodology. The project aims to identify the optimal design system and UI library combination through evidence-based testing across 5 design system variants and 5 UI library options.")
      ]}),

      // Project Background
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Project Background")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Context:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Kirill Kholodenko hired as AI-native web developer at ADAPTY")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Entry task (adapty-pt2) successfully completed - website recreation")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Now executing full strategic redesign with systematic testing")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Stakeholder: Sergey Muratov")] }),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Key Meeting Insights:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Code-First Design: Figma is auxiliary, code is source of truth")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Full Autonomy: Kirill has carte blanche on design decisions")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("LEGO Approach: Use shadcn/ui as foundation")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 300 }, children: [new TextRun("Target Aesthetic: Light, airy, modern (not 'heavy luxury 2020')")] }),

      // Methodology
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Methodology")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The project follows a systematic A/B testing approach across two phases:")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Phase A: Design System Testing")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("Test 5 design system variants using vanilla Tailwind CSS (NO UI libraries):")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("DS1: Linear-Inspired (Dark, premium, micro-interactions)")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("DS2: Attio-Inspired (Light, editorial, LAB colors)")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("DS3: Polar-Inspired (Dark, minimal, fast 150ms animations)")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("DS4: Vercel-Inspired (True black, gradients, bouncy easing)")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { after: 200 }, children: [new TextRun("DS5: Hybrid Premium (RECOMMENDED - warm gray + best of all)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Phase B: UI Library Testing")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("Test 5 UI library options using the winning design system:")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("shadcn/ui - Component foundation")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("shadcn blocks - Pre-built sections")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("21st.dev - AI-powered components")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("React Bits - Animation library")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { after: 300 }, children: [new TextRun("Custom Mix - Best of each")] }),

      // Reference Site Analysis
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Reference Site Analysis")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("5 premium SaaS sites were analyzed for design patterns and inspiration:")] }),

      new Table({
        columnWidths: [1800, 1400, 2000, 4160],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 1800, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Site", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 1400, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Theme", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 2000, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Font", bold: true })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, width: { size: 4160, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Key Features", bold: true })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Linear")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Dark")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Inter Variable")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4160, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("67+ animations, layered backgrounds")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Attio")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Light")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Inter + 3 others")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4160, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("LAB color space, 4-font system")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Polar")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Dark")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Geist")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4160, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Fast 150ms animations, minimal")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Vercel")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Dark")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Geist + Space Grotesk")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4160, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Bouncy easing, compound shadows")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Clerk")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Light")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Suisse")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4160, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun("Warm gray (#F7F7F8), pill buttons")] })] })
          ]})
        ]
      }),

      // Key Patterns
      new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 400 }, children: [new TextRun("Key Patterns Identified")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Universal Patterns")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("4px base spacing - Industry standard")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Geometric sans-serif fonts - Inter/Geist dominant")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Negative letter-spacing - Premium typography feel")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Blue-purple accent colors - Tech industry standard")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("6-12px border radius - Professional but modern")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun("200-300ms animations - Responsive but smooth")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Emerging Patterns")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("LAB color space - More accurate color perception")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Bouncy easing - Premium micro-interactions (>1.0 overshoot)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Compound shadows - Better dark mode depth")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Pill-shaped CTAs - Friendly, modern feel")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 300 }, children: [new TextRun("Display fonts for headlines - Visual hierarchy")] }),

      // Recommendations
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Recommendations for Adapty")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "Based on analysis, DS5 (Hybrid Premium) is recommended", bold: true }),
        new TextRun(" as the starting point. It combines the best elements from all reference sites while maintaining broad appeal for both developers and non-technical stakeholders.")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Recommended Specifications")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Theme: Light with warm gray (#F7F7F8) - not pure white")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Typography: Inter + Inter Display + JetBrains Mono")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Colors: Indigo primary (#6366F1), warm zinc grays")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Animations: 150-200ms duration with bouncy easing")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Radius: 6px default (professional), full radius for CTAs")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 300 }, children: [new TextRun("Spacing: 4px base unit, 24px primary gap")] }),

      // Current Progress
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Current Progress")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Completed:", bold: true, color: "22C55E" })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Repository structure created")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("SKELETON.md with 14 homepage sections defined")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Reference site extraction (5/5 complete)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Synthesis documents created (patterns, differentiators, recommendations)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("DS token files (all 5 variants filled)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Automation scripts ready")] }),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Next Steps:", bold: true, color: "3B82F6" })] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("Build Phase A prototypes (5 DS variants)")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("Deploy to Vercel for comparison")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("Gather feedback from Sergey")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, children: [new TextRun("Select winning DS for Phase B")] }),
      new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { after: 300 }, children: [new TextRun("Test UI library combinations")] }),

      // Tech Stack
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Tech Stack")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Next.js 15 (App Router)")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Tailwind CSS 4")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("TypeScript")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("shadcn/ui ecosystem")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Framer Motion")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("Vercel deployment")] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/kirniy/dev/adapty-dev/docs/Adapty-Project-Overview.docx", buffer);
  console.log("Created: Adapty-Project-Overview.docx");
});
