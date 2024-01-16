import Theme from '@/app/theme'

import './globals.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

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
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}