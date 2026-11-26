import Link from 'next/link'
import Seta from '@/components/ui/Seta'

export default function CardLicenciatura() {
  return (
    <div className="grid items-center gap-4 rounded-2xl bg-verde-escuro px-8 py-6 text-texto-claro md:grid-cols-2 md:px-10">
      <h3 className="text-3xl font-light">Licenciatura em Computação e Informática</h3>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xs text-sm">
          Curso EAD com polos no interior para quem quer ensinar computação
        </p>

        <Link
          href="/cursos/licenciatura"
          className="flex items-center gap-2 self-end text-sm font-semibold"
        >
          Ver curso
          <Seta className="size-5" />
        </Link>
      </div>
    </div>
  )
}