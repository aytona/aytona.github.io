import './globals.css'
import { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Christopher Aytona | Data Analyst & Automation Developer',
  description: 'Data Analyst & Automation Developer building ETL pipelines, AI agents, and operational intelligence at scale — and founder of TapOrbit Studios, shipping commercial games. Python, SQL, AWS, QuickSight.',
  keywords: ['Data Analyst', 'Automation Developer', 'ETL', 'Python', 'SQL', 'AWS', 'QuickSight', 'Game Developer', 'Unity', 'Founder', 'TapOrbit Studios'],
  authors: [{ name: 'Christopher Aytona' }],
  openGraph: {
    title: 'Christopher Aytona | Data Analyst & Automation Developer',
    description: 'Building ETL pipelines, AI agents, and operational intelligence at scale. Founder of TapOrbit Studios.',
    url: 'https://aytona.github.io',
    siteName: 'Christopher Aytona',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://aytona.github.io/og.png', width: 1200, height: 630, alt: 'Christopher Aytona — Data Analyst & Automation Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Aytona | Data Analyst & Automation Developer',
    description: 'Building ETL pipelines, AI agents, and operational intelligence at scale. Founder of TapOrbit Studios.',
    images: ['https://aytona.github.io/og.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon-192.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
