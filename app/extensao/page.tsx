import CargaHorariaCard from '@/components/extensao/CargaHorariaCard';
import EntendaExtensaoCard from '@/components/extensao/EntendaExtensaoCard';
import OportunidadeCard from '@/components/extensao/OportunidadeCard';

export default function Extensao() {
  return (
    <main className="min-h-screen bg-fundo font-sans text-texto-escuro">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <CargaHorariaCard />

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
              Explore as oportunidade
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
            >
              Desenvolve ações de ensino, pesquisa e extensão, contribuindo para a formação acadêmica no curso.
            </OportunidadeCard>

            <OportunidadeCard
              logoSrc="/logos/lorde.svg"
              logoAlt="Logo da Associação Atlética Acadêmica LORDE"
              categoria="Associação"
              titulo="LORDE"
              subtitulo="Associação Atlética Acadêmica"
            >
              Integra os estudantes por meio do esporte, de eventos e ações que fortalecem a vida acadêmica.
            </OportunidadeCard>

            <OportunidadeCard
              logoSrc="/logos/dacomp.svg"
              logoAlt="Logo do Diretório Acadêmico de Computação (DAComp)"
              categoria="Associação"
              titulo="DAComp"
              subtitulo="Diretório Acadêmico de Computação"   
            >
              Representa o corpo discente, defende os interesses dos estudantes e promove iniciativas no curso.
            </OportunidadeCard>
          </div>
        </section>
      </div>
    </main>
  );
}
