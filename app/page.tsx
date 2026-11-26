import PageBanner from '@/components/layout/PageBanner'
import EscolhaCurso from '@/components/home/EscolhaCurso'


export default function Inicio() {
  return (
    <main>
      <PageBanner
        imagem="/images/banner_home.png"
        sobretitulo="Universidade Federal do Maranhão"
        titulo="Computação"
        tamanho="grande"
      />
      <EscolhaCurso />
    </main>
  )
}
