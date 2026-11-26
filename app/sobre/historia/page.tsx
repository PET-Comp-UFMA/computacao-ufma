import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

export default function Historia() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Nossa História"
        subtitulo="A trajetória da Computação na Universidade Federal do Maranhão, construida por pessoas, ideias e muitas possibilidades."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Sobre' },
            { nome: 'História' },
          ]}
        />
      </PageBanner>
    </main>
  )
}
