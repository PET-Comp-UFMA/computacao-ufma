import Link from 'next/link';

export interface EventoAgenda {
  dia: string;
  mes: string;
  evento: string;
  periodo: string;
  curso: string;
}

interface AgendaSemestreProps {
  eventos: EventoAgenda[];
}

export default function AgendaSemestre({ eventos }: AgendaSemestreProps) {
  return (
    <section className="bg-azul-escuro text-texto-claro py-10 px-4">

      {/* Título com Ícone de calendário */}
      <div className="mb-12 flex items-center justify-center gap-3">
        <svg
          className="h-10 w-10 text-verde-claro"
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

        <h2 className="text-4xl font-bold tracking-tight">Agenda do Semestre</h2>
      </div>

      {/* Lista de eventos */}
      <div className="mx-auto max-w-fit">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:items-center lg:justify-center lg:gap-0 lg:divide-x lg:divide-white/20">
            {eventos.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
            
              {/* Caixinha verde */}
              <div className="flex h-18 w-18 shrink-0 flex-col items-center justify-center rounded-lg bg-verde-claro text-texto-claro">
                <span className="text-xl font-bold leading-none">{item.dia}</span>
                <span className="mt-1 text-lg font-semibold">{item.mes}</span>
              </div>

              {/* Textos do evento */}
              <div>
                <h3 className="font-bold text-xl">{item.evento}</h3>
                <p className="text-lg opacity-80">
                    {item.periodo} • {item.curso}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        {/* Botão ver mais */}
        <div className="mt-12 text-center">
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-verde-claro transition-colors"
          >
            Ver mais
          </Link>
        </div>

      </div>
    </section>
  );
}