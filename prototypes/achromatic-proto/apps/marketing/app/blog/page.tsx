'use client';

import * as React from 'react';

import {
  BlogSwitcher,
  CTASwitcher
} from '~/components/sections/section-switchers';

// Blog listing page: All blog posts
export default function BlogPage(): React.JSX.Element {
  return (
    <>
      {/* Blog posts - shared switcher (default or featured variants) */}
      <BlogSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
