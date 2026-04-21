import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Hafiz Basharat | Full Stack Developer',
  description: 'Portfolio of Hafiz Basharat, a Full Stack Developer specializing in Angular, React, and Node.js.',
}

import MouseFollower from '@/components/MouseFollower'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <MouseFollower />
        {children}
      </body>
    </html>
  )
}
