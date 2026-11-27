import Image from 'next/image'
import type { Laboratorio } from '@/components/pesquisa/laboratorios/dados'
import LabModal from '@/components/pesquisa/laboratorios/LabModal'

type LabCardProps = {
  laboratorio: Laboratorio
}

export default function LabCard({ laboratorio }: LabCardProps) {
  return (
    <article aria-labelledby={`lab-${laboratorio.id}`} className="flex h-full min-h-[320px] flex-col overflow-hidden rounded-[12px] bg-texto-claro shadow-lg">
      <div className="relative flex h-[150px] shrink-0 items-center justify-center overflow-hidden bg-texto-claro">
        <Image
          src={laboratorio.fundo}
          alt=""
          width={410}
          height={211}
          className="absolute bottom-0 left-0 h-[105px] w-full"
          aria-hidden="true"
        />
        <Image
          src={laboratorio.logo}
          alt={`Logo do ${laboratorio.nome}`}
          width={laboratorio.larguraLogo}
          height={laboratorio.alturaLogo}
          className="relative h-20 w-[140px] max-w-[70%] object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-5 py-[25px] text-center text-texto-escuro">
        <h2 id={`lab-${laboratorio.id}`} className="text-base leading-6 font-bold">
          {laboratorio.nome}
        </h2>
        <p className="mt-1 mb-[25px] text-sm leading-[18px]">{laboratorio.descricao}</p>
        <LabModal laboratorio={laboratorio} />
      </div>
    </article>
  )
}
