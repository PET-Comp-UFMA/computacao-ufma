import Text_Image from "../../../components/sobre/historia/Text_image";
import Texto_Simples from "../../../components/sobre/historia/Simple_text";  
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
  
    <div> 
      <h1>História</h1>
      <Text_Image texto={{titulo:'Computacão na UFMA', conteudo:'ola'}}
                  imagem={{fonte:'/images/ccet_agora.jpg',alt:'Foto do CCET',tamanho: 200, largura: 300}}
      />
      <Texto_Simples titulo="sim" conteudo="sim" />
      <Texto_Simples titulo="nao" conteudo="nao" />
      <Text_Image texto={{titulo:'Computacão na UFMA', conteudo:'ola'}}
                  imagem={{fonte:'/images/ccet_totem.jpg',alt:'Foto do CCET',tamanho: 200, largura: 300}}
      />
    </div>
    </main>
  )
}
