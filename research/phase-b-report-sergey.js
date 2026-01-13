const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat, ExternalHyperlink,
        HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign, PageNumber, PageBreak } = require('docx');
const fs = require('fs');

// Helper functions
const text = (content, opts = {}) => new TextRun({ text: content, ...opts });
const bold = (content, opts = {}) => new TextRun({ text: content, bold: true, ...opts });
const para = (children, opts = {}) => new Paragraph({ children: Array.isArray(children) ? children : [children], ...opts });
const heading1 = (content) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [text(content)] });
const heading2 = (content) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [text(content)] });
const heading3 = (content) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [text(content)] });
const spacer = () => para([text("")]);

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const createTable = (headers, rows, colWidths) => {
  const headerCells = headers.map((h, i) => new TableCell({
    borders: cellBorders,
    width: { size: colWidths[i], type: WidthType.DXA },
    shading: { fill: "E8F4FD", type: ShadingType.CLEAR },
    verticalAlign: VerticalAlign.CENTER,
    children: [para([bold(h)], { alignment: AlignmentType.CENTER })]
  }));

  const dataRows = rows.map(row => new TableRow({
    children: row.map((cell, i) => new TableCell({
      borders: cellBorders,
      width: { size: colWidths[i], type: WidthType.DXA },
      children: [para([text(cell)])]
    }))
  }));

  return new Table({
    columnWidths: colWidths,
    rows: [new TableRow({ tableHeader: true, children: headerCells }), ...dataRows]
  });
};

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 48, bold: true, color: "1a1a1a", font: "Arial" },
        paragraph: { spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "1a1a1a", font: "Arial" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "333333", font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "444444", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered1",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered2",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered3",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered4",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered5",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [para([text("ADAPTY Phase B — Исследование UI библиотек", { size: 18, color: "666666" })], { alignment: AlignmentType.RIGHT })] })
    },
    footers: {
      default: new Footer({ children: [para([text("Страница "), new TextRun({ children: [PageNumber.CURRENT] }), text(" из "), new TextRun({ children: [PageNumber.TOTAL_PAGES] })], { alignment: AlignmentType.CENTER })] })
    },
    children: [
      // TITLE
      new Paragraph({ heading: HeadingLevel.TITLE, children: [text("UI Библиотеки и AI-Native Workflow")] }),
      para([text("Исследование для Phase B редизайна ADAPTY")], { alignment: AlignmentType.CENTER }),
      para([text("Январь 2026 | Исследователь: Claude Code (Opus 4.5)")], { alignment: AlignmentType.CENTER, spacing: { after: 400 } }),

      // TLDR BOX
      heading1("🎯 TLDR — Что выбрать"),
      para([bold("Короткий ответ: ", { color: "006600" }), text("shadcn/ui (бесплатно) + React Bits (бесплатно) + официальный shadcn MCP (бесплатно)")]),
      spacer(),
      para([text("Это даёт нам:")]),
      para([text("60+ компонентов с полным контролем над кодом")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("110+ анимированных компонентов для micro-interactions")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("AI-интеграция через MCP без каких-либо затрат")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Полная совместимость с Next.js 15 + Tailwind CSS v4")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("На потом: "), text("Shadcn Blocks ($149) для готовых маркетинговых секций, 21st.dev ($16/мес) для AI-генерации уникальных компонентов.")]),

      para([text(""), { children: [new PageBreak()] }]),

      // INTRO
      heading1("1. Введение"),
      para([text("В январе 2026 года фронтенд-разработка переживает парадигмальный сдвиг. Мы перешли от \"composition\" (ручной сборки компонентов) к \"orchestration\" — AI-агенты вроде Claude Code теперь берут на себя имплементацию, пока разработчик определяет \"вайб\" и направление.")]),
      spacer(),
      para([text("Ключевой критерий выбора библиотеки теперь — не количество компонентов или размер бандла, а \"AI-прозрачность\": может ли AI-агент читать исходный код? Есть ли MCP-сервер для актуальной документации? Совместим ли стилинг с LLM-редактированием?")]),
      spacer(),
      para([bold("Контекст проекта ADAPTY:")]),
      para([text("Фреймворк: Next.js 15 (App Router)")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Стилизация: Tailwind CSS v4")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Эстетика: Light, airy, modern (Linear, Vercel, Clerk)")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Типы страниц: Homepage, Pricing, Features, Schedule Demo")], { numbering: { reference: "bullets", level: 0 } }),

      para([text(""), { children: [new PageBreak()] }]),

      // FREE TOOLS SECTION
      heading1("2. Бесплатные инструменты (рекомендуем начать с них)"),

      heading2("2.1 shadcn/ui — Основа стека (БЕСПЛАТНО)"),
      para([bold("URL: "), text("https://ui.shadcn.com/")]),
      para([bold("Архитектура: "), text("Copy-paste (код копируется в проект, НЕ npm-пакет)")]),
      spacer(),
      para([text("shadcn/ui — это не библиотека в традиционном смысле. Это паттерн: компоненты копируются напрямую в проект (components/ui/), что даёт полный контроль над кодом. В отличие от npm-пакетов, здесь нет \"чёрного ящика\" — AI-агент может читать, понимать и модифицировать любой компонент.")]),
      spacer(),
      para([bold("Ключевые преимущества:")]),
      para([text("60+ компонентов (Button, Dialog, Select, Table, Charts и др.)")], { numbering: { reference: "numbered1", level: 0 } }),
      para([text("Построен на Radix UI — полная WCAG 2.1 доступность")], { numbering: { reference: "numbered1", level: 0 } }),
      para([text("Tailwind CSS v4 ready — переменные в globals.css")], { numbering: { reference: "numbered1", level: 0 } }),
      para([text("React 19 совместимость — Server Components из коробки")], { numbering: { reference: "numbered1", level: 0 } }),
      para([text("Официальный бесплатный MCP-сервер")], { numbering: { reference: "numbered1", level: 0 } }),
      spacer(),
      para([bold("MCP интеграция (ЛУЧШАЯ В КЛАССЕ):")]),
      para([text("Команда установки: npx shadcn@latest mcp init --client claude")], { indent: { left: 360 } }),
      spacer(),
      para([text("MCP позволяет Claude Code:")]),
      para([text("Искать компоненты в реестре")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Получать актуальную документацию и примеры")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Устанавливать компоненты командой (npx shadcn add button dialog)")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Работать с приватными registry")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("Вердикт: "), text("MUST HAVE. Нулевая стоимость, максимальный контроль, отличная AI-интеграция.", { color: "006600" })]),

      spacer(),
      heading2("2.2 React Bits — Анимации (БЕСПЛАТНО)"),
      para([bold("URL: "), text("https://reactbits.dev/")]),
      para([bold("Фокус: "), text("Animated components и micro-interactions")]),
      spacer(),
      para([text("React Bits фокусируется не на утилитарности, а на \"delight\". Это коллекция анимированных компонентов для создания премиальных интерфейсов в стиле Linear/Vercel.")]),
      spacer(),
      para([bold("110+ компонентов:")]),
      para([text("Text Animations: SplitText, BlurText — кинематографичные входы текста")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Interactive Cards: TiltedCard, SpotlightCard — реакция на мышь")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Backgrounds: Particles, Hyperspeed — визуальная глубина без video")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Animated Lists, Hover Effects, Micro-interactions")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("Интеграция: "), text("Copy-paste или CLI, стилизация через Tailwind. Есть свой MCP-сервер (@react-bits).")]),
      spacer(),
      para([bold("Вердикт: "), text("РЕКОМЕНДУЕМ. Идеальное дополнение к shadcn для достижения эстетики Linear/Vercel.", { color: "006600" })]),

      spacer(),
      heading2("2.3 Официальный shadcn MCP (БЕСПЛАТНО)"),
      para([text("MCP (Model Context Protocol) — это ключевая технология, делающая \"vibe coding\" возможным. Это открытый стандарт, позволяющий AI-моделям безопасно взаимодействовать с внешними данными.")]),
      spacer(),
      para([bold("Как работает MCP для UI библиотек:")]),
      para([text("Подключение — запуск локального MCP-сервера (npx @shadcn/ui-mcp-server)")], { numbering: { reference: "numbered2", level: 0 } }),
      para([text("Экспозиция инструментов — сервер предоставляет AI tools: search, docs, install")], { numbering: { reference: "numbered2", level: 0 } }),
      para([text("Динамические запросы — Claude запрашивает актуальную документацию")], { numbering: { reference: "numbered2", level: 0 } }),
      para([text("Выполнение — AI генерирует код с актуальными API, без галлюцинаций")], { numbering: { reference: "numbered2", level: 0 } }),
      spacer(),
      para([bold("Конфигурация .mcp.json:")]),
      para([text('{ "mcpServers": { "shadcn": { "command": "npx", "args": ["-y", "shadcn@latest", "mcp"] } } }')], { indent: { left: 360 } }),
      spacer(),
      para([bold("Доступные операции:")]),
      para([text("get_project_registries — список registry")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("search_items_in_registries — поиск компонентов")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("view_items_in_registries — документация")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("get_add_command_for_items — команды установки")], { numbering: { reference: "bullets", level: 0 } }),

      para([text(""), { children: [new PageBreak()] }]),

      // PAID TOOLS SECTION
      heading1("3. Платные инструменты (для рассмотрения позже)"),

      heading2("3.1 Shadcn Blocks — $149 (lifetime)"),
      para([bold("URL: "), text("https://www.shadcnblocks.com/")]),
      spacer(),
      para([text("Shadcn Blocks — это готовые маркетинговые секции, построенные на shadcn/ui. Если shadcn даёт \"атомы\", то Blocks даёт \"молекулы\" и \"организмы\" — полностью собранные Hero-секции, Pricing Tables, Testimonials.")]),
      spacer(),
      para([bold("Контент (январь 2026):")]),
      para([text("1,110 блоков в разных категориях")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("1,145 вариантов компонентов")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("11 premium templates")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      createTable(
        ["Категория", "Количество", "Релевантность для ADAPTY"],
        [
          ["Hero", "175", "ВЫСОКАЯ — Landing pages"],
          ["Feature", "272", "ВЫСОКАЯ — Product showcases"],
          ["Pricing", "35", "ВЫСОКАЯ — Pricing page"],
          ["Testimonial", "20+", "ВЫСОКАЯ — Social proof"],
          ["Navbar", "18", "ВЫСОКАЯ — Navigation"],
          ["CTA", "50+", "ВЫСОКАЯ — Конверсия"],
          ["Footer", "25", "СРЕДНЯЯ"]
        ],
        [2500, 2000, 4860]
      ),
      spacer(),
      para([bold("Цены:")]),
      para([text("Pro: $149 (lifetime) — 976 блоков, CLI")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Premium: $299 (lifetime) — все блоки + templates + Figma kit")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("ROI анализ: "), text("1,110 блоков = ~$0.13/блок. Экономия ~40-60 часов разработки. При ставке $50/час = $2,000-3,000 value. ROI: 12-18x.")]),
      spacer(),
      para([bold("Вердикт: "), text("РЕКОМЕНДУЕМ для Phase B. Hero и Feature блоки значительно ускорят разработку.", { color: "0066CC" })]),

      spacer(),
      heading2("3.2 21st.dev / Magic MCP — от $16/мес"),
      para([bold("URL: "), text("https://21st.dev/")]),
      spacer(),
      para([text("21st.dev — это AI-powered генерация компонентов. Описываете компонент на естественном языке → AI генерирует 3 варианта → выбираете и интегрируете.")]),
      spacer(),
      para([bold("Как работает:")]),
      para([text("Опишите компонент на естественном языке")], { numbering: { reference: "numbered3", level: 0 } }),
      para([text("AI генерирует 3 варианта")], { numbering: { reference: "numbered3", level: 0 } }),
      para([text("Выберите подходящий и интегрируйте")], { numbering: { reference: "numbered3", level: 0 } }),
      para([text("Полное владение сгенерированным кодом")], { numbering: { reference: "numbered3", level: 0 } }),
      spacer(),
      para([bold("Особенности:")]),
      para([text("Magic AI Agent — интеграция в IDE")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Community registry — компоненты от сообщества")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("SVGL интеграция — профессиональные логотипы")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Поддержка Cursor, Windsurf, VS Code + Cline")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("Цены:")]),
      para([text("Free: 5 запросов (очень ограничено)")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Платные планы: от $16/месяц")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("Вердикт: "), text("РЕКОМЕНДУЕМ КАК ДОПОЛНЕНИЕ. Использовать для кастомных компонентов, которых нет в shadcn/blocks.", { color: "0066CC" })]),

      spacer(),
      heading2("3.3 Shadcn Studio — $199 (одноразово)"),
      para([bold("URL: "), text("https://shadcnstudio.com/")]),
      spacer(),
      para([text("Shadcn Studio — расширенная версия shadcn с 700+ блоками и 1,000+ вариантами. Главная фишка — MCP с командами /ftc (Figma to Code) и /theme.")]),
      spacer(),
      para([bold("Уникальные возможности:")]),
      para([text("Figma-to-Code через MCP")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("AI Theme Generator (claude-3-7-sonnet)")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Visual component customization")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("Вердикт: "), text("ОПЦИОНАЛЬНО. Полезно если нужна Figma-интеграция, но $199 за MCP может быть избыточным.", { color: "CC6600" })]),

      spacer(),
      heading2("3.4 Shadcn Design — Figma Kit"),
      para([text("Shadcn Design решает проблему \"hand-off\" — предоставляет Figma kit, который является pixel-perfect копией shadcn/ui кода. Когда дизайнер размещает \"Secondary Button\" в Figma, разработчик реализует его с теми же props.")]),
      spacer(),
      para([bold("Вердикт: "), text("ПОЛЕЗНО если дизайн предшествует разработке.", { color: "0066CC" })]),

      para([text(""), { children: [new PageBreak()] }]),

      // COMPARISON TABLE
      heading1("4. Сравнительная таблица MCP интеграций"),
      spacer(),
      createTable(
        ["Библиотека", "MCP", "Цена", "Auth", "Качество"],
        [
          ["shadcn/ui", "Да ✅", "БЕСПЛАТНО", "Нет", "Отлично"],
          ["React Bits", "Да ✅", "Free/Pro", "Нет", "Хорошо"],
          ["Shadcn Blocks", "Через shadcn", "$149+", "Нет", "Отлично"],
          ["21st.dev", "Да ✅", "$16+/мес", "API Key", "Отлично"],
          ["Shadcn Studio", "Да (PRO)", "$199", "API Key", "Отлично"],
          ["NextUI/HeroUI", "Да ✅", "Бесплатно", "Нет", "Хорошо"],
          ["Mantine", "Нет ❌", "-", "-", "-"],
          ["Chakra UI", "Да ✅", "Paid Pro", "API Key", "Хорошо"]
        ],
        [2340, 1560, 1560, 1560, 2340]
      ),

      para([text(""), { children: [new PageBreak()] }]),

      // ALTERNATIVES
      heading1("5. Альтернативные библиотеки (НЕ рекомендуем)"),

      heading2("5.1 NextUI (HeroUI) — НЕ рекомендуем"),
      para([text("В 2026 NextUI переименовался в HeroUI. Красивые компоненты, но это npm-пакет (не copy-paste). Меньше гибкости для AI-агентов.")]),
      para([bold("Минусы: "), text("Зависимость в node_modules, кастомизация через slots/props вместо прямого редактирования кода.")]),

      spacer(),
      heading2("5.2 Mantine — НЕ рекомендуем"),
      para([text("120+ компонентов, 70 hooks. Отличная библиотека для дашбордов, но:")]),
      para([text("Не Tailwind-native (своя система стилей)")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Нет официального MCP")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Dense UI — не подходит для \"airy\" эстетики ADAPTY")], { numbering: { reference: "bullets", level: 0 } }),

      spacer(),
      heading2("5.3 Material UI (MUI) — НЕ рекомендуем"),
      para([text("Material Design эстетика не соответствует целевому стилю (Linear, Vercel, Clerk).")]),

      spacer(),
      heading2("5.4 Chakra UI v3"),
      para([text("Chakra UI v3 перешёл на headless архитектуру (Ark UI + Panda CSS). Интересно, но экосистема фрагментирована между v2 и v3. Для greenfield проекта добавляет лишнюю сложность по сравнению с shadcn.")]),

      para([text(""), { children: [new PageBreak()] }]),

      // WORKFLOW
      heading1("6. Vibe Coding Workflow"),
      para([text("\"Vibe Coding\" — это структурированная модель, где разработчик задаёт высокоуровневый intent (\"vibe\"), а AI выполняет имплементацию.")]),

      spacer(),
      heading2("6.1 CLAUDE.md — мозг AI-агента"),
      para([text("CLAUDE.md — самый важный файл в репозитории. Он определяет constraints, контекст и правила для AI.")]),
      spacer(),
      para([bold("Рекомендуемое содержание CLAUDE.md для ADAPTY:")]),
      spacer(),
      para([text("# ADAPTY Project Guidelines")], { indent: { left: 360 } }),
      para([text("")], { indent: { left: 360 } }),
      para([text("## 1. Technology Stack")], { indent: { left: 360 } }),
      para([text("- Framework: Next.js 15 (App Router)")], { indent: { left: 720 } }),
      para([text("- Styling: Tailwind CSS v4 (переменные в globals.css)")], { indent: { left: 720 } }),
      para([text("- Components: shadcn/ui (@/components/ui)")], { indent: { left: 720 } }),
      para([text("- Icons: lucide-react")], { indent: { left: 720 } }),
      para([text("- Forms: react-hook-form + zod")], { indent: { left: 720 } }),
      para([text("")], { indent: { left: 360 } }),
      para([text("## 2. Coding Principles")], { indent: { left: 360 } }),
      para([text("- Server Components по умолчанию")], { indent: { left: 720 } }),
      para([text("- TypeScript strict mode")], { indent: { left: 720 } }),
      para([text("- Named Exports (не Default)")], { indent: { left: 720 } }),
      para([text("")], { indent: { left: 360 } }),
      para([text("## 3. Design")], { indent: { left: 360 } }),
      para([text("- Эстетика: Linear/Vercel")], { indent: { left: 720 } }),
      para([text("- Subtle borders, clear typography, whitespace")], { indent: { left: 720 } }),

      spacer(),
      heading2("6.2 Типичный день Vibe Coder"),
      para([bold("09:00 — Planning:")]),
      para([text('> plan "Build the Pricing Page with monthly/yearly toggle"')], { indent: { left: 360 } }),
      para([text("Claude сканирует проект, проверяет shadcn-mcp, генерирует план.")]),
      spacer(),
      para([bold("09:15 — Refine:")]),
      para([text("Разработчик уточняет: \"Use Enterprise Pricing block, replace checkmarks with React Bits animation\"")]),
      spacer(),
      para([bold("09:20 — Execute:")]),
      para([text("> run")], { indent: { left: 360 } }),
      para([text("Claude: fetches блоки → устанавливает компоненты → синтезирует код → обновляет стили")]),
      spacer(),
      para([bold("09:30 — Done:")]),
      para([text("Фича, на которую обычно уходит 4-6 часов, готова за 30 минут.")]),

      para([text(""), { children: [new PageBreak()] }]),

      // IMPLEMENTATION STRATEGY
      heading1("7. Стратегия внедрения"),

      heading2("7.1 Рекомендуемый стек"),
      spacer(),
      para([text("┌─────────────────────────────────────────────────┐")]),
      para([text("│              ADAPTY Phase B Stack               │")]),
      para([text("├─────────────────────────────────────────────────┤")]),
      para([text("│  Foundation: shadcn/ui (БЕСПЛАТНО)              │")]),
      para([text("│  ├── MCP: Official shadcn MCP (БЕСПЛАТНО)       │")]),
      para([text("│  └── Animations: React Bits (БЕСПЛАТНО)         │")]),
      para([text("│                                                 │")]),
      para([text("│  Later: Shadcn Blocks Pro ($149)                │")]),
      para([text("│  └── Для готовых маркетинговых секций           │")]),
      para([text("│                                                 │")]),
      para([text("│  Optional: 21st.dev Magic ($16/мес)             │")]),
      para([text("│  └── Для кастомных компонентов                  │")]),
      para([text("└─────────────────────────────────────────────────┘")]),

      spacer(),
      heading2("7.2 План внедрения"),
      spacer(),
      para([bold("Фаза 1: Foundation (Неделя 1)")]),
      para([text("Инициализация Next.js 15 + Tailwind v4 + TypeScript")], { numbering: { reference: "numbered4", level: 0 } }),
      para([text("Создание CLAUDE.md файла")], { numbering: { reference: "numbered4", level: 0 } }),
      para([text("Установка shadcn MCP: npx shadcn@latest mcp init --client claude")], { numbering: { reference: "numbered4", level: 0 } }),
      para([text("Базовая инициализация shadcn: npx shadcn@latest init")], { numbering: { reference: "numbered4", level: 0 } }),
      spacer(),
      para([bold("Фаза 2: Core Structure (Неделя 2)")]),
      para([text("Scaffold страниц через Claude Code")], { numbering: { reference: "numbered5", level: 0 } }),
      para([text("Глобальные компоненты: Navbar, Footer")], { numbering: { reference: "numbered5", level: 0 } }),
      para([text("Базовые страницы: Homepage, Pricing, Features")], { numbering: { reference: "numbered5", level: 0 } }),
      spacer(),
      para([bold("Фаза 3: Polish (Неделя 3)")]),
      para([text("Интеграция React Bits анимаций")]),
      para([text("Micro-interactions, hover effects")]),
      para([text("Responsive адаптация")]),
      spacer(),
      para([bold("Фаза 4: Launch (Неделя 4)")]),
      para([text("Accessibility audit")]),
      para([text("Performance tuning")]),
      para([text("Deploy to Vercel")]),

      para([text(""), { children: [new PageBreak()] }]),

      // COST ANALYSIS
      heading1("8. Анализ стоимости"),

      heading2("8.1 Сценарий: Минимальный (бесплатный)"),
      createTable(
        ["Инструмент", "Стоимость", "Примечание"],
        [
          ["shadcn/ui", "$0", "Open Source"],
          ["React Bits", "$0", "Open Source core"],
          ["shadcn MCP", "$0", "Официальный, без auth"],
          ["ИТОГО", "$0", ""]
        ],
        [4680, 2340, 2340]
      ),

      spacer(),
      heading2("8.2 Сценарий: Рекомендуемый"),
      createTable(
        ["Инструмент", "Стоимость", "Примечание"],
        [
          ["shadcn/ui", "$0", "Open Source"],
          ["React Bits", "$0", "Open Source core"],
          ["shadcn MCP", "$0", "Официальный"],
          ["Shadcn Blocks Pro", "$149", "1,110 маркетинговых блоков"],
          ["21st.dev (1 месяц)", "$16", "AI генерация"],
          ["ИТОГО", "$165", ""]
        ],
        [4680, 2340, 2340]
      ),

      spacer(),
      heading2("8.3 ROI анализ рекомендуемого сценария"),
      para([text("Shadcn Blocks ($149): 1,110 блоков = ~$0.13/блок")]),
      para([text("Экономия времени: ~40-60 часов разработки")]),
      para([text("При ставке $50/час: $2,000-3,000 value")]),
      para([bold("ROI: 12-18x возврат инвестиций")]),

      para([text(""), { children: [new PageBreak()] }]),

      // FINAL RECOMMENDATIONS
      heading1("9. Финальные рекомендации"),

      heading2("9.1 Что использовать"),
      spacer(),
      para([bold("ОБЯЗАТЕЛЬНО (бесплатно):")]),
      para([text("shadcn/ui — основа, 60+ компонентов, полный контроль")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("React Bits — анимации, micro-interactions")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("Official shadcn MCP — AI интеграция")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([bold("РЕКОМЕНДУЕМ (платно, на потом):")]),
      para([text("Shadcn Blocks Pro ($149) — готовые маркетинговые секции")], { numbering: { reference: "bullets", level: 0 } }),
      para([text("21st.dev ($16/мес) — AI генерация уникальных компонентов")], { numbering: { reference: "bullets", level: 0 } }),

      spacer(),
      heading2("9.2 Что НЕ использовать"),
      createTable(
        ["Библиотека", "Причина"],
        [
          ["NextUI/HeroUI", "Менее гибкая, npm-зависимость, платные features"],
          ["Mantine", "Не Tailwind-native, нет MCP"],
          ["MUI", "Material Design не подходит под эстетику"],
          ["Ant Design", "Enterprise-focused, тяжёлая"],
          ["shadcn/studio", "$200 за MCP — избыточно"]
        ],
        [3120, 6240]
      ),

      spacer(),
      heading2("9.3 Ключевые выводы"),
      para([text("Industry Trend: Copy-paste архитектура (shadcn model) побеждает традиционные npm-пакеты, потому что даёт разработчикам полный контроль.")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([text("AI Integration: MCP становится стандартом для AI-assisted разработки. Библиотеки без MCP будут отставать.")], { numbering: { reference: "bullets", level: 0 } }),
      spacer(),
      para([text("2026 Stack: Современный фронтенд-стек конвергирует к: Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui + AI через MCP.")], { numbering: { reference: "bullets", level: 0 } }),

      spacer(),
      spacer(),
      para([text("—")], { alignment: AlignmentType.CENTER }),
      para([text("Исследование проведено: Claude Code (Opus 4.5)")], { alignment: AlignmentType.CENTER }),
      para([text("Источники: Firecrawl + Gemini Deep Research")], { alignment: AlignmentType.CENTER }),
      para([text("Январь 2026")], { alignment: AlignmentType.CENTER }),
    ]
  }]
});

const outputPath = '/Users/kirniy/dev/adapty-dev/research/phase-b-report-sergey.docx';
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Document saved to: ${outputPath}`);
});
