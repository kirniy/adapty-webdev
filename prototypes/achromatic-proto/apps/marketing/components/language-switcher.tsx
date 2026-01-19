'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { LANGUAGES, type Language } from '~/lib/menu-data';

// ============================================================================
// LANGUAGE SWITCHER (Hover-based)
// ============================================================================

type LanguageSwitcherProps = {
  /** Show full label or just code */
  showLabel?: boolean;
  /** Additional className for the trigger button */
  className?: string;
};

export function LanguageSwitcher({
  showLabel = false,
  className
}: LanguageSwitcherProps): React.JSX.Element {
  const [currentLang, setCurrentLang] = React.useState<Language>(LANGUAGES[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Small delay before closing to allow moving to dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleLanguageSelect = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Note: In a real app, this would trigger navigation or locale change
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        type="button"
        className={cn(
          'flex items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
          isOpen && 'text-foreground',
          className
        )}
      >
        <Image
          src={currentLang.flag}
          alt=""
          width={16}
          height={16}
          className="size-4 rounded-sm object-cover"
        />
        <span className="hidden sm:inline">{currentLang.code}</span>
        {showLabel && (
          <span className="hidden text-xs text-muted-foreground md:inline">
            {currentLang.label}
          </span>
        )}
        <ChevronDownIcon
          className={cn(
            'size-3.5 opacity-50 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-1 w-48 rounded-xl border bg-background p-1 shadow-lg"
          >
            {LANGUAGES.filter((lang) => lang.code !== currentLang.code).map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageSelect(lang)}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-colors hover:bg-accent"
              >
                <Image
                  src={lang.flag}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 rounded-sm object-cover"
                />
                <span className="flex-1 text-sm">{lang.label}</span>
                <span className="text-xs text-muted-foreground">{lang.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
