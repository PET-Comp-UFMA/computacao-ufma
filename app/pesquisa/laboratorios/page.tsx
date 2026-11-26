import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

export default function Laboratorios() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Laboratórios"
        subtitulo="Confira os laboratórios do curso"
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Pesquisa' },
            { nome: 'Laboratórios' },
          ]}
        />
      </PageBanner>
    </main>
  )
}
