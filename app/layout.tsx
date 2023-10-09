'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'


const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient()

// export const metadata: Metadata = {
//   title: 'Nextjs Blog',
//   description: 'A blogging platform',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
