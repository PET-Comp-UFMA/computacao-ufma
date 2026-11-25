import Image from 'next/image'
import type { ReactNode } from 'react'

type PageBannerProps = {
  imagem: string
  titulo: string
  sobretitulo?: string
  subtitulo?: string
  tamanho?: 'normal' | 'grande'
  children?: ReactNode
}

// Altura mínima de cada tamanho (75 = 300px, 110 = 440px)
const alturas = {
  normal: 'min-h-75',
  grande: 'min-h-110',
}

export default function PageBanner({
  imagem,
  titulo,
  sobretitulo,
  subtitulo,
  tamanho = 'normal',
  children,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Camada 1: foto de fundo */}
      <Image
        src={imagem}
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
        className="object-cover"
      />

      {/* Camada 2: azul-escuro sólido e transparente */}
      <div className="absolute inset-0 bg-azul-escuro/70" />

      {/* Camada 3: conteúdo */}
      <div className={`relative flex ${alturas[tamanho]} flex-col justify-center gap-8 px-6 py-12 text-texto-claro md:px-16`}>
        <div>
          {sobretitulo && (
            <p className="mb-0 text-sm font-light md:text-base">{sobretitulo}</p>
          )}

          <h1 className="text-4xl leading-tight font-semibold whitespace-pre-line md:text-6xl">{titulo}</h1>

          {subtitulo && (
            <p className="mt-3 max-w-xl font-light text-base md:text-lg">{subtitulo}</p>
          )}
        </div>

        {children}
      </div>
    </section>
  )
}
