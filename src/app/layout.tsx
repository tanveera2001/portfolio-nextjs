
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}