import './globals.css'
import { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Christopher Aytona | Data & Automation Engineer',
  description: 'Data & Automation Engineer building ETL pipelines, AI agents, and operational intelligence at scale. Python, SQL, AWS, QuickSight.',
  keywords: ['Data Analyst', 'Automation Engineer', 'ETL', 'Python', 'SQL', 'AWS', 'QuickSight'],
  authors: [{ name: 'Christopher Aytona' }],
  openGraph: {
    title: 'Christopher Aytona | Data & Automation Engineer',
    description: 'Building ETL pipelines, AI agents, and operational intelligence at scale.',
    url: 'https://aytona.github.io',
    siteName: 'Christopher Aytona',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Aytona | Data & Automation Engineer',
    description: 'Building ETL pipelines, AI agents, and operational intelligence at scale.',
  },
  robots: { index: true, follow: true },
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
