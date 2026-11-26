import Coordenacao from '@/components/home/Coordenacao'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PageBanner from '@/components/layout/PageBanner'
import PublicacaoCard from "@/components/pesquisa/PublicacaoCard";

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
      <Coordenacao />

      <div className="bg-verde-claro py-[31px] px-[29px] grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </main>
  )
}