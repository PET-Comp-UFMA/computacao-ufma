import PageBanner from '@/components/layout/PageBanner'

export default function Inicio() {
  return (
    <main>
      <PageBanner
        imagem="/images/banner_home.png"
        sobretitulo="Universidade Federal do Maranhão"
        titulo="Computação"
        tamanho="grande"
      />
    </main>
  )
}
