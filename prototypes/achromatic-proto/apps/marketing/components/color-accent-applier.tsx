'use client';

import { useEffect } from 'react';

import { useColorAccentVariant } from '~/lib/debug-context';

export function ColorAccentApplier() {
  const colorAccent = useColorAccentVariant();

  useEffect(() => {
    const body = document.body;

    // Remove all color accent classes
    body.classList.remove(
      'color-accent-full',
      'color-accent-subtle',
      'color-accent-minimal'
    );

    // Add the current one (only if not 'full' which is the default)
    if (colorAccent !== 'full') {
      body.classList.add(`color-accent-${colorAccent}`);
    }
  }, [colorAccent]);

  return null;
}
