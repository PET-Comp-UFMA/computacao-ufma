import Image from "next/image"
import Texto_Simples from "./SimpleText";
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
    inverter: boolean;
}
export default function Text_Image({texto:{titulo,conteudo},
                                    imagem:{fonte,alt,tamanho,largura},
                                    inverter,
                                  }:Texto_Imagem){
    return(
    <section className="py-12">
        <div className="mx-auto grid max-w-6x1 grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:gap-12">    
            <div className={inverter ? "md:order-2":""}>
                <Texto_Simples titulo={titulo} conteudo={conteudo}/>
            </div>
            
            <Image src={fonte}
                width={largura}
                height={tamanho}
                alt={alt}
                className="h-64 w-full rounded-2xl object-cover shadow-md md:h-80"
            />
        </div>
    </section>
    )
}

