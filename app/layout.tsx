import type { Metadata } from 'next'
import { Cormorant, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kraft | Coffee · Brunch · Buenos Aires',
  description:
    'Specialty coffee, brunch, pastelería artesanal y platos principales. Cuatro locales en Buenos Aires. Elegí lo que necesites.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
