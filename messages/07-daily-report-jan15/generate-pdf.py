#!/usr/bin/env python3
"""Generate PDF report with flowing paragraphs."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak
)
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY

styles = getSampleStyleSheet()

styles.add(ParagraphStyle(
    name='ReportTitle',
    parent=styles['Title'],
    fontSize=24,
    spaceAfter=10,
    textColor=HexColor('#1a1a1a'),
    alignment=TA_CENTER,
))

styles.add(ParagraphStyle(
    name='Subtitle',
    parent=styles['Normal'],
    fontSize=12,
    spaceAfter=20,
    textColor=HexColor('#666666'),
    alignment=TA_CENTER,
))

styles.add(ParagraphStyle(
    name='SectionHeader',
    parent=styles['Heading1'],
    fontSize=16,
    spaceBefore=25,
    spaceAfter=12,
    textColor=HexColor('#6720FF'),
))

styles.add(ParagraphStyle(
    name='SubHeader',
    parent=styles['Heading2'],
    fontSize=12,
    spaceBefore=15,
    spaceAfter=8,
    textColor=HexColor('#333333'),
    fontName='Helvetica-Bold',
))

styles.add(ParagraphStyle(
    name='Body',
    parent=styles['Normal'],
    fontSize=10,
    spaceBefore=6,
    spaceAfter=6,
    leading=14,
    alignment=TA_JUSTIFY,
))

styles.add(ParagraphStyle(
    name='BodyBold',
    parent=styles['Normal'],
    fontSize=10,
    spaceBefore=6,
    spaceAfter=6,
    leading=14,
    fontName='Helvetica-Bold',
))

doc = SimpleDocTemplate(
    "2026-01-15-REPORT-Daily-Update.pdf",
    pagesize=A4,
    rightMargin=20*mm,
    leftMargin=20*mm,
    topMargin=20*mm,
    bottomMargin=20*mm,
)

story = []

# Title
story.append(Paragraph("Daily Report - January 15, 2026", styles['ReportTitle']))
story.append(Paragraph("Adapty Website Redesign Project", styles['Subtitle']))

# Summary
story.append(Paragraph("SUMMARY", styles['SectionHeader']))
story.append(Paragraph(
    "Today, after receiving and studying all the feedback from previous prototypes via video, "
    "I was able to move forward in a constructive direction. As we agreed, in order to have a "
    "working version of the homepage by Friday (or at least a nearly finished draft version "
    "and a system for building all further pages), I took Oatmeal as the base and started "
    "building a section/block switching system.",
    styles['Body']
))
story.append(Paragraph(
    "This system is already working, and everything can be tested live. I tried to create "
    "quality variants for each block - quality over quantity, so each block has a maximum "
    "of 4 variants. All these variants are either created from Oatmeal template components "
    "adapted to our needs and style, or written completely custom.",
    styles['Body']
))
story.append(Paragraph(
    "I estimate the degree of polish and readiness of these components at about 40%. "
    "Tomorrow I plan to bring this to 60-80%. Now there is something to work with: we have "
    "a specific design system, specific requirements from you, and my vision has improved significantly.",
    styles['Body']
))
story.append(Paragraph(
    "<b>Git stats (since 15:00):</b> 13 commits, 59 files changed, +6,179 lines added, -477 deleted. "
    "Plus 26 uncommitted files with +310/-139 lines.",
    styles['Body']
))

# Section 1
story.append(Paragraph("1. DEBUG MENU - VARIANT SWITCHING SYSTEM", styles['SectionHeader']))
story.append(Paragraph(
    "Instead of choosing one 'correct' variant for each section, I built infrastructure that "
    "allows switching between variants right on the site in real-time. This turns the prototype "
    "into a living design system demo where you can quickly compare alternatives and discuss "
    "specific blocks.",
    styles['Body']
))
story.append(Paragraph(
    "Debug Menu is a floating panel in the bottom-right corner of the page. By default it's "
    "collapsed into a small icon. On click it expands and shows a list of all sections on the "
    "page with controls for switching between variants. The selection is automatically saved "
    "to localStorage, so on page reload everything stays as configured.",
    styles['Body']
))

story.append(Paragraph("Implemented Section Variants (18 total):", styles['SubHeader']))

variants_data = [
    ['Section', 'Variants'],
    ['Grid (background)', 'cursor-tracking, slow-drift (default), static, off'],
    ['Dashed Overlay', 'off, subtle, visible'],
    ['Section Borders', 'off, solid, dashed'],
    ['Header', 'pill-navbar, mega-menu (Aura)'],
    ['TrustedBy', 'marquee, static-grid (default), static-minimal'],
    ['CoreFeatures', 'colorful, muted, monochrome'],
    ['Stats', 'cards, inline, graph, floating'],
    ['Testimonials', 'editorial (large quotes), wall, carousel'],
    ['RoleCards', 'cards, tabs, horizontal'],
    ['Integrations', 'static-grid (default), marquee, categorized'],
]
t = Table(variants_data, colWidths=[100, 280])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#333333')),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#ffffff')),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('PADDING', (0, 0), (-1, -1), 6),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
]))
story.append(t)
story.append(Spacer(1, 10))

story.append(Paragraph(
    "You clearly said in the video: 'This is the last time I do a full review. From now on - "
    "only block by block.' This is exactly why the Debug Menu system is so important. Now we "
    "can discuss specific blocks, switch variants with one click, compare them side by side, "
    "and make decisions on each element separately.",
    styles['Body']
))

story.append(PageBreak())

# Section 2
story.append(Paragraph("2. CHANGES BASED ON VIDEO FEEDBACK", styles['SectionHeader']))

story.append(Paragraph("Fonts:", styles['SubHeader']))
story.append(Paragraph(
    "The original Oatmeal used Instrument Serif for headlines - that 'typographic' font you said "
    "'makes us look like some typographic product' and strongly distracts attention. Completely "
    "removed Instrument Serif, now Inter is used everywhere - both for headlines and body text. "
    "As you showed in the Oatmeal configurator, we need something neutral and modern like Inter or Gilroy.",
    styles['Body']
))

story.append(Paragraph("Grid (background):", styles['SubHeader']))
story.append(Paragraph(
    "Initially I understood your feedback as 'remove the grid entirely', but on rewatching the video "
    "it became clear you said something different: 'The floating grid in the back - that's also fine. "
    "That it follows the cursor - I wouldn't do that. It's too cheesy, a bit outdated.' So the grid "
    "itself is fine, the problem was only with cursor-following. Made 4 variants in debug menu, "
    "slow-drift is default (grid moves smoothly but not tied to cursor).",
    styles['Body']
))

story.append(Paragraph("Header (Phase 2A - mega-menu):", styles['SubHeader']))
story.append(Paragraph(
    "This was a big piece of work. You showed that our current header on adapty.io is often 2-3 levels "
    "deep, with section breakdowns. Oatmeal had a simple navbar with 4 links, no dropdowns at all. "
    "Ported the mega-menu header from AuraBuild, adapted it to Oatmeal styling. Now there are 4 full "
    "dropdown menus: ProductMenu (sidebar + 17 items across TECH/PAYWALLS/ANALYTICS), CasesMenu "
    "(11 case studies with metrics), ResourcesMenu (5 sections), DocsMenu (sidebar + SDK grid). "
    "Created centralized menuContent.ts (500 lines) with all navigation data.",
    styles['Body']
))

story.append(Paragraph("Colors:", styles['SubHeader']))
story.append(Paragraph(
    "Added Adapty purple (#6720FF) to the system in OKLCH format. You said Oatmeal is 'too gray' and "
    "'we need to find a place for our accent purple somehow'. Purple is now added to the palette, "
    "gradually finding applications in buttons, accents, hover effects. Kept the olive palette for "
    "backgrounds and neutral elements.",
    styles['Body']
))

# Section 3
story.append(Paragraph("3. DISCOVERY - ACHROMATIC", styles['SectionHeader']))
story.append(Paragraph(
    "I know we agreed no more new prototypes. But this was impossible to pass by - it would be "
    "foolish to overlook. While searching for materials, I discovered a fantastic UI starter-kit "
    "called Achromatic. Someone accidentally pushed the full code to a public GitHub repository - "
    "fresh version, with license.",
    styles['Body']
))
story.append(Paragraph(
    "This is not just a template - it's complete infrastructure for a SaaS project. Premium "
    "starter-kit on modern stack: Next.js 16, Auth.js (Google/Microsoft login), Prisma (PostgreSQL), "
    "Stripe (billing, subscriptions), Turborepo (monorepo).",
    styles['Body']
))

story.append(Paragraph("Three separate applications:", styles['SubHeader']))
apps_data = [
    ['App', 'Description', 'Port'],
    ['Dashboard', 'Full SaaS dashboard: auth, billing, settings, teams, API keys, webhooks, CRM', '3000'],
    ['Marketing', 'Marketing site: landing pages, blog (MDX), docs, changelog, legal pages', '3001'],
    ['Public API', 'REST API for external integrations', '3002'],
]
t = Table(apps_data, colWidths=[70, 270, 40])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#6720FF')),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#ffffff')),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('PADDING', (0, 0), (-1, -1), 6),
]))
story.append(t)
story.append(Spacer(1, 10))

story.append(Paragraph(
    "Everything we'll need going forward - auth, billing, docs, blog - is already there, designed "
    "in a unified style. And again in the direction we need: minimalism, polish, high modern taste. "
    "The styling is very close to our modified Oatmeal. Combined use is possible: Oatmeal for "
    "marketing landing pages, Achromatic for infrastructure (docs, blog, auth, dashboard). "
    "Will show both on tomorrow's call.",
    styles['Body']
))

story.append(PageBreak())

# Section 4
story.append(Paragraph("4. TECHNICAL STATE", styles['SectionHeader']))

story.append(Paragraph("Git Statistics (since 15:00 yesterday):", styles['SubHeader']))
git_data = [
    ['Metric', 'Value'],
    ['Commits', '13'],
    ['Files changed', '59'],
    ['Lines added', '+6,179'],
    ['Lines deleted', '-477'],
    ['Uncommitted changes', '26 files, +310/-139 lines'],
]
t = Table(git_data, colWidths=[150, 230])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#333333')),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#ffffff')),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('PADDING', (0, 0), (-1, -1), 6),
]))
story.append(t)
story.append(Spacer(1, 10))

story.append(Paragraph("Largest Section Files (after polishing):", styles['SubHeader']))
files_data = [
    ['File', 'Size', 'Variants'],
    ['Testimonials.tsx', '22 KB', '3 (editorial, wall, carousel)'],
    ['CoreFeatures.tsx', '21 KB', '3 (colorful, muted, monochrome)'],
    ['RoleCards.tsx', '17 KB', '3 (cards, tabs, horizontal)'],
    ['Integrations.tsx', '16 KB', '3 (static-grid, marquee, categorized)'],
    ['Stats.tsx', '10 KB', '4 (cards, inline, graph, floating)'],
]
t = Table(files_data, colWidths=[120, 50, 210])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#333333')),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#ffffff')),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('PADDING', (0, 0), (-1, -1), 6),
]))
story.append(t)
story.append(Spacer(1, 10))

story.append(Paragraph(
    "Each variant has detailed JSDoc with design philosophy and polished details. Uses spring physics, "
    "parallax effects, gradient masks for fade-out. New key components: debug-context.tsx (418 lines), "
    "DebugMenu.tsx (345 lines), menuContent.ts (500 lines), AuraHeader.tsx (311 lines), "
    "DashedGridOverlay.tsx (169 lines).",
    styles['Body']
))

# Section 5
story.append(Paragraph("5. READINESS ASSESSMENT", styles['SectionHeader']))
story.append(Paragraph(
    "Current readiness: <b>~40%</b>. Tomorrow target: <b>60-80%</b>.",
    styles['Body']
))

ready_data = [
    ['Aspect', 'Status', 'Remaining Work'],
    ['Content', '70%', 'Mega-menus filled (17 product items), check remaining links'],
    ['Styling', '50%', 'Fonts done, purple added, lines added. Need contrast work'],
    ['Polish', '30%', 'Basic animations work. Need micro-interactions everywhere'],
    ['Sections', '80%', '18 variants built. Need sticky-scroll features'],
    ['Responsive', '50%', 'Desktop ready. Need mobile testing'],
]
t = Table(ready_data, colWidths=[60, 40, 280])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#6720FF')),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#ffffff')),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('PADDING', (0, 0), (-1, -1), 6),
]))
story.append(t)

# Section 6
story.append(Paragraph("6. WEEK SUMMARY", styles['SectionHeader']))
story.append(Paragraph(
    "Maybe we haven't completed the maximum program for the week, but context matters. The things "
    "I'm mentioning are only part of it. All the tools, materials, conclusions, links and experience "
    "gathered this week - all of it will benefit us in the work and results.",
    styles['Body']
))

progress_data = [
    ['Day', 'Prototype', 'Quality', 'Approach'],
    ['Monday', 'Phase B (shadcn)', '4/10', 'UI library'],
    ['Tuesday', 'Phase A improved', '7/10', 'Vanilla Tailwind'],
    ['Wednesday', 'AuraBuild', '7/10', 'AI generation'],
    ['Thursday', 'Oatmeal', '8/10', 'Premium template'],
    ['Friday', 'Oatmeal + Debug', '8/10', '18 section variants'],
]
t = Table(progress_data, colWidths=[70, 120, 50, 140])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#333333')),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#ffffff')),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('PADDING', (0, 0), (-1, -1), 6),
]))
story.append(t)
story.append(Spacer(1, 10))

story.append(Paragraph(
    "Now we're much closer to not trying to build all our complex infrastructure and the entire "
    "official site with all sections manually. No - we can finally rely on quality materials.",
    styles['Body']
))

story.append(Spacer(1, 15))

# Links
story.append(Paragraph("LINKS", styles['SectionHeader']))
links_data = [
    ['Prototype', 'URL', 'Status'],
    ['Oatmeal', 'adapty-oatmeal-jan14-2026.vercel.app', 'DEPLOYED'],
    ['AuraBuild', 'adapty-aura-build-jan-14-2026.vercel.app', 'DEPLOYED'],
    ['Phase A', 'adapty-prototype.vercel.app', 'DEPLOYED'],
    ['Achromatic', 'Will be deployed before call', 'TBD'],
]
t = Table(links_data, colWidths=[80, 230, 70])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#333333')),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor('#ffffff')),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('PADDING', (0, 0), (-1, -1), 6),
]))
story.append(t)

story.append(Spacer(1, 30))
story.append(Paragraph("Kirill, January 16, 2026", styles['Body']))

doc.build(story)
print("PDF generated: 2026-01-15-REPORT-Daily-Update.pdf")
