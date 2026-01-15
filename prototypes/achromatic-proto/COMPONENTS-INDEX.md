# Achromatic Template - Components Index

Reference document for AI agents copying components to other projects.

---

## 1. UI Components (`packages/ui/src/components/`)

### Form & Input
| Component | File | Description |
|-----------|------|-------------|
| Button | `button.tsx` | Variants: default, destructive, outline, secondary, ghost, link |
| Input | `input.tsx` | Base text input |
| InputPassword | `input-password.tsx` | Password with show/hide toggle |
| InputSearch | `input-search.tsx` | Search with clear button |
| InputOTP | `input-otp.tsx` | 6-digit OTP input |
| InputColor | `input-color.tsx` | Color picker input |
| InputNumber | `input-number.tsx` | Number with increment/decrement |
| InputWithAdornments | `input-with-adornments.tsx` | Input with prefix/suffix |
| Textarea | `textarea.tsx` | Multi-line text |
| Checkbox | `checkbox.tsx` | Checkbox input |
| RadioGroup | `radio-group.tsx` | Radio button group |
| RadioCard | `radio-card.tsx` | Radio as card |
| Switch | `switch.tsx` | Toggle switch |
| Select | `select.tsx` | Dropdown select |
| MultiSelect | `multi-select.tsx` | Multi-select dropdown |
| Toggle | `toggle.tsx` | Toggle button |
| ToggleGroup | `toggle-group.tsx` | Group of toggles |
| TagInput | `tag-input.tsx` | Tag/chip input |
| Slider | `slider.tsx` | Range slider |
| DatePicker | `date-picker.tsx` | Date selection |
| Calendar | `calendar.tsx` | Full calendar |
| ColorPicker | `color-picker.tsx` | Detailed color picker |
| EmojiPopover | `emoji-popover.tsx` | Emoji picker |

### Layout
| Component | File | Description |
|-----------|------|-------------|
| Card | `card.tsx` | Container with header/footer/content |
| Page | `page.tsx` | Page wrapper |
| DescriptionList | `description-list.tsx` | Term/description list |
| Resizable | `resizable.tsx` | Resizable container |
| ScrollArea | `scroll-area.tsx` | Custom scrollable area |
| Sidebar | `sidebar.tsx` | Sidebar navigation |
| Separator | `separator.tsx` | Visual divider |
| AspectRatio | `aspect-ratio.tsx` | Fixed aspect ratio |

### Dialog & Modal
| Component | File | Description |
|-----------|------|-------------|
| Dialog | `dialog.tsx` | Modal dialog |
| AlertDialog | `alert-dialog.tsx` | Confirmation dialog |
| Drawer | `drawer.tsx` | Side drawer |
| Popover | `popover.tsx` | Popover container |
| HoverCard | `hover-card.tsx` | Hover-triggered card |
| Sheet | `sheet.tsx` | Slide-out panel |

### Navigation
| Component | File | Description |
|-----------|------|-------------|
| Breadcrumb | `breadcrumb.tsx` | Breadcrumb navigation |
| Pagination | `pagination.tsx` | Page controls |
| NavigationMenu | `navigation-menu.tsx` | Top navigation |
| Menubar | `menubar.tsx` | Menu bar |
| Tabs | `tabs.tsx` | Tab navigation |
| DropdownMenu | `dropdown-menu.tsx` | Dropdown menu |
| ContextMenu | `context-menu.tsx` | Right-click menu |

### Data Display
| Component | File | Description |
|-----------|------|-------------|
| Table | `table.tsx` | Table with sorting/filtering |
| DataTable | `data-table.tsx` | Advanced data table (TanStack) |
| Carousel | `carousel.tsx` | Image/content carousel (Embla) |
| TreeView | `tree-view.tsx` | Hierarchical tree |
| Rating | `rating.tsx` | Star rating |
| Progress | `progress.tsx` | Progress bar |
| Skeleton | `skeleton.tsx` | Loading skeleton |

### Feedback
| Component | File | Description |
|-----------|------|-------------|
| Alert | `alert.tsx` | Alert message box |
| Badge | `badge.tsx` | Status badge |
| Spinner | `spinner.tsx` | Loading spinner |
| Sonner | `sonner.tsx` | Toast notifications |
| EmptyState | `empty-state.tsx` | Empty placeholder |

### Advanced
| Component | File | Description |
|-----------|------|-------------|
| Form | `form.tsx` | React Hook Form wrapper |
| TextEditor | `text-editor.tsx` | Rich text editor (Lexical) |
| Command | `command.tsx` | Command palette |
| ThemeToggle | `theme-toggle.tsx` | Dark/light toggle |
| Chart | `chart.tsx` | Chart visualization |
| ImageDropzone | `image-dropzone.tsx` | Drag-drop upload |
| Cropper | `cropper.tsx` | Image crop tool |

### Hooks (`packages/ui/src/hooks/`)
- `use-callback-ref.tsx` - Stable callback reference
- `use-media-query.tsx` - Responsive media query
- `use-mounted.tsx` - Client-side mount detection
- `use-theme.tsx` - Theme context

---

## 2. Dashboard Pages (`apps/dashboard/app/`)

