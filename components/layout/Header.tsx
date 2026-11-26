import Image from "next/image"

export default function Header(){
    return (
        <header className="bg-azul-escuro text-texto-claro flex justify-between items-center px-4 py-1">
            <Image src="/images/ufma_logo.png" alt="Logo" width={40} height={40}/>

            <nav className="text-[12px] flex gap-6 tracking-widest">
                <a href="#">INÍCIO</a>
                <a href="#">CURSOS</a>
                <a href="#">PESQUISAS</a>
                <a href="#">EXTENSÃO</a>
                <a href="#">NOTÍCIAS</a>
                <a href="#">DOCUMENTOS</a>
                <a href="#">SOBRE</a>
            </nav>
        </header>
    )
}