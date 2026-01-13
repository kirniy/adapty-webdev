'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--bg-primary)] px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Something went wrong
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          We encountered an unexpected error. Please try again.
        </p>
        {error.digest && (
          <p className="text-sm text-[var(--text-muted)]">
            Error ID: {error.digest}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-[var(--button-radius)] bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--color-primary-hover)]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-[var(--button-radius)] border border-[var(--border-default)] bg-transparent px-6 py-3 font-medium text-[var(--text-primary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-secondary)]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
