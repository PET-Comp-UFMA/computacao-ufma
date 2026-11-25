import Image from 'next/image'
import Link from 'next/link'

export default function PublicacoesBanner() {
  return (
    <section className={'publicacoes-banner'} aria-labelledby="publicacoes-titulo">
      <Image
        src="/images/publicacoes/ccet.png"
        alt="Entrada do Centro de Ciências Exatas e Tecnologia da UFMA"
        fill
        sizes="100vw"
        preload
        className={'publicacoes-bannerFoto'}
      />
      <div className={'publicacoes-bannerConteudo'}>
        <h1 id="publicacoes-titulo">Publicações</h1>
        <p>Conheça os trabalhos científicos, artigos, pesquisas<br className={'publicacoes-quebraDesktop'} /> e produções desenvolvidas pela Computação UFMA</p>
        <nav aria-label="Caminho de navegação" className={'publicacoes-breadcrumb'}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/">Inicio</Link></li>
            <li aria-hidden="true"><Image src="/images/publicacoes/seta-clara.svg" alt="" width={17} height={15} /></li>
            <li>Pesquisa</li>
            <li aria-hidden="true"><Image src="/images/publicacoes/seta-clara.svg" alt="" width={17} height={15} /></li>
            <li aria-current="page" className="font-semibold">Publicações</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}
