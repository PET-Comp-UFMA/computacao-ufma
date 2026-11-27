type Texto = {
    titulo: string;
    conteudo:string;
}

export default function Texto_Simples({titulo,conteudo}:Texto){
     return(
        <div>
            <h2 className="text-3xl font-semibold text-texto-escuro">{titulo}</h2>
            <div className="mt-2 h-0.5 w-20 rounded-full bg-verde-claro"></div>
            <p className="mt-6 text-sm leading-relaxed text-texto-escuro">{conteudo}</p>
        </div>
     )
}