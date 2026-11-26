import Image from 'next/image'
import Link from 'next/link'

type ItemBreadcrumb = {
  nome: string
  href?: string // sem href = não vira link (ex.: página atual)
}

type BreadcrumbProps = {
  itens: ItemBreadcrumb[]
}

export default function Breadcrumb({ itens }: BreadcrumbProps) {
  return (
    <nav aria-label="Você está em">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-light">
        {itens.map((item, indice) => {
          const ehUltimo = indice === itens.length - 1

          return (
            <li key={item.nome} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.nome}
                </Link>
              ) : (
                <span
                  className={ehUltimo ? 'font-semibold' : undefined}
                  aria-current={ehUltimo ? 'page' : undefined}
                >
                  {item.nome}
                </span>
              )}

              {!ehUltimo && (
                <Image src="/icons/seta.svg" alt="" width={16} height={16} />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
