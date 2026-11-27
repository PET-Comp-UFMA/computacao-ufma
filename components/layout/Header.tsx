"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Header(){
  const paginaAtual = usePathname().split("/")[1];

  return (
    <header className="bg-azul-escuro text-texto-claro flex justify-between items-center px-4">
      <Image src="/images/ufma_logo.png" alt="Logo" width={55} height={55}/>

      {/* Nav com links */}
      <nav className="text-[12px] flex gap-6.5 tracking-widest">
          <Link href="/" className={paginaAtual=="" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>INÍCIO</Link>

          {/* Menu cursos */}
          <div id="menuCursos" className={paginaAtual=="cursos" ? "text-verde-claro py-5.5 border-b-3 cursor-pointer group" : "py-5.5 cursor-pointer group"}>
            <p>CURSOS</p>
            <div className="absolute z-1 bg-azul-escuro text-texto-claro gap-3 flex-col p-3 rounded-2xl hidden group-hover:flex">
              <Link href="/cursos/abi/">Área Básica de Ingresso(ABI)</Link>
              <hr/>
              <Link href="#">Ciência da Computação</Link>
              <hr/>
              <Link href="#">Inteligência Artificial</Link>
              <hr />
              <Link href="#">Licenciatura</Link>
            </div>
          </div>

          <Link href="/pesquisa/publicacoes/"  className={paginaAtual=="pesquisa" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>PESQUISAS</Link>
          <Link href="/extensao/"  className={paginaAtual=="extensao" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>EXTENSÃO</Link>
          <Link href="/noticias/"  className={paginaAtual=="noticias" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>NOTÍCIAS</Link>
          <Link href="/documentos/"  className={paginaAtual=="documentos" ? "text-verde-claro py-5.5 border-b-3" : "py-5.5"}>DOCUMENTOS</Link>

          {/* Menu sobre */}
          <div id="menuSobre" className={paginaAtual=="sobre" ? "text-verde-claro py-5.5 border-b-3 cursor-pointer group" : "py-5.5 cursor-pointer group"}>
            <p>SOBRE</p>
            <div className="absolute z-1 bg-azul-escuro text-texto-claro gap-3 flex-col p-3 rounded-2xl right-0 hidden group-hover:flex">
              <Link href="/sobre/contato/">Contato</Link>
              <hr/>
              <Link href="/sobre/equipe/">Equipe</Link>
              <hr />
              <Link href="/sobre/historia/">Historia</Link>
            </div>
          </div>
      </nav>
    </header>
  )
}