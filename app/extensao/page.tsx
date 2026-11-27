import CargaHorariaCard from '@/components/extensao/CargaHorariaCard';
import EntendaExtensaoCard from '@/components/extensao/EntendaExtensaoCard';
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'

export default function Extensao() {
  return (
    <main className="min-h-screen bg-fundo font-sans text-texto-escuro">

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
      </PageBanner>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CargaHorariaCard />

        <section className="py-12">
          <div>
            <div className="mb-3 h-1 w-16 rounded-full bg-verde-claro" />
            <h2 className="text-2xl font-bold text-texto-escuro md:text-3xl">
              Entenda a extensão
            </h2>
            <p className="mt-2 text-sm text-texto-escuro md:text-base">
              O esencial para participai, registrar e aproveitar suas horas.
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
              titulo="Quais atividade contam?"
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
      </div>
    </main>
  );
}