import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Christopher Aytona | Data Engineer • CEO • Developer',
  description: 'Portfolio of Christopher Aytona — Data & Automation Engineer, CEO of TapOrbit Studios, and full-stack developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
