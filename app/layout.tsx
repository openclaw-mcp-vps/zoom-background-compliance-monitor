import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BackgroundGuard – Video Call Compliance Monitor',
  description: 'Monitor team video backgrounds for compliance. Detect inappropriate backgrounds, alert managers, and suggest professional alternatives.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a259fa12-c4a1-44ed-a543-a0c74b204431"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
