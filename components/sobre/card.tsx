"use client";

interface CardProps{
  nome: string;
  imagem: string;
  coordenacao: string;
  atividade : string;
  linkedin: string;
  lattes: string;
  email: string;
  modal: string;
}

export function Card ({nome, imagem, coordenacao, atividade, linkedin, lattes, email, modal} : CardProps){
  function AbrirLink(link:string){
    window.location.href = link;
  }
  function AbrirPopUP(link: string){

  } 
  return(
  <div className = " bg-azul-escuro rounded-md  w-full max-w-53 max-h-25 max-auto overflow-hidden">
    <div className = "flex flex-row gap-0.5">
      <div className = "h-13 w-13 p-1.25 flex overflow-hidden">
        <img className="w-full h-auto object-fill rounded-tl-md" src ={imagem} alt= {'Foto de perfil de ${nome}'}></img>
      </div>
    <span className = "font-sans text-texto-claro" >{nome}</span>
    </div>
    <div className="flex flex-row gap-0.5">
      <p className = "font-sans text-verde-claro justify-center">{coordenacao}</p>

      <p className = "font-sans text-verde-claro justify-center">{atividade}</p>
    </div>
    <div className="flex flex-row gap-3">
      <div className = "flex flex-row gap-2.5 max w-20 p-1 ">
      <button className="LinkedIn" onClick={() => AbrirLink(linkedin)}>
        <img src = "/icons/linkedin.png"></img>
      </button>
      <button className="Lattes" onClick={() => AbrirLink(lattes)}>
        <img src = "/icons/lattes.png" alt="Lattes"></img>
      </button>
      <button className="Emai" onClick={() => AbrirLink(email)}>
        <img src = "/icons/gmail.png"></img>
      </button>
      </div>
    
    <div className="flex-1 px-0.75">
      <button className = "bg-verde-claro rounded-md  w-full max-h-6 max-auto flex flex-row p-1 gap-5"  onClick={() => AbrirPopUP(modal)}>
      <p className="text-texto-claro font-sans text-xs items-center justify-center">Ver Mais</p>
      <img src="/icons/seta.png"></img>
    </button>
    </div>
    </div>
    
  </div>
  
  );
}