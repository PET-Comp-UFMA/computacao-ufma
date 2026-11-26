import '@/components/pesquisa/publicacoes/Publicacoes.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import PublicacoesLista from '@/components/pesquisa/publicacoes/PublicacoesLista'
import { publicacoesDemonstracao } from '@/components/pesquisa/publicacoes/dados'

const poppinsPublicacoes = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Publicações | Computação UFMA',
  description:
    'Trabalhos científicos, artigos, pesquisas e produções desenvolvidas pela Computação UFMA.',
}

export default function Publicacoes() {
  return (
    <main className={`publicacoes-pagina ${poppinsPublicacoes.className}`}>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Publicações"
        subtitulo="Conheça os trabalhos científicos, artigos, pesquisas e produções desenvolvidas pela Computação UFMA"
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Pesquisa' },
            { nome: 'Publicações' },
          ]}
        />
      </PageBanner>

      <PublicacoesLista publicacoes={publicacoesDemonstracao} />
    </main>
  )
}
