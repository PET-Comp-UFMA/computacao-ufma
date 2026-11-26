import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import ContatoSetores from '@/components/sobre/ContatoSetores'

export default function Contato() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_porta_ccet.png"
        titulo="Contatos"
        subtitulo="Fale conosco por meio destes contatos."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Sobre' },
            { nome: 'Contatos' },
          ]}
        />
      </PageBanner>

      <ContatoSetores />
    </main>
  )
}
