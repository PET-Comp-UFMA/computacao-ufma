export type CorCurso = 'cc' | 'ia' | 'licenciatura'


const bordaPorCurso: Record<CorCurso, string> = {
  cc: 'border-cc',
  ia: 'border-ia',
  licenciatura: 'border-licenciatura',
}

interface EstruturaCurricularProps {
  obrigatorias: number
  optativas: number
  complementares: number
  urlSigaa: string
  cor: CorCurso
}

interface CargaHoraria {
  titulo: string
  horas: string
}

function EstruturaCurricular({
  obrigatorias,
  optativas,
  complementares,
  urlSigaa,
  cor,
}: EstruturaCurricularProps) {
  const cargas: CargaHoraria[] = [
    { titulo: 'Obrigatórias', horas: `${obrigatorias} h` },
    { titulo: 'Optativas', horas: `${optativas} h` },
    { titulo: 'Complementares', horas: `${complementares} h` },
  ]

  return (
    <section className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-bold text-texto-escuro">
        Estrutura Curricular
      </h2>

      <div className="my-6 flex flex-col gap-4 md:flex-row">
        {cargas.map((item) => (
          <div
            key={item.titulo}
            className={`flex flex-1 flex-col rounded-lg border-2 bg-fundo p-5 ${bordaPorCurso[cor]}`}
          >
            <span className="text-sm text-gray-500">{item.titulo}</span>
            <strong className="text-2xl font-bold">{item.horas}</strong>
          </div>
        ))}
      </div>

      <a
        href={urlSigaa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-azul-escuro px-4 py-2 font-bold text-texto-claro"
      >
        Ver currículo completo no SIGAA
      </a>
    </section>
  )
}

export default EstruturaCurricular