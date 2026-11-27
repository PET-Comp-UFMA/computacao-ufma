import Image from 'next/image'
import Link from 'next/link'

type LigaCardProps = {
    logoSrc: string
    logoAlt: string
    titulo: string
    descricao: string
    categoria: string
    href: string
}

export default function LigaCard({
    logoSrc,
    logoAlt,
    titulo,
    descricao,
    categoria,
    href,
}: LigaCardProps) {
    return (
        <article className='flex h-full min-h-52 items-center gap-5 rounded-lg bg-white p-5 shadow-md text-texto-escuro'>
            <Image
                src={logoSrc}
                alt={logoAlt}
                width={100}
                height={100}
                className="size-28 shrink-0 rounded-full object-contain"
          />

            <div className='flex min-w-0 flex-col gap-2'>
                <h3 className='text-lg font-semibold'>{titulo}</h3>
                <p className='text-sm'>{descricao}</p>
                <span className='self-start rounded bg-verde-claro/50 px-2 py-1 text-xs'>{categoria}</span>
                <Link
                    href={href}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-verde-escuro hover:underline"
                >
                    <span>Saiba mais</span>
                    <span aria-hidden="true">→</span>
                </Link>
            </div>

        </article>
    )
}

