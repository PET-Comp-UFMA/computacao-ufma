import Image from 'next/image';
import Link from 'next/link';

export interface NoticiaProps {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  curso: string;
  imagemUrl: string;
}

const AGENDA_MOCK = [
  {
    dia: '04',
    mes: 'OUT',
    evento: 'Início das Matrículas',
    descricao: '2026.2 • Todos os cursos',
  },
  {
    dia: '10',
    mes: 'OUT',
    evento: 'Início das aulas',
    descricao: '2026.2 • Todos os cursos',
  },
  {
    dia: '14',
    mes: 'OUT',
    evento: 'Fim do prazo de trancamento',
    descricao: '2026.2 • Todos os cursos',
  },
  {
    dia: '20',
    mes: 'OUT',
    evento: 'Início das Matrículas',
    descricao: '2026.2 • Todos os cursos',
  },
];

export default function Noticias(){
  return(
    <main className="bg-fundo text-texto-escuro">

      {/* Sessão da AGENDA */}
      <section className='bg-azul-escuro text-texto-claro py-10 px-4'>

        {/* Titulo com Icone de calendário*/}
        <div className="mb-8 flex items-center justify-center gap-3">

          {/* Ícone de Calendário */}
          <svg
            className="h-6 w-6 text-verde-claro"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>

          {/* Título */}
          <h2 className="text-2xl font-bold tracking-tight">Agenda do Semestre</h2>
        </div>

        {/* Lista de eventos */}
        <div className="max-w-6xl mx-auto">
          {AGENDA_MOCK.map((item, index) => (
            <div
              key={index}
              className="fgrid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {/* Caixinha verde */}
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-verde-claro text-texto-claro">
                <span className="text-lg font-bold leading-none">{item.dia}</span>
                <span className="mt-1 text-xs font-semibold">{item.mes}</span>
              </div>

              {/* Textos do evento */}
              <div>
                <h3 className="font-bold text-base">{item.evento}</h3>
                <p className="text-sm opacity-80">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}