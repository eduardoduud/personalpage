import './globals.css'
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'Eduardo Domingues'
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
