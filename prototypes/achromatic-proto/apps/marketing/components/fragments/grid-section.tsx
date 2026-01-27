import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

export type GridSectionProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  hideVerticalGridLines?: boolean;
  hideBottomGridLine?: boolean;
  containerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
  /** Background variant - light theme only */
  background?: 'white' | 'gray' | 'subtle';
  /** Full width mode - no max-width constraint, no vertical lines */
  fullWidth?: boolean;
};

/**
 * GridSection Component
 *
 * A section wrapper matching Linear's layout:
 * - max-w-5xl (1024px) for ALL sections - consistent narrow column
 * - 24px horizontal padding
 * - No fullWidth exceptions - everything in one column
 */
export function GridSection({
  children,
  hideVerticalGridLines,
  hideBottomGridLine,
  background = 'white',
  fullWidth = false, // Kept for API compatibility but now applies same width
  containerProps: { className = '', ...containerProps } = {},
  ...other
}: GridSectionProps): React.JSX.Element {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    subtle: 'bg-gray-50/50'
  };

  // Linear pattern: ALL sections use max-w-5xl (1024px) with px-6 (24px) padding
  return (
    <section {...other} className={cn(bgClasses[background], other.className)}>
      <div
        className={cn('px-6', className)}
        {...containerProps}
      >
        <div className="relative max-w-5xl mx-auto">
          {!hideVerticalGridLines && (
            <>
              {/* Left vertical line - subtle */}
              <div className="absolute inset-y-0 left-0 w-px bg-gray-100 hidden lg:block" />
              {/* Right vertical line - subtle */}
              <div className="absolute inset-y-0 right-0 w-px bg-gray-100 hidden lg:block" />
            </>
          )}
          <div className="relative">
            {children}
          </div>
        </div>
      </div>
      {!hideBottomGridLine && <div className="h-px w-full bg-gray-100 mt-px" />}
    </section>
  );
}
