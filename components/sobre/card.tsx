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
  tema?: "escuro" | "claro";
}

export function Card ({nome, imagem, coordenacao, atividade, linkedin, lattes, email, modal, tema = "escuro"} : CardProps){
  function AbrirLink(link:string){
    window.location.href = link;
  }
  function AbrirPopUP(link: string){

  }
  const corFundo = tema == "escuro" ? "bg-transparente" : "bg-verde-fraco";
  const corTexto = tema == "escuro" ? "text-texto-claro" : "text-verde-escuro";
  const corBorda = tema == "escuro" ? "border-0" :"border-1 border-verde-escuro"
  return(
  <div className="px-6 py-5">
    <div className={corFundo + " " + corBorda + " rounded-[25px] w-95 h-50 overflow-hidden"}>
    <div className = "flex flex-row gap-0.5">
      <div className = "h-28 w-26 px-4 py-4 flex overflow-hidden">
        <img className="w-full h-auto object-fill rounded-tl-[19px]" src ={imagem} alt= {"Foto de perfil de" + nome}></img>
      </div>
      <div className=" flex flex-1 items-center ">
        <span className={"font-roboto text-xl font-medium " + corTexto}>{nome}</span>
      </div>
    </div>
    <div className="flex flex-row gap-0.5 px-4 font-medium">
      <p className = "font-roboto text-verde-claro justify-center">{coordenacao}</p>
      <span className="text-verde-claro">•</span>
      <p className = "font-sans text-verde-claro justify-center">{atividade}</p>
    </div>
    <div className="flex flex-row gap-3 px-3.5 py-2">
      <div className = "flex flex-row gap-2.5 w-28 p-1 ">
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
    
      <div className="flex flex-1 px-3">
        <button className = "bg-verde-claro rounded-[25px]  w-full h-8 max-auto flex flex-row px-3  items-center justify-between"  onClick={() => AbrirPopUP(modal)}>
        <p className="text-texto-claro font-roboto text-xs font-medium">Ver Mais</p>
        <img className="flex flex-0 w-6" src="/icons/seta.png"></img>
      </button>
      </div>
    </div>
    
  </div>
  </div>
  
  
  );
}