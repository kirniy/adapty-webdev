import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--bg-primary)] px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-8xl font-bold tracking-tight text-[var(--color-primary)]">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          Page Not Found
        </h2>
        <p className="max-w-md text-[var(--text-secondary)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <Link
        href="/"
        className="rounded-[var(--button-radius)] bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--color-primary-hover)]"
      >
        Back to Home
      </Link>
    </div>
  );
}
