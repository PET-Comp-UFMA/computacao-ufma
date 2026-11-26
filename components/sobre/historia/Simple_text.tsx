type Texto = {
    titulo: string;
    conteudo:string;
}

export default function Texto_Simples({titulo,conteudo}:Texto){
     return(
        <div>
            <h2>{titulo}</h2>
            <p>{conteudo}</p>
        </div>
     )
}