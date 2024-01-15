import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | 内容聚合中心',
    default: '内容聚合中心',
  },
  description: '内容聚合中心'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
