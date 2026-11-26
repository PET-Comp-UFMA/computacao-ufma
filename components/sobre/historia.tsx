import Image from "next/image"
type Texto = {
    titulo: string;
    conteudo:string;
}
type Imagem = {
    fonte:string;
    alt: string;
    tamanho: number;
    largura: number;

}
type Texto_Imagem ={
    texto:Texto;
    imagem:Imagem;
}
export default function Text_Image({texto:{titulo,conteudo},
                                    imagem:{fonte,alt,tamanho,largura},
                                   }:Texto_Imagem){
    return(
    <div>
        
        <h2>{titulo}</h2>
        <p>{conteudo}</p>
        <Image src={fonte}
               width={largura}
               height={tamanho}
               alt={alt}/>
    </div>
    )
}