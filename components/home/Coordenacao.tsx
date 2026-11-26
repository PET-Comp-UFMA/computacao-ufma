import Image from 'next/image'

export default function Coordenacao(){
  return(
    <section className="bg-azul-escuro text-texto-claro p-8 flex flex-col gap-3">
      <h1 className="font-semibold text-5xl">Coordenação</h1>
      <p>Conheça as principais coordenações do curso</p>
      <div className='flex justify-between'>
        <article className="bg-[#d9d9d933] rounded-2xl flex w-98 p-1.5 gap-2 text-[14px] items-center">
          <Image src="/images/coord_cc.png" alt="Imagem Coordenador Ciências da Computação" width={70} height={60} className='rounded-full'/>
          <div className='flex flex-col gap-0.5'>
            <h1>Prof. Dr. Matheus Chaves Menezes</h1>
            <p className='text-[12px] text-verde-claro'>Coordenador - Ciência da Computação</p>
            <a className='underline'>Contato</a>
          </div>
        </article>
        <article className="bg-[#d9d9d933] rounded-2xl flex w-98 p-1.5 gap-2 text-[14px] items-center">
          <Image src="/images/coord_ia.png" alt="Imagem Coordenador Inteligência Artificial" width={70} height={60} className='rounded-full'/>
          <div className='flex flex-col gap-0.5'>
            <h1>Prof. Dr. Tiago Bonini</h1>
            <p className='text-[12px] text-verde-claro'>Coordenador - Inteligência Artificial</p>
            <a className='underline'>Contato</a>
          </div>
        </article>
        <article className="bg-[#d9d9d933] rounded-2xl flex w-98 p-1.5 gap-2 text-[14px] items-center">
          <Image src="/images/coord_abi.png" alt="Imagem Coordenador ABI - Núcleo Comum" width={70} height={60} className='rounded-full'/>
          <div className='flex flex-col gap-0.5'>
            <h1>Prof. Dr. Francisco Glaubos</h1>
            <p className='text-[12px] text-verde-claro'>Coordenador - ABI - Núcleo Comum</p>
            <a className='underline'>Contato</a>
          </div>
        </article>
      </div>
    </section>
  )
}