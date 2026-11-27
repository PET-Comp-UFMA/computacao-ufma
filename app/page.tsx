import Coordenacao from '@/components/home/Coordenacao'
import EscolhaCurso from '@/components/home/EscolhaCurso'
import PageBanner from '@/components/layout/PageBanner'
import PublicacaoCard from "@/components/home/PublicacaoCard";
import Seta from '@/components/ui/Seta'

export default function Inicio() {
  const publicacoes = [
    {
      tag: "Artigo",
      titulo: "Métodos Baseados em Aprendizado Profundo para Análise de Imagens Médicas",
      autores: ["Aristofanes Correa Silva", "Geraldo Braz Junior", "João Dallyson Sousa de Almeida", "Darlan Bruno Pontes Quintanilha", "Francisco Glaubos Nunes Climaco", "Anselmo Cardoso Paiva"],
      periodico: "Journal of Medical Imaging and Health Informatics",
      ano: 2026,
      link: "#",
    },
    {
      tag: "Artigo",
      titulo: "Métodos Baseados em Aprendizado Profundo para Análise de Imagens Médicas",
      autores: ["Aristofanes Correa Silva", "Geraldo Braz Junior", "João Dallyson Sousa de Almeida", "Darlan Bruno Pontes Quintanilha", "Francisco Glaubos Nunes Climaco", "Anselmo Cardoso Paiva"],
      periodico: "Journal of Medical Imaging and Health Informatics",
      ano: 2026,
      link: "#",
    },
    {
      tag: "Artigo",
      titulo: "Métodos Baseados em Aprendizado Profundo para Análise de Imagens Médicas",
      autores: ["Aristofanes Correa Silva", "Geraldo Braz Junior", "João Dallyson Sousa de Almeida", "Darlan Bruno Pontes Quintanilha", "Francisco Glaubos Nunes Climaco", "Anselmo Cardoso Paiva"],
      periodico: "Journal of Medical Imaging and Health Informatics",
      ano: 2026,
      link: "#",
    },
  ];

  return (
    <main>
      <PageBanner
        imagem="/images/banner_home.png"
        sobretitulo="Universidade Federal do Maranhão"
        titulo="Computação"
        tamanho="grande"
      />

      <EscolhaCurso />

      <div className="px-[40px]">
        <div className="h-1 w-30 bg-verde-claro"></div>
        <h2 className='text-azul-escuro text-[48px] font-semibold '>Publicações Recentes</h2>
        <div className="flex justify-between items-center">
          <p className='text-azul-escuro text-[16px] font-normal'>
            Pesquisas de professores e alunos dos cursos de computação na UFMA
          </p>
  <a href="#" className="flex items-center gap-1 text-verde-claro font-semibold">
    Ver tudo <Seta className="size-4" />
  </a>
</div>

        <div className="bg-verde-claro py-[30px] px-[40px] grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {publicacoes.map((pub, index) => (
            <PublicacaoCard
              key={index}
              tag={pub.tag}
              titulo={pub.titulo}
              autores={pub.autores}
              periodico={pub.periodico}
              ano={pub.ano}
              link={pub.link}
            />
          ))}
        </div>
      </div>

      <Coordenacao />
    </main>
  )
}