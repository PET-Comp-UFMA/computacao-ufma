import Image from 'next/image'
import Link from 'next/link'

type CardCoordenadorProps = {
  nome: string
  cargo: string
  contato: string // link da página ou do e-mail de contato
  foto?: string // sem foto = círculo provisório
}

export default function CardCoordenador({
  nome,
  cargo,
  contato,
  foto,
}: CardCoordenadorProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/15 p-3 pr-8 backdrop-blur-sm md:absolute md:top-6 md:right-16">
      {foto ? (
        <Image
          src={foto}
          alt={`Foto de ${nome}`}
          width={64}
          height={64}
          className="size-16 rounded-full object-cover"
        />
      ) : (
        <div className="size-16 rounded-full bg-white/40" />
      )}

      <div className="text-sm">
        <p className="text-base font-medium">{nome}</p>
        <p className="text-verde-claro">
          {cargo}
        </p>
        <Link href={contato} className="underline hover:no-underline">
          Contato
        </Link>
      </div>
    </div>
  )
}
