import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

export default function Documentos() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Documentos"
        subtitulo="Veja os principais documentos, normas e termos dos nossos cursos."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Documentos' },
          ]}
        />
      </PageBanner>
    </main>
  )
}
