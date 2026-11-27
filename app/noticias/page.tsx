import Breadcrumb from '@/components/layout/Breadcrumb';
import PageBanner from '@/components/layout/PageBanner';
import AgendaSemestre, { EventoAgenda } from '@/components/noticias/AgendaSemestre';

const AGENDA_MOCK: EventoAgenda[] = [
  {
    dia: '04',
    mes: 'OUT',
    evento: 'Início das Matrículas',
    periodo: '2026.2',
    curso: 'Todos os cursos',
  },
  {
    dia: '10',
    mes: 'OUT',
    evento: 'Início das aulas',
    periodo: '2026.2',
    curso: 'Todos os cursos',
  },
  {
    dia: '14',
    mes: 'OUT',
    evento: 'Fim do prazo de trancamento',
    periodo: '2026.2',
    curso: 'Todos os cursos',
  },
  {
    dia: '20',
    mes: 'OUT',
    evento: 'Início das Matrículas',
    periodo: '2026.2',
    curso: 'Todos os cursos',
  },
];

export default function Noticias() {
  return (
    <main className="bg-fundo text-texto-escuro">

      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Notícias"
        subtitulo="Confira as últimas notícias sobre os cursos e próximas datas importantes."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Notícias' },
          ]}
        />
      </PageBanner>

      <AgendaSemestre eventos={AGENDA_MOCK} />
      
    </main>
  );
}