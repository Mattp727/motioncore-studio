import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-gray-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-white text-dark-bg font-semibold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}

