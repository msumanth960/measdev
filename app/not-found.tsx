import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}