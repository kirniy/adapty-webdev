import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';

export interface TextLinkProps
  extends Omit<React.ComponentProps<typeof Link>, 'className'> {
  /** Show arrow icon after text */
  showArrow?: boolean;
  /** Show external link icon (auto-detected for external URLs) */
  showExternal?: boolean;
  /** Additional className */
  className?: string;
  children: React.ReactNode;
}

/**
 * Consistent inline text link with proper hover transitions.
 *
 * Features:
 * - 150ms color transition (ui-ux-pro-max compliant)
 * - Optional arrow/external icons
 * - Proper underline behavior
 * - Motion-reduce support
 */
export function TextLink({
  href,
  showArrow,
  showExternal,
  className,
  children,
  ...props
}: TextLinkProps): React.JSX.Element {
  // Auto-detect external links
  const isExternal =
    typeof href === 'string' &&
    (href.startsWith('http://') || href.startsWith('https://'));

  const shouldShowExternal = showExternal ?? isExternal;

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-1 text-primary font-medium',
        'transition-colors duration-150 ease-out',
        'hover:text-primary/80 hover:underline',
        'motion-reduce:transition-none',
        className
      )}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      {...props}
    >
      {children}
      {showArrow && !shouldShowExternal && (
        <ArrowRightIcon className="size-4" />
      )}
      {shouldShowExternal && (
        <ExternalLinkIcon className="size-3.5" />
      )}
    </Link>
  );
}
