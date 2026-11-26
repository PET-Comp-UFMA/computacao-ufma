import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import PublicacoesLista from '@/components/pesquisa/publicacoes/PublicacoesLista'
import { publicacoesDemonstracao } from '@/components/pesquisa/publicacoes/dados'

export const metadata: Metadata = {
  title: 'Publicações | Computação UFMA',
  description:
    'Trabalhos científicos, artigos, pesquisas e produções desenvolvidas pela Computação UFMA.',
}

export default function Publicacoes() {
  return (
    <main>
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
