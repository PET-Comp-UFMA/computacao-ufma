import Image from 'next/image'
import type { Laboratorio } from '@/components/pesquisa/laboratorios/dados'

type LabCardProps = {
  laboratorio: Laboratorio
}

export default function LabCard({ laboratorio }: LabCardProps) {
  return (
    <article aria-labelledby={`lab-${laboratorio.id}`} className="flex h-full flex-col overflow-hidden rounded-[30px] bg-verde-claro shadow-lg">
      <div className="relative flex h-[305px] items-center justify-center overflow-hidden bg-texto-claro">
        <Image
          src={laboratorio.fundo}
          alt=""
          width={410}
          height={211}
          className="absolute bottom-0 left-0 h-[211px] w-full"
          aria-hidden="true"
        />
        <Image
          src={laboratorio.logo}
          alt={`Logo do ${laboratorio.nome}`}
          width={laboratorio.larguraLogo}
          height={laboratorio.alturaLogo}
          className="relative max-w-[70%] object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-6 pt-5 pb-8 text-center text-texto-escuro">
        <h2 id={`lab-${laboratorio.id}`} className="text-2xl leading-10 font-bold lg:text-[30px]">
          {laboratorio.nome}
        </h2>
        <p className="mt-1 min-h-28 text-lg leading-7">{laboratorio.descricao}</p>
        {/* Os detalhes serão integrados quando o componente do laboratório estiver disponível. */}
        <button
          type="button"
          disabled
          aria-describedby="laboratorios-detalhes"
          aria-label={`Saiba mais sobre ${laboratorio.nome}`}
          className="mt-2 min-h-[59px] w-full max-w-[220px] cursor-not-allowed rounded-[20px] bg-verde-escuro px-5 py-3 text-xl font-semibold text-texto-claro"
        >
          Saiba mais
        </button>
      </div>
    </article>
  )
}
