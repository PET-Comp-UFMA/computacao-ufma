"use client";
import { useState } from "react";
import { ModalPerfil } from "./ModalPerfil";
interface CardProps{
  nome: string;
  imagem: string;
  coordenacao: string;
  atividade : string;
  linkedin: string;
  lattes: string;
  email: string;
  descricao: string;
  formacao:string;
  areasInteresse : string [];
  tema?: "escuro" | "claro";
}

export function Card ({nome, imagem, coordenacao, atividade, linkedin, lattes, email, descricao, formacao, areasInteresse, tema = "escuro"} : CardProps){

  const corFundo = tema == "escuro" ? "bg-transparente/25" : "bg-verde-fraco";
  const corTexto = tema == "escuro" ? "text-texto-claro" : "text-verde-escuro";
  const corBorda = tema == "escuro" ? "border-0" :"border-1 border-verde-escuro"
  const [aberto, setAberto] = useState(false);
  
  return(
  <div className="px-6 py-5">
    <div className={corFundo + " " + corBorda + " rounded-[25px] w-95 h-50 overflow-hidden"}>
      <div className = "flex flex-row gap-0.5">
        <div className = "h-28 w-26 px-4 py-4 flex overflow-hidden">
          <img className="w-full h-auto object-fill rounded-tl-[19px]" src ={imagem} alt= {"Foto de perfil de " + nome}></img>
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
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img  src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href={lattes} target="_blank" rel="noopener noreferrer">
            <img  src="/icons/lattes.png" alt="Lattes" />
          </a>
          <a href={`mailto:${email}`}>
            <img src="/icons/gmail.png" alt="E-mail" />
          </a>
        </div>
      
        <div className="flex flex-1 px-3">
          <button onClick={() => setAberto(true)}  className = "bg-verde-claro rounded-[25px]  w-full h-8 max-auto flex flex-row px-3  items-center justify-between">
            <p className="text-texto-claro font-roboto text-xs font-medium">Ver Mais</p>
            <img className="flex flex-0 w-6" src="/icons/seta.png" alt="Seta"></img>
          </button>
        </div>
        {aberto && (
          <ModalPerfil
            docente={{nome, imagem, coordenacao, atividade, linkedin, lattes, email, 
              descricao, formacao, areasInteresse,
            }}
            onFechar ={() => setAberto(false)}
          />
        )}
      </div>
  </div>
</div>

);
}