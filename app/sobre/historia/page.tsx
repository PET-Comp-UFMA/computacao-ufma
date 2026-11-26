import Text_Image from "../../../components/sobre/historia/Text_image";
import Texto_Simples from "../../../components/sobre/historia/Simple_text";
export default function Historia() {
  return(
  <div> 
    <h1>História</h1>
    <Text_Image texto={{titulo:'Computacão na UFMA', conteudo:'ola'}}
                imagem={{fonte:'/images/ccet_agora.jpg',alt:'Foto do CCET',tamanho: 200, largura: 300}}
    />
    <Texto_Simples titulo="sim" conteudo="sim" />
    <Texto_Simples titulo="nao" conteudo="nao" />
                imagem={{fonte:'/images/ccet_totem.jpg',alt:'Foto do CCET',tamanho: 200, largura: 300}}
    />
  </div>
  
  )
}
