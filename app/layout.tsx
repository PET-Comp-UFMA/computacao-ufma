import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Computação UFMA',
  description: 'Coordenação dos cursos de Computação da UFMA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
