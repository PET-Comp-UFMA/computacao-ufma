import Text_Image from "../../../components/sobre/historia";
export default function Historia() {
  return(
  <div> 
    <h1>História</h1>
    <h3>Computacão na UFMA</h3>
    <Text_Image texto={{titulo:'Computacão na UFMA', conteudo:'ola'}}
                imagem={{fonte:'/images/Imagem_ccet_historia1.jpg',alt:'Foto do CCET',tamanho: 200, largura: 300}}
    />
  </div>
  
  )
}
