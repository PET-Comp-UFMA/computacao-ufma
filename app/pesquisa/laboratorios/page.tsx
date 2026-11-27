import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import LabCard from '@/components/pesquisa/laboratorios/LabCard'
import { laboratorios } from '@/components/pesquisa/laboratorios/dados'

export const metadata: Metadata = {
  title: 'Laboratórios | Computação UFMA',
  description: 'Conheça os laboratórios de Ciência da Computação e Inteligência Artificial da UFMA.',
}

export default function Laboratorios() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Laboratórios"
        subtitulo="Confira os laboratórios do curso"
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Pesquisa' },
            { nome: 'Laboratórios' },
          ]}
        />
      </PageBanner>
      <section aria-label="Laboratórios do curso" className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 lg:px-[55px] lg:py-[70px]">
        <p className="mx-auto max-w-[1277px] text-base leading-relaxed md:text-lg lg:text-justify lg:text-xl lg:leading-[30px]">
          Os laboratórios de Ciência da Computação e Inteligência Artificial da UFMA (CCET) formam um ecossistema integrado e colaborativo focado em inovação tecnológica e na resolução de problemas complexos. Em vez de atuarem isoladamente, esses espaços se complementam em pesquisas de ponta que envolvem Inteligência Artificial, aprendizado de máquina e visão computacional (com aplicações médicas e em dados geográficos); engenharia de software e interação humano-computador; além de sistemas web avançados, computação pervasiva, mídias interativas, TV digital e jogos. Funcionando como verdadeiros centros de formação, esses laboratórios mantêm as portas abertas para os alunos, que podem ingressar em projetos de pesquisa bastando entrar em contato direto e conversar com os professores responsáveis.
        </p>
        <p id="laboratorios-detalhes" className="sr-only">
          As informações detalhadas dos laboratórios ainda não estão disponíveis nesta versão.
        </p>
        <ul className="mx-auto mt-12 grid max-w-[1080px] grid-cols-1 justify-items-center gap-[30px] md:grid-cols-2 lg:mt-[79px] lg:grid-cols-3">
          {laboratorios.map(laboratorio => (
            <li key={laboratorio.id} className="w-full min-w-0 max-w-[350px]">
              <LabCard laboratorio={laboratorio} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
