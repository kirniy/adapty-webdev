'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

import { routes } from '@workspace/routes';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import { Badge } from '@workspace/ui/components/badge';
import { Logo } from '@workspace/ui/components/logo';
import { Portal } from '@workspace/ui/components/portal';
import { ThemeSwitcher } from '@workspace/ui/components/theme-switcher';
import { RemoveScroll } from '@workspace/ui/lib/remove-scroll';
import { cn } from '@workspace/ui/lib/utils';

import { LanguageSwitcher } from '~/components/language-switcher';
import {
  MOBILE_MAIN_MENU,
  MOBILE_SUBMENU_DATA,
} from '~/lib/menu-data';

// ============================================================================
// MOBILE MENU COMPONENT
// ============================================================================

export function MobileMenu({
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const [expandedMenu, setExpandedMenu] = React.useState<string | null>(null);
  const pathname = usePathname();

  // Close menu on route change
  React.useEffect(() => {
    setOpen(false);
    setExpandedMenu(null);
  }, [pathname]);

  // Handle responsive breakpoint changes
  React.useEffect(() => {
    const handleResize = () => {
      const mediaQueryList = window.matchMedia('(min-width: 1024px)');
      if (mediaQueryList.matches && open) {
        setOpen(false);
        setExpandedMenu(null);
      }
    };

    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    mediaQueryList.addEventListener('change', handleResize);
    return () => mediaQueryList.removeEventListener('change', handleResize);
  }, [open]);

  const handleToggleMobileMenu = (): void => {
    setOpen((prev) => !prev);
    if (open) {
      setExpandedMenu(null);
    }
  };

  const handleCloseMenu = (): void => {
    setOpen(false);
    setExpandedMenu(null);
  };

  const handleBackToMain = (): void => {
    setExpandedMenu(null);
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Mobile header with logo and toggle */}
      <div
        className={cn('flex items-center justify-between', className)}
        {...other}
      >
        <Link href={routes.marketing.Index}>
          <Logo />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-expanded={open}
          aria-label="Toggle Mobile Menu"
          onClick={handleToggleMobileMenu}
          className="flex aspect-square h-fit select-none flex-col items-center justify-center gap-1 rounded-full p-2"
        >
          <motion.div
            className="w-5 origin-center border-t-2 border-primary"
            animate={
              open ? { rotate: '45deg', y: '5px' } : { rotate: '0deg', y: 0 }
            }
            transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
          />
          <motion.div
            className="w-5 origin-center border-t-2 border-primary"
            animate={
              open
                ? { rotate: '-45deg', y: '-5px' }
                : { rotate: '0deg', y: 0 }
            }
            transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
          />
        </Button>
      </div>

      {/* Mobile menu panel (portal + scroll lock) */}
      {open && (
        <Portal asChild>
          <RemoveScroll allowPinchZoom enabled>
            <AnimatePresence mode="wait">
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                onClick={handleCloseMenu}
              />

              {/* Slide-in panel with spring physics */}
              <motion.div
                key="panel"
                initial={{ x: '100%', opacity: 0.8 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0.8 }}
                transition={{
                  type: 'spring',
                  duration: shouldReduceMotion ? 0.01 : 0.4,
                  bounce: 0.1,
                }}
                className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-[400px] bg-background shadow-2xl"
              >
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b px-4 py-4">
                    <Link
                      href={routes.marketing.Index}
                      className="flex items-center gap-2"
                      onClick={handleCloseMenu}
                    >
                      <Logo className="h-5 w-auto" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <LanguageSwitcher className="h-8" />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCloseMenu}
                        className="size-8 rounded-lg"
                        aria-label="Close menu"
                      >
                        <XIcon className="size-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Content (scrollable) */}
                  <div className="flex-1 overflow-y-auto px-4 py-4">
                    <AnimatePresence mode="wait">
                      {!expandedMenu ? (
                        <MainMenuView
                          key="main"
                          onSubmenuClick={setExpandedMenu}
                          onLinkClick={handleCloseMenu}
                        />
                      ) : (
                        <SubmenuView
                          key={expandedMenu}
                          menuKey={expandedMenu}
                          onBack={handleBackToMain}
                          onLinkClick={handleCloseMenu}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer CTAs */}
                  <div className="flex gap-3 border-t bg-background px-4 py-4">
                    <a
                      href="https://app.adapty.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: 'outline' }),
                        'flex-1 rounded-xl'
                      )}
                    >
                      Sign up
                    </a>
                    <a
                      href="/schedule-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: 'default' }),
                        'flex-1 rounded-xl'
                      )}
                    >
                      Contact sales
                    </a>
                  </div>

                  {/* Theme switcher */}
                  <div className="flex items-center justify-between border-t px-4 py-3">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeSwitcher />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </RemoveScroll>
        </Portal>
      )}
    </>
  );
}

