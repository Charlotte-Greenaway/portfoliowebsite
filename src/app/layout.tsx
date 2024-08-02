import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/_components/navbar';
import TopButton from '@/_components/TopButton';


export const metadata: Metadata = {
  title: 'Charlotte Greenaway - Software Developer',
  description: 'Software developer in Devon - experienced in React, Node.js, and Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">

      <body><NavBar/>{children}<TopButton/></body>

    </html>
  )
}
