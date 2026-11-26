import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

export default function Extensao() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Extensão"
        subtitulo="Projetos que levam o conhecimento da Computação para além da sala de aula e aproximam a universidade da comunidade"
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Extensão' },
          ]}
        />
      </PageBanner>
    </main>
  )
}
