import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-stone-900 mb-4">404</h1>
        <p className="text-lg text-stone-500 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
