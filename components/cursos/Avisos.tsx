import Link from "next/link";

import { CorCurso } from "./EstruturaCurricular";

type AvisoCardProps = {
    title?: string;
    subtitle?: string;
    cor: CorCurso;
    url?: string;

}

const coresTexto: Record<CorCurso, string> = {
    cc: 'text-cc',
    ia: 'text-ia',
    licenciatura: 'text-licenciatura',
}

export function AvisoCard({
    title = "Anuncio",
    subtitle = "Lorem ipsulum",
    cor,
    url = "#",
}: AvisoCardProps) {
    return (
        <div className="w-96 h-58 rounded-2xl bg-white shadow-cards pt-10 pb-6 px-10 flex flex-col justify-between">

            <div>
                <h2 className="font-semibold text-2xl text-texto-escuro">
                    {title}
                </h2>
                <p className="mt-3 text-lg font-normal">
                    {subtitle}
                </p>
            </div>

            <div className="flex justify-end">
                <Link
                    href={url}
                    className={`font-semibold ${coresTexto[cor]} hover:underline transition-all`}
                >
                    Saiba mais
                </Link>
            </div>

        </div>
    );
}

export function Avisos({
    cor
}: AvisoCardProps) {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='font-semibold text-2xl'>Avisos</h1>
            <div className='flex gap-10'>
                <AvisoCard cor={cor} />
                <AvisoCard cor={cor} />
                <AvisoCard cor={cor} />
            </div>
        </div>
    )
}