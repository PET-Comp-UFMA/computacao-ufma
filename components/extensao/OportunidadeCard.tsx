import Image from 'next/image';
import type { ReactNode } from 'react';

interface OportunidadeCardProps {
    logoSrc: string;
    logoAlt: string;
    categoria: string;
    titulo: string;
    subtitulo: string;
    children: ReactNode;
    onSaibaMais?: () => void;
}

export default function OportunidadeCard({
    logoSrc,
    logoAlt,
    categoria,
    titulo,
    subtitulo,
    children,
    onSaibaMais,
}: OportunidadeCardProps) {
    return (
        <article className="flex flex-col justify-between rounded-2xl bg-azul-escuro p-6 bg-gradient-to-br from-verde-claro/25 via-azul-escuro to-azul-escuro text-texto-claro shadow-md">
            <div>
                <div className="flex items-start justify-between gap-4">
                    <Image 
                        src={logoSrc}
                        alt={logoAlt}
                        width={150}
                        height={96}
                        className="h-24 w-auto max-w-[150px] object-contain object-left"
                    />

                    <span className="rounded-full bg-texto-claro/20 px-3.5 py-1 text-xs font-medium text-texto-claro">
                        {categoria}
                    </span>
                </div>

                <div className="my-4 h-0.5 w-28 rounded-full bg-verde-claro" />
                <h3 className="text-2xl font-bold tracking-tight">
                    {titulo}
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-texto-claro">
                    {subtitulo}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-texto-claro/85">
                    {children}
                </p>
            </div>

            <div className="mt-8">
                <button 
                    type="button"
                    onClick={onSaibaMais}
                    className="inline-flex items-center gap-2 rounded-full bg-verde-claro px-5 py-2 text-xs font-semibold text-azul-escuro transition-opacity hover:opacity-90"
                >
                    <span>Saiba mais</span>
                    <span aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    )
}