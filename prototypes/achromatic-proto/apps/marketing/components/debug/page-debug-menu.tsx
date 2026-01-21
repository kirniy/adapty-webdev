'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDownIcon, SettingsIcon } from 'lucide-react';
import { cn } from '@workspace/ui/lib/utils';

export type SectionVariantConfig<T extends string = string> = {
  name: string;
  current: T;
  variants: readonly T[];
  onChange: (value: T) => void;
};

type PageDebugMenuProps = {
  pageId: string;
  sections: SectionVariantConfig[];
};

export function PageDebugMenu({ pageId, sections }: PageDebugMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Persist to localStorage with page-specific key
  React.useEffect(() => {
    const stored = localStorage.getItem(`debug-${pageId}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        sections.forEach((section) => {
          if (parsed[section.name] && section.variants.includes(parsed[section.name])) {
            section.onChange(parsed[section.name]);
          }
        });
      } catch {
        // Ignore parse errors
      }
    }
  }, [pageId, sections]);

  // Save on change
  const handleChange = (sectionName: string, value: string, onChange: (v: string) => void) => {
    onChange(value);
    const current = JSON.parse(localStorage.getItem(`debug-${pageId}`) || '{}');
    current[sectionName] = value;
    localStorage.setItem(`debug-${pageId}`, JSON.stringify(current));
  };

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 48 }}
        className="overflow-hidden rounded-xl border bg-background/95 backdrop-blur-sm shadow-lg"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-2 px-4 py-3 text-sm font-medium"
        >
          <span className="flex items-center gap-2">
            <SettingsIcon className="size-4" />
            {pageId} Debug
          </span>
          <ChevronDownIcon className={cn('size-4 transition-transform', isOpen && 'rotate-180')} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border-t px-4 py-3 space-y-3"
            >
              {sections.map((section) => (
                <div key={section.name} className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">
                    {section.name}
                  </label>
                  <select
                    value={section.current}
                    onChange={(e) => handleChange(section.name, e.target.value, section.onChange)}
                    className="w-full rounded-md border bg-background px-2 py-1 text-sm"
                  >
                    {section.variants.map((variant) => (
                      <option key={variant} value={variant}>
                        {variant}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
