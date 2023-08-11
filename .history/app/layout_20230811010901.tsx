import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Scripter',
  description: 'Web development company, that specialices in web aplication development. Developing software using front and back end technologies. Designed to solve real life problems.',
  keywords: ['Next.js', 'React', 'JavaScript', "Development", "Web", "Fiverr", "Freelance", "Web Developer", "Codux", "Google App Script", "Google Drive", "Google sheets", "MongoDB", "Node.js", "Tailwind CSS"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        </body>
    </html>
  )
}
