import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acumulado',
  description: 'LN Test Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body>{children}</body>
    </html>
  )
}
