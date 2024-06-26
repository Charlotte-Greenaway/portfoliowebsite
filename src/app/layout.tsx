import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/_components/navbar';
import UILibrary from '@/providers/UILibrary';
import TopButton from '@/_components/TopButton';


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

      <body><UILibrary><NavBar/>{children}<TopButton/></UILibrary></body>

    </html>
  )
}