// ============================================================================
// MAIN MENU VIEW
// ============================================================================

type MainMenuViewProps = {
  onSubmenuClick: (menuKey: string) => void;
  onLinkClick: () => void;
};

function MainMenuView({ onSubmenuClick, onLinkClick }: MainMenuViewProps): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16, filter: 'blur(4px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -8, filter: 'blur(2px)' }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
    >
      <nav className="flex flex-col">
        {MOBILE_MAIN_MENU.map((item) => {
          if (item.hasSubmenu) {
            const dataKey = item.dataKey || item.label;
            return (
              <button
                key={item.label}
                onClick={() => onSubmenuClick(dataKey)}
                className="flex w-full items-center justify-between border-b border-border/50 py-4 text-left text-[17px] font-semibold text-foreground transition-colors hover:text-primary"
              >
                {item.label}
                <ChevronRightIcon className="size-5 text-muted-foreground" />
              </button>
            );
          }

          const isExternal = item.href?.startsWith('http');
          return (
            <Link
              key={item.label}
              href={item.href || '#'}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              onClick={onLinkClick}
              className={cn(
                'block border-b border-border/50 py-4 text-[17px] font-semibold transition-colors',
                item.highlight
                  ? 'text-[#FF8A00] hover:text-[#FF8A00]/80'
                  : 'text-foreground hover:text-primary'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}

// ============================================================================
// SUBMENU VIEW
// ============================================================================

type SubmenuViewProps = {
  menuKey: string;
  onBack: () => void;
  onLinkClick: () => void;
};

function SubmenuView({ menuKey, onBack, onLinkClick }: SubmenuViewProps): React.JSX.Element {
  const menuData = MOBILE_SUBMENU_DATA[menuKey];

  if (!menuData) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 16, filter: 'blur(4px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, x: 8, filter: 'blur(2px)' }}
        transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 pb-4 font-semibold text-primary"
        >
          <ChevronLeftIcon className="size-4" />
          Back
        </button>
        <p className="text-sm text-muted-foreground">Menu not found.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 16, filter: 'blur(4px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: 8, filter: 'blur(2px)' }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
    >
      {/* Back button with menu title */}
      <button
        onClick={onBack}
        className="mb-4 flex w-full items-center gap-2 border-b border-border pb-4 font-semibold text-primary"
      >
        <ChevronLeftIcon className="size-4" />
        {menuKey}
      </button>

      {/* Top links (if any) */}
      {menuData.topLinks && menuData.topLinks.length > 0 && (
        <div className="mb-6">
          {menuData.topLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={onLinkClick}
              className="flex items-center gap-2 py-2.5 text-[15px] font-semibold text-foreground transition-colors hover:text-primary"
            >
              {link.title}
              {link.badge && (
                <Badge variant="secondary" className="h-5 rounded-full px-2 text-[10px] font-semibold uppercase">
                  {link.badge}
                </Badge>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Sections */}
      {menuData.sections?.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {section.title}
          </h3>
          {section.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={onLinkClick}
              className="flex items-center gap-2 py-2.5 text-[15px] text-foreground transition-colors hover:text-primary"
            >
              {item.title}
              {item.badge && (
                <Badge variant="secondary" className="h-5 rounded-full px-2 text-[10px] font-semibold uppercase">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
