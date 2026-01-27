'use client';

import * as React from 'react';

import { Contact } from '~/components/sections/contact';
import {
  CTASwitcher,
  FAQSwitcher
} from '~/components/sections/section-switchers';
import { useHeroVariant } from '~/lib/debug-context';

// Contact page: Contact form with FAQ support
export default function ContactPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();

  return (
    <>
      {/* Contact form (hero section) */}
      {heroVariant !== 'off' && <Contact />}

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
