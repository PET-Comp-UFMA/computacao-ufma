import Seta from '@/components/ui/Seta' 

interface PublicacaoProps {
  tag: string;
  titulo: string;
  autores: string[];
  periodico: string;
  ano: number;
  link: string;
}

export default function PublicacaoCard({ tag, titulo, autores, periodico, ano, link }: PublicacaoProps) {
  return (
    <div className="bg-fundo rounded-[20px] pt-[21px] px-[31px] pb-7 min-h-[350px] flex flex-col justify-between">
      <div>
        <span className="inline-block bg-verde-claro text-texto-claro px-[19px] py-[5px] rounded-md text-xs font-semibold">
          {tag}
        </span>
        <h3 className="mt-[18px] text-xl font-medium text-texto-escuro leading-snug">
          {titulo}
        </h3>
        <p className="mt-[27px] text-[10px] font-normal leading-none text-texto-escuro">
          {autores.join(", ")}
        </p>
      </div>
      <div>
        <p className="border-b pb-1 text-[10px] ">{periodico} - {ano}</p>
        <a className="text-verde-claro font-semibold text-[14px] flex justify-between " href={link}>
          Ler Publicação <Seta className='size-5 -rotate-45'/>
        </a>
      </div>
    </div>
  );
}