'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@workspace/ui/components/dropdown-menu';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { LANGUAGES, type Language } from '~/lib/menu-data';

// ============================================================================
// LANGUAGE SWITCHER
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

  const handleLanguageSelect = (lang: Language) => {
    setCurrentLang(lang);
    // Note: In a real app, this would trigger navigation or locale change
    // For now, it just updates the local state for visual demonstration
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            'h-8 gap-1.5 px-2 text-sm font-medium text-muted-foreground hover:text-foreground',
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
            <span className="hidden md:inline text-xs text-muted-foreground">
              {currentLang.label}
            </span>
          )}
          <ChevronDownIcon className="size-3.5 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-48">
        {LANGUAGES.filter((lang) => lang.code !== currentLang.code).map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageSelect(lang)}
            className="flex items-center gap-2.5 cursor-pointer"
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
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
