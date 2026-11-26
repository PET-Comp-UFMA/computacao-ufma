import Image from 'next/image'
import Link from 'next/link'

export default function CardABI() {
    return (
        <div className="flex h-full flex-col rounded-2xl bg-verde-claro p-8 text-texto-claro">
            <p className="text-sm uppercase">Porta de entrada - via SISU</p>

            <h3 className="mt-2 text-4xl leading-tight font-semibold md:text-5xl">Área Básica de Ingresso</h3>

            <p className="mt-4 font-light"> Os 3 primeiros semestres são um tronco comum. Depois, por edital interno, você escolhe seu curso.</p>

            <Link href="/cursos/abi" className="mt-auto flex items-center justify-between pt-8 text-sm font-medium">
            Como funciona a ABI <Image src="/icons/seta.svg" alt="" width={16} height={16} /> </Link>
        </div>
    )
}