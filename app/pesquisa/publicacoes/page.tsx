import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

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
    </main>
  )
}
