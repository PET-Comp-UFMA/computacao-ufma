'use client'

import { useRef } from 'react'
import LabDetalhes from '@/components/pesquisa/laboratorios/LabDetalhes'
import type { Laboratorio } from '@/components/pesquisa/laboratorios/dados'

type LabModalProps = {
  laboratorio: Laboratorio
}

export default function LabModal({ laboratorio }: LabModalProps) {
  // useRef guarda uma "referência" para a tag <dialog>, para podermos chamar
  // os métodos dela (showModal e close) quando os botões forem clicados.
  const dialogRef = useRef<HTMLDialogElement>(null)

  function abrir() {
    dialogRef.current?.showModal()
    // Trava a rolagem da página de trás enquanto o modal está aberto.
    document.body.style.overflow = 'hidden'
  }

  function fechar() {
    dialogRef.current?.close()
  }

  // O evento "close" acontece de qualquer jeito que o modal feche
  // (botão ✕, Esc ou clique fora), então a rolagem é liberada aqui.
  function aoFechar() {
    document.body.style.overflow = ''
  }

  // O conteúdo ocupa o modal inteiro; se o clique caiu na própria tag
  // <dialog>, foi no fundo escuro, fora do conteúdo.
  function aoClicar(evento: React.MouseEvent<HTMLDialogElement>) {
    if (evento.target === dialogRef.current) {
      fechar()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        aria-label={`Saiba mais sobre ${laboratorio.nome}`}
        className="mt-auto min-h-[38px] cursor-pointer rounded-[20px] bg-verde-claro px-[30px] py-2.5 text-sm leading-[18px] font-semibold text-texto-claro transition-opacity hover:opacity-90"
      >
        Saiba mais
      </button>

      <dialog
        ref={dialogRef}
        onClose={aoFechar}
        onClick={aoClicar}
        aria-labelledby={`modal-${laboratorio.id}`}
        className="m-auto w-[calc(100%-2rem)] max-w-5xl rounded-3xl bg-fundo text-left text-texto-escuro backdrop:bg-azul-escuro/60"
        // A cor muda para cada laboratório, por isso vai no style e não numa classe.
        style={{ backgroundImage: `linear-gradient(to bottom, ${laboratorio.cor}66, transparent 40rem)` }}
      >
        {/* sticky + h-0: o ✕ acompanha a rolagem sem ocupar espaço no layout */}
        <div className="sticky top-0 z-10 h-0">
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="absolute top-4 right-4 flex size-10 cursor-pointer items-center justify-center rounded-full bg-texto-claro text-xl shadow-md hover:bg-fundo"
          >
            ✕
          </button>
        </div>

        <div className="p-6 pt-16 md:p-12">
          <LabDetalhes laboratorio={laboratorio} />
        </div>
      </dialog>
    </>
  )
}
