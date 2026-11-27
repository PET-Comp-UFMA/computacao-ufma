'use client'

import { useState } from 'react'
import Image from 'next/image'
import Seta from '@/components/ui/Seta'
import type { Foto } from '@/components/pesquisa/laboratorios/dados'

type CarrosselFotosProps = {
  fotos: Foto[]
  cor: string
}

export default function CarrosselFotos({ fotos, cor }: CarrosselFotosProps) {
  const [atual, setAtual] = useState(0)

  // O % faz a contagem "dar a volta": depois da última foto vem a primeira.
  function anterior() {
    setAtual((atual - 1 + fotos.length) % fotos.length)
  }

  function proxima() {
    setAtual((atual + 1) % fotos.length)
  }

  const foto = fotos[atual]

  return (
    <div>
      <div
        className="relative aspect-video overflow-hidden rounded-3xl"
        style={{ backgroundColor: cor }}
      >
        <Image
          src={foto.src}
          alt={foto.legenda}
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
        />

        {fotos.length > 1 && (
          <>
            <button
              type="button"
              onClick={anterior}
              aria-label="Foto anterior"
              className="absolute top-1/2 left-4 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-texto-claro/80 hover:bg-texto-claro"
            >
              <Seta className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={proxima}
              aria-label="Próxima foto"
              className="absolute top-1/2 right-4 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-texto-claro/80 hover:bg-texto-claro"
            >
              <Seta className="size-5" />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">{foto.legenda}</p>

        {fotos.length > 1 && (
          <div className="flex gap-3">
            {fotos.map((miniatura, indice) => (
              <button
                key={miniatura.src}
                type="button"
                onClick={() => setAtual(indice)}
                aria-label={`Ver foto ${indice + 1}`}
                aria-current={indice === atual}
                className={`relative h-12 w-20 cursor-pointer overflow-hidden rounded-xl border-2 ${
                  indice === atual ? 'border-texto-escuro' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={miniatura.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
