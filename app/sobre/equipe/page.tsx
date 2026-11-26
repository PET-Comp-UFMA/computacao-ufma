import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

export default function Equipe() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_porta_ccet.png"
        titulo="Equipe"
        subtitulo="Confira os membros da coordenação e do corpo de docentes."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Sobre' },
            { nome: 'Equipe' },
          ]}
        />
      </PageBanner>
    </main>
  )
}
