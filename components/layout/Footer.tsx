// Biblioteca de ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Ícones usados na página
import { faYoutube, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-[#152638] flex justify-around p-7.5 text-white">
            <section className='w-[25%] pb-2 border-b-2 border-[#2CC1A7]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4739.99126753242!2d-44.30890597766105!3d-2.5583273497403005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f6860324886045%3A0x1024f6caa9406aaa!2sUniversidade%20Federal%20do%20Maranh%C3%A3o%20(UFMA)!5e0!3m2!1spt-BR!2sbr!4v1793973089577!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                <h2 className='py-2 font-bold tracking-wider'>Computação UFMA</h2>
                <p className='text-gray-400'>Universidade Federal do Maranhão - CCET</p>
                <p className='text-gray-400'>Av. dos Portugueses, 1966, São Luís - MA</p>
            </section>
            <nav className='w-[20%]'>
                <h3 className='font-bold tracking-wider pb-2 border-b-2 border-[#2CC1A7]'>Links Úteis</h3>
                <div className='grid grid-cols-2 pt-2 gap-y-3 text-gray-400'>
                    <a href="#">Início</a>
                    <a href="#">Documentos</a>
                    <a href="#">Cursos</a>
                    <a href="#">Sobre</a>
                    <a href="#">ABI</a>
                    <a href="#">Contato</a>
                    <a href="#">Notícias</a>
                </div>
            </nav>
            <section className='w-[20%]'>
                <h3 className='pb-2 border-b-2 border-[#2CC1A7] font-bold tracking-wider'>Acompanhe-nos</h3>
                <ul id='contato-links' className='pt-2 flex gap-x-5 items-center text-[#2CC1A7]'>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} className='w-8'/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faYoutube} className='w-8'/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faGoogle}className='w-8'/></a></li>
                </ul>
            </section>
        </footer>
    )
}