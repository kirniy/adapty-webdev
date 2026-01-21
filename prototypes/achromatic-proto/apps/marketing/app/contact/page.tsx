'use client';

import * as React from 'react';

import { useHeroVariant } from '~/lib/debug-context';
import { Contact } from '~/components/sections/contact';
import { FAQSwitcher, CTASwitcher } from '~/components/sections/section-switchers';

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
