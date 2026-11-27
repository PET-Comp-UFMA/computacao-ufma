// Biblioteca de ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Ícones usados na página
import { faYoutube, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-azul-escuro flex flex-col items-center gap-1 p-7.5 text-texto-claro">
          <div className='flex justify-around w-full'>
            <section className='w-[25%] pb-2 border-b-2 border-verde-claro'>
            <iframe className="h-56 w-full rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.841238578728!2d-44.3081181!3d-2.5584645999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68f5cedc548dd%3A0x780f0a32464f4178!2sCCET%20-%20Centro%20de%20Ci%C3%AAncias%20Exatas%20e%20Tecnol%C3%B3gicas!5e0!3m2!1spt-BR!2sbr!4v1795737927246!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
              <h2 className='py-2 font-bold tracking-wider text-[16px]'>Computação UFMA</h2>
              <p className='text-gray-400 text-[12px]'>Centro de Ciências Exatas e Tecnologia (CCET)</p>
              <p className='text-gray-400 text-[12px]'>Av. dos Portugueses, 1966 - Bacanga, São Luís - MA</p>
            </section>
            <nav className='w-[20%]'>
              <h3 className='font-bold tracking-wider pb-2 border-b-2 border-verde-claro'>Links Úteis</h3>
              <div className='grid grid-cols-2 pt-2 gap-y-3 text-gray-400 text-[14px]'>
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
              <h3 className='pb-2 border-b-2 border-verde-claro font-bold tracking-wider'>Acompanhe-nos</h3>
              <ul id='contato-links' className='pt-2 flex gap-x-5 items-center text-verde-claro'>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} className='w-8'/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faYoutube} className='w-8'/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faGoogle}className='w-8'/></a></li>
              </ul>
            </section>
          </div>
          <Image src="/images/ufma_logo_branco.png" alt="Ufma Logo" width={50} height={50}/>
          <p className='text-[11px]'>@ Copyright PETCOMP - UFMA.</p>
        </footer>
    )
}