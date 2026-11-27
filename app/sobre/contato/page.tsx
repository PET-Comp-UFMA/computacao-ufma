import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import ContatoSetores from '@/components/sobre/ContatoSetores'
import ContatoLocalizacao from '@/components/sobre/ContatoLocalizacao'

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


      <div className='mx-auto grid max-w-6xl items-stretch gap-8 px-6 py-12 lg:grid-cols-[1.3fr_1fr]'>
        <ContatoSetores />
        <ContatoLocalizacao />
      </div>


    </main>
  )
}
