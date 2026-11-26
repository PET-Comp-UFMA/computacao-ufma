import Link from 'next/link'
import Seta from '@/components/ui/Seta'

type CardCursoProps ={
    nome: string
    descricao: string
    href: string
}

export default function CardCurso({nome, descricao, href}: CardCursoProps)
{
    return(
        <div className="grid gap-4 rounded-2xl border-2 border-verde-claro p-6 text-texto-escuro md:grid-cols-2">
            <div>
                <p className="text-xs uppercase">Bacharelado - a partir do 4º semestre</p>
                <h3 className="mt-1 text-3xl leading-tight font-semibold">{nome}</h3>
            </div>

            <p className="self-center">{descricao}</p>

            <Link href={href} className="flex items-center gap-2 justify-self-end text-sm font-semibold md:col-start-2"
            >Ver curso <Seta className="size-5" /></Link>
        </div>
    )
}