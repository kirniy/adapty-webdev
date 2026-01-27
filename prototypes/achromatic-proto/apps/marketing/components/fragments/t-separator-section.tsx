'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

/**
 * T-Separator Section Component
 *
 * Linear's signature layout pattern for feature sections.
 * Creates a T-shaped separator layout with:
 * - Main feature spanning full width (top)
 * - Two sub-features side by side (bottom) divided by a vertical separator
 *
 * Visual pattern:
 * ┌─────────────────────────────────────┐
 * │         Main Feature (Full Width)   │
 * │         ──────────────────          │ ← border-bottom
 * ├──────────────────┬──────────────────┤
 * │  Left Feature    │  Right Feature   │ ← border-r divider
 * │                  │                  │
 * └──────────────────┴──────────────────┘
 *
 * @example
 * <TSeparatorSection
 *   mainFeature={<MainCard />}
 *   leftFeature={<LeftCard />}
 *   rightFeature={<RightCard />}
 * />
 */

export interface TSeparatorSectionProps {
  /** Main feature content - spans full width at top */
  mainFeature: React.ReactNode;
  /** Left feature content - bottom left */
  leftFeature: React.ReactNode;
  /** Right feature content - bottom right */
  rightFeature: React.ReactNode;
  /** Optional className for the container */
  className?: string;
  /** Optional className for the main feature wrapper */
  mainFeatureClassName?: string;
  /** Optional className for the left feature wrapper */
  leftFeatureClassName?: string;
  /** Optional className for the right feature wrapper */
  rightFeatureClassName?: string;
  /** Border color - defaults to gray-200 for light theme visibility */
  borderColor?: string;
}

export function TSeparatorSection({
  mainFeature,
  leftFeature,
  rightFeature,
  className,
  mainFeatureClassName,
  leftFeatureClassName,
  rightFeatureClassName,
  borderColor = 'border-gray-200'
}: TSeparatorSectionProps): React.JSX.Element {
  return (
    <div className={className}>
      {/* Main Feature - Full width with bottom border */}
      <div className={cn('pb-8 border-b', borderColor, mainFeatureClassName)}>
        {mainFeature}
      </div>

      {/* Bottom Grid - Two columns with vertical divider */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Feature - Right border as divider */}
        <div
          className={cn(
            'pt-8 pr-0 md:pr-8',
            'border-b md:border-b-0 md:border-r',
            borderColor,
            leftFeatureClassName
          )}
        >
          {leftFeature}
        </div>

        {/* Right Feature */}
        <div
          className={cn(
            'pt-8 pl-0 md:pl-8',
            borderColor,
            rightFeatureClassName
          )}
        >
          {rightFeature}
        </div>
      </div>
    </div>
  );
}

/**
 * T-Separator Card Wrapper
 *
 * A helper component that wraps content in a card styled according to
 * Linear's design system with consistent border-radius and borders.
 *
 * Specifications (LIGHT THEME):
 * - Border radius: rounded-[20px] (or rounded-2xl)
 * - Background: white
 * - Border: gray-200 (visible on light backgrounds)
 * - Padding: p-6 or p-8 depending on content
 */

export interface TSeparatorCardProps {
  children: React.ReactNode;
  className?: string;
  /** Visual variant - defaults to 'default' */
  variant?: 'default' | 'ghost' | 'elevated';
  /** Optional hover effect */
  hoverable?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export function TSeparatorCard({
  children,
  className,
  variant = 'default',
  hoverable = false,
  onClick
}: TSeparatorCardProps): React.JSX.Element {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    ghost: 'bg-transparent border border-gray-100',
    elevated: 'bg-white border border-gray-200 shadow-sm'
  };

  const isClickable = hoverable || !!onClick;
  const hoverClasses = isClickable
    ? 'hover:shadow-lg hover:border-gray-300 transition-all duration-150 cursor-pointer'
    : '';

  return (
    <div
      className={cn(
        'rounded-[20px] overflow-hidden',
        variantClasses[variant],
        hoverClasses,
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * T-Separator Feature Card
 *
 * A complete feature card with image area and content area,
 * following Linear's card pattern.
 */

export interface TSeparatorFeatureCardProps {
  /** Optional image/visual content (rendered at top) */
  visual?: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Optional action/button at bottom */
  action?: React.ReactNode;
  /** Optional children content (takes precedence over title/description) */
  children?: React.ReactNode;
  /** Click handler for the entire card */
  onClick?: () => void;
  className?: string;
  visualClassName?: string;
  contentClassName?: string;
}

export function TSeparatorFeatureCard({
  visual,
  title,
  description,
  action,
  children,
  onClick,
  className,
  visualClassName,
  contentClassName
}: TSeparatorFeatureCardProps): React.JSX.Element {
  return (
    <TSeparatorCard className={className} hoverable={!!action || !!onClick} onClick={onClick}>
      {/* Visual area */}
      {visual && (
        <div
          className={cn(
            'relative aspect-[16/10] bg-gray-50 overflow-hidden',
            visualClassName
          )}
        >
          {visual}
        </div>
      )}

      {/* Content area */}
      <div className={cn('p-6', contentClassName)}>
        {children ? (
          children
        ) : (
          <>
            {title && (
              <h3 className="font-semibold text-lg mb-2 tracking-tight text-gray-900">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-[15px] text-gray-500 leading-relaxed">
                {description}
              </p>
            )}
            {action && <div className="mt-5">{action}</div>}
          </>
        )}
      </div>
    </TSeparatorCard>
  );
}
