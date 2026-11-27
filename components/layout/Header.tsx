"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Header(){
  const paginaAtual = usePathname().split("/")[1];

  // Fecha o menu após uma opção ser clicada
  function fecharMenu(menuId: string){
    document.querySelector(menuId)?.removeAttribute("open");
  }

  return (
    <header className="bg-azul-escuro text-texto-claro flex justify-between items-center px-4">
      <Image src="/images/ufma_logo.png" alt="Logo" width={55} height={55}/>

      {/* Nav com links */}
      <nav className="text-[12px] flex gap-6.5 tracking-widest">
          <Link href="/" className={paginaAtual=="" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>INÍCIO</Link>

          {/* Menu cursos */}
          <details id="menuCursos" className={paginaAtual=="cursos" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5 cursor-pointer"}>
            <summary>CURSOS</summary>
            <div className="absolute z-1 bg-azul-escuro text-texto-claro gap-3 flex flex-col p-3 rounded-2xl">
              <Link href="/cursos/abi/" onClick={() => fecharMenu("#menuCursos")}>Área Básica de Ingresso(ABI)</Link>
              <hr/>
              <Link href="#" onClick={() => fecharMenu("#menuCursos")}>Ciência da Computação</Link>
              <hr/>
              <Link href="#" onClick={() => fecharMenu("#menuCursos")}>Inteligência Artificial</Link>
              <hr />
              <Link href="#" onClick={() => fecharMenu("#menuCursos")}>Licenciatura</Link>
            </div>
          </details>

          <Link href="/pesquisa/publicacoes/"  className={paginaAtual=="pesquisa" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>PESQUISAS</Link>
          <Link href="/extensao/"  className={paginaAtual=="extensao" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>EXTENSÃO</Link>
          <Link href="/noticias/"  className={paginaAtual=="noticias" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>NOTÍCIAS</Link>
          <Link href="/documentos/"  className={paginaAtual=="documentos" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>DOCUMENTOS</Link>

          {/* Menu sobre */}
          <details id="menuSobre" className={paginaAtual=="sobre" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5 cursor-pointer"}>
            <summary>SOBRE</summary>
            <div className="absolute z-1 bg-azul-escuro text-texto-claro gap-3 flex flex-col p-3 rounded-2xl right-0">
              <Link href="/sobre/contato/" onClick={() => fecharMenu("#menuSobre")}>Contato</Link>
              <hr/>
              <Link href="/sobre/equipe/" onClick={() => fecharMenu("#menuSobre")}>Equipe</Link>
              <hr />
              <Link href="/sobre/historia/" onClick={() => fecharMenu("#menuSobre")}>Historia</Link>
            </div>
          </details>
      </nav>
    </header>
  )
}