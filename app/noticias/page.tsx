import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

export default function Noticias() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Notícias"
        subtitulo="Confira as últimas notícais sobre os cursos e próximas datas importantes."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Notícias' },
          ]}
        />
      </PageBanner>
    </main>
  )
}
