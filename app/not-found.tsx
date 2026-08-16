import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-neutral-400 text-lg mb-8">This page doesn't exist.</p>
      <Link
        href="/"
        className="glass px-6 py-3 rounded-xl hover:border-cyan-400/30 transition-colors text-cyan-400 font-medium"
      >
        ← Back to Home
      </Link>
    </main>
  )
}
