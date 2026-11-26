import Coordenacao from '@/components/home/Coordenacao'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PageBanner from '@/components/layout/PageBanner'

export default function Inicio() {
  return (
    <main>
      <Header />
      <PageBanner
        imagem="/images/banner_home.png"
        sobretitulo="Universidade Federal do Maranhão"
        titulo="Computação"
        tamanho="grande"
      />
      <Coordenacao />
      <Footer />
    </main>
  )
}
