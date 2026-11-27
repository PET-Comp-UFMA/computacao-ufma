import Link from 'next/link'
import Coordenacao from '../home/Coordenacao'

type ProjetoExtensaoCardProps = {
    titulo: string
    descricao: string
    coordenacao: string
    href: string
}

export default function ProjetoExtensaoCard ({

    titulo,
    descricao,
    coordenacao,
    href,
}: ProjetoExtensaoCardProps) {
    return (

        <article className='flex flex-col gap-4 rounded-lg bg-white p-6 text-texto-escuro md:flex-row md:items-center md:justify-between'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>
                    {titulo}
                </h3>

                <p className='text-sm'>
                    {descricao}
                </p>

                <p className='text-sm text-texto-escuro'>
                    Coordenação: {coordenacao}
                </p>
            </div>

            <Link
                href={href}
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-verde-escuro hover:underline"
            >
                Saiba mais →
            </Link>

        </article>
    )
}