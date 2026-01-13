export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)]">
      <div className="flex flex-col items-center gap-4">
        {/* Animated spinner using CSS variables */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--border-default)] border-t-[var(--color-primary)]" />
        <p className="text-sm text-[var(--text-secondary)]">Loading...</p>
      </div>
    </div>
  );
}
