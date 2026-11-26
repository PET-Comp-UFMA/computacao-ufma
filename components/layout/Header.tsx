import Image from "next/image"

type HeaderProps = {
  menuAtivo: string;
}

export default function Header({ menuAtivo }: HeaderProps){
    return (
        <header className="bg-azul-escuro text-texto-claro flex justify-between items-center px-4">
            <Image src="/images/ufma_logo.png" alt="Logo" width={40} height={40}/>

            <nav className="text-[12px] flex gap-6 tracking-widest">
                <a href="#" className={menuAtivo=="inicio" ? "text-verde-claro py-3.5 border-b-3" : "py-3.5"}>INÍCIO</a>
                <a href="#"  className={menuAtivo=="cursos" ? "text-verde-claro py-3.5 border-b-3" : "py-3.5"}>CURSOS</a>
                <a href="#"  className={menuAtivo=="pesquisas" ? "text-verde-claro py-3.5 border-b-3" : "py-3.5"}>PESQUISAS</a>
                <a href="#"  className={menuAtivo=="extensao" ? "text-verde-claro py-3.5 border-b-3" : "py-3.5"}>EXTENSÃO</a>
                <a href="#"  className={menuAtivo=="noticias" ? "text-verde-claro py-3.5 border-b-3" : "py-3.5"}>NOTÍCIAS</a>
                <a href="#"  className={menuAtivo=="documentos" ? "text-verde-claro py-3.5 border-b-3" : "py-3.5"}>DOCUMENTOS</a>
                <a href="#"  className={menuAtivo=="sobre" ? "text-verde-claro py-3.5 border-b-3" : "py-3.5"}>SOBRE</a>
            </nav>
        </header>
    )
}