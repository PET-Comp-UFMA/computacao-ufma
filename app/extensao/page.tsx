import CargaHorariaCard from '@/components/extensao/CargaHorariaCard';
import EntendaExtensaoCard from '@/components/extensao/EntendaExtensaoCard';
import Breadcrumb from '@/components/layout/Breadcrumb';
import PageBanner from '@/components/layout/PageBanner';
import OportunidadeCard from '@/components/extensao/OportunidadeCard';
import LigaCard from '@/components/extensao/LigaCard';

export default function Extensao() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Extensão"
        subtitulo="Projetos que levam o conhecimento da Computação para além da sala de aula e aproximam a universidade da comunidade"
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Extensão' },
          ]}
        />

        <div className="lg:absolute lg:top-1/2 lg:right-16 lg:-translate-y-1/2">
          <CargaHorariaCard />
        </div>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="py-12">
          <div>
            <div className="mb-3 h-1 w-16 rounded-full bg-verde-claro" />
            <h2 className="text-2xl font-bold text-texto-escuro md:text-3xl">
              Entenda a extensão
            </h2>
            <p className="mt-2 text-sm text-texto-escuro md:text-base">
              O essencial para participar, registrar e aproveitar suas horas.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <EntendaExtensaoCard
              iconeSrc="/icons/livro.svg"
              iconeAlt="Ícone de um livro aberto"
              titulo="O que é extensão?"
            >
              A extensão aproxima a universidade da sociedade por meio de
              programas, projetos e outras ações que permitem aplicar
              conhecimentos e contribuir com a comunidade. No curso, essas ações
              integram a Unidade Curricular de Extensão (UCE), componente
              obrigatório de 320 horas, equivalente a 10% da carga horária total
              da graduação.
            </EntendaExtensaoCard>

            <EntendaExtensaoCard
              iconeSrc="/icons/lista.svg"
              iconeAlt="Ícone de prancheta com lista"
              titulo="Quais atividades contam?"
            >
              A carga horária pode ser obtida em programas como PET e PIBITI,
              projetos de extensão e de PAD+, atividades das Ligas Acadêmicas,
              diretoria da atlética Lorde e diretoria ou projetos aprovados da
              empresa júnior Connecitas. Também são previstas a produção de
              cursos, oficinas e materiais audiovisuais, a colaboração em
              eventos e a participação em ações sociais. As horas dependem de
              comprovação e validação pela coordenação de extensão.
            </EntendaExtensaoCard>

            <EntendaExtensaoCard
              iconeSrc="/icons/relogio.svg"
              iconeAlt="Ícone de relógio"
              titulo="Como as horas são contabilizadas?"
            >
              Nas ações da UFMA, o docente responsável deve formalizar a
              atividade no SIGAA e registrar o estudante na equipe. Para ações
              externas, é necessário ter o plano de atividades aprovado
              previamente e solicitar aproveitamento pelo SIGAA, com declaração
              assinada e resumo da ação. As horas validadas ficam no banco de
              horas de extensão do SIGAA. Ao completar 320 horas, o estudante deve
              solicitar a matrícula na UCE à coordenação do curso ou de
              extensão.
            </EntendaExtensaoCard>
          </div>
        </section>

        <section className="py-12">
          <div>
            <div className="mb-3 h-1 w-16 rounded-full bg-verde-claro" />
            <h2 className="text-2xl font-bold text-texto-escuro md:text-3xl">
              Explore as oportunidades
            </h2>
            <p className="mt-2 text-sm text-texto-escuro/75 md:text-base">
              Conheça os projetos e ações de extensão em andamento
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <OportunidadeCard
              logoSrc="/logos/petcomp.svg"
              logoAlt="Logo do Programa de Educação Tutorial (PETComp)"
              categoria="Programa"
              titulo="PETComp"
              subtitulo="Programa de Educação Tutorial"
              href="#"
            >
              Desenvolve ações de ensino, pesquisa e extensão, contribuindo para a formação acadêmica no curso.
            </OportunidadeCard>

            <OportunidadeCard
              logoSrc="/logos/lorde.svg"
              logoAlt="Logo da Associação Atlética Acadêmica LORDE"
              categoria="Associação"
              titulo="LORDE"
              subtitulo="Associação Atlética Acadêmica"
              href="#"
            >
              Integra os estudantes por meio do esporte, de eventos e ações que fortalecem a vida acadêmica.
            </OportunidadeCard>

            <OportunidadeCard
              logoSrc="/logos/dacomp.svg"
              logoAlt="Logo do Diretório Acadêmico de Computação (DAComp)"
              categoria="Associação"
              titulo="DAComp"
              subtitulo="Diretório Acadêmico de Computação"
              href="#"
            >
              Representa o corpo discente, defende os interesses dos estudantes e promove iniciativas no curso.
            </OportunidadeCard>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-3 h-1 w-16 rounded-full bg-verde-claro" />

          <h2 className="text-2xl font-bold text-texto-escuro md:text-3xl">
              Ligas de Computação
          </h2>

          <p className="mt-2 text-sm text-texto-escuro md:text-base">
              Conheça as ligas acadêmicas ativas do curso de Ciência da Computação da UFMA.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <LigaCard
                  titulo="LADSIS"
                  descricao="Liga Acadêmica de Desenvolvimento de Sistemas"
                  categoria="Desenvolvimento Web"
                  href="#"
              />

              <LigaCard
                  titulo="LASEG"
                  descricao="Liga Acadêmica de Cibersegurança"
                  categoria="Cibersegurança"
                  href="#"
              />

              <LigaCard
                  titulo="LAJD"
                  descricao="Liga Acadêmica de Jogos Digitais"
                  categoria="Desenvolvimento de Jogos"
                  href="#"
              />

              <LigaCard
                  titulo="LACRO"
                  descricao="Liga Acadêmica de Robótica"
                  categoria="Robótica"
                  href="#"
              />

          </div>
      </section>

      </div>
    </main>
  );
}
