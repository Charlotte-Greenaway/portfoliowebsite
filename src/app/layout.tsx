import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar';
import UILibrary from '@/providers/UILibrary';


export const metadata: Metadata = {
  title: 'Charlotte Greenaway',
  description: 'Junior software developer in Devon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">

      <body><UILibrary><NavBar/>{children}</UILibrary></body>

    </html>
  )
}