### Auth Flow
| Page | Path | Purpose |
|------|------|---------|
| Sign In | `/auth/sign-in` | Login page |
| Sign Up | `/auth/sign-up` | Registration |
| Forgot Password | `/auth/forgot-password` | Password reset request |
| Reset Password | `/auth/reset-password/request/[requestId]` | Reset form |
| Verify Email | `/auth/verify-email/request/[token]` | Email verification |
| TOTP | `/auth/totp` | 2FA input |
| Recovery Code | `/auth/recovery-code` | Backup codes |

### Onboarding
| Page | Path | Purpose |
|------|------|---------|
| Start | `/onboarding` | Onboarding index |
| User Setup | `/onboarding/user` | Profile creation |
| Org Setup | `/onboarding/organization` | Organization creation |

### Organization Dashboard
| Page | Path | Purpose |
|------|------|---------|
| Home | `/organizations/[slug]/home` | Dashboard with widgets |
| Contacts | `/organizations/[slug]/contacts` | Contact list |
| Contact Detail | `/organizations/[slug]/contacts/[contactId]` | Single contact |

### Account Settings (`/settings/account/`)
| Section | Parallel Routes | Purpose |
|---------|-----------------|---------|
| Profile | `@personalDetails`, `@preferences`, `@dangerZone` | User profile |
| Security | `@changePassword`, `@connectedAccounts`, `@multiFactorAuthentication`, `@manageSessions` | Security settings |
| Notifications | `@transactionalEmails`, `@marketingEmails` | Email preferences |

### Organization Settings (`/settings/organization/`)
| Section | Parallel Routes | Purpose |
|---------|-----------------|---------|
| Billing | `@plan`, `@invoices`, `@billingAddress`, `@billingEmail` | Subscription & billing |

---

## 3. Marketing Pages (`apps/marketing/app/`)

| Page | Path | Purpose |
|------|------|---------|
| Homepage | `/` | Landing page |
| Pricing | `/pricing` | Pricing plans |
| Story | `/story` | Company story |
| Careers | `/careers` | Job listings |
| Contact | `/contact` | Contact form |
| Blog | `/blog` | Blog listing |
| Blog Post | `/blog/[...slug]` | Single post |
| Docs | `/docs/[[...slug]]` | Documentation |
| Privacy | `/privacy-policy` | Privacy policy |
| Cookies | `/cookie-policy` | Cookie policy |
| Terms | `/terms-of-use` | Terms of service |

---

## 4. Auth Package (`packages/auth/src/`)

### Key Exports
```typescript
import {
  auth,              // Get current session
  dedupedAuth,       // Cached auth()
  signIn,            // Sign in action
  signOut,           // Sign out action
  checkSession,      // Session type guard
  authConfig         // NextAuth config
} from '@workspace/auth';
```

### Files
| File | Purpose |
|------|---------|
| `index.ts` | Main exports, NextAuth setup |
| `adapter.ts` | Database adapter |
| `session.ts` | Session config (30-day expiry) |
| `callbacks.ts` | JWT/session callbacks |
| `providers.ts` | OAuth providers |
| `permissions.ts` | RBAC |
| `verification.ts` | Email verification |
| `invitations.ts` | Team invitations |
| `password.ts` | Password management |

---

## 5. Billing Package (`packages/billing/src/`)

### Key Exports
```typescript
import { billingConfig } from '@workspace/billing/config';
import { BillingProvider } from '@workspace/billing/provider';
```

### Pricing Tiers
| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Limited |
| Pro | $24/mo or $199/yr | AI features, 7-day trial |
| Lifetime | $699 one-time | All Pro features |
| Enterprise | Custom | Full features |

### Files
| File | Purpose |
|------|---------|
| `config.ts` | Product/plan definitions |
| `webhook.ts` | Stripe webhook handler |
| `provider/stripe/` | Stripe implementation |
| `data/*.ts` | Database sync functions |

---

## 6. Other Packages

| Package | Purpose |
|---------|---------|
| `analytics/` | GA, PostHog, Umami providers |
| `api-keys/` | API key management |
| `common/` | Shared utils, app constants |
| `database/` | Prisma client & migrations |
| `email/` | NodeMailer, Resend, SendGrid |
| `monitoring/` | Sentry integration |
| `rate-limit/` | Rate limiting |
| `routes/` | URL builders |
| `webhooks/` | Webhook handlers |

---

## Import Patterns

```typescript
// UI Components
import { Button } from '@workspace/ui/components/button';
import { Card } from '@workspace/ui/components/card';

// Auth
import { auth, signIn, signOut } from '@workspace/auth';

// Billing
import { billingConfig } from '@workspace/billing/config';

// Routes
import { routes } from '@workspace/routes';

// Common
import { APP_NAME } from '@workspace/common/app';
```

---

## Key Patterns

- **Parallel Routes**: Dashboard uses `@` prefix for parallel loading
- **CVA Variants**: Components use class-variance-authority
- **Radix Primitives**: Accessibility via Radix UI
- **Server Actions**: Mutations via server actions, not API routes
- **Zod Validation**: Runtime validation with TypeScript inference
