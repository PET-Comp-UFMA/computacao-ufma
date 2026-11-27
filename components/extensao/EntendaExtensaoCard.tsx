import Image from 'next/image'
import type { ReactNode } from 'react';

interface EntendaExtensaoCardProps {
    iconeSrc: string;
    iconeAlt: string;
    titulo: string;
    children: ReactNode;
}

export default function EntendaExtensaoCard({
    iconeSrc,
    iconeAlt,
    titulo,
    children,
}: EntendaExtensaoCardProps) {
    return (
        <article className="rounded-xl bg-texto-claro p-6 shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-verde-claro">
                <Image src={iconeSrc} alt={iconeAlt} width={24} height={24} />
            </div>

            <h3 className="mt-4 text-center text-base font-bold text-texto-escuro">
                {titulo}
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-texto-escuro/80">
            {children}
            </p>
        </article>
    )
}