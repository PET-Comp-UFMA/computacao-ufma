interface Formacao {
  titulo: string
  modalidade: string
  descricao: string
}

const FORMACOES: Formacao[] = [
  {
    titulo: 'ABI',
    modalidade: 'Área Básica de Ingresso',
    descricao:
      'Formação inicial comum para os cursos de Ciência da Computação e Inteligência Artificial, com uma base sólida em fundamentos da Computação.',
  },
  {
    titulo: 'Ciência da Computação',
    modalidade: 'Bacharelado',
    descricao:
      'Forma profissionais com sólida base teórica e prática para atuar em diversas áreas da Computação, como desenvolvimento de software, sistemas e pesquisa.',
  },
  {
    titulo: 'Inteligência Artificial',
    modalidade: 'Bacharelado',
    descricao:
      'Voltado para o estudo e desenvolvimento de soluções inteligentes, unindo fundamentos da Computação, dados e métodos de IA.',
  },
  {
    titulo: 'Licenciatura em Tecnologia',
    modalidade: 'Educação a distância',
    descricao:
      'Formação de professores para atuar na educação básica e em diferentes contextos educacionais, utilizando tecnologias digitais de forma crítica e criativa.',
  },
]

export function NossasFormacoes() {
  return (
    <section
      aria-labelledby="nossas-formacoes-titulo"
      className="bg-fundo py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="nossas-formacoes-titulo"
          className="text-2xl font-bold tracking-tight text-texto-escuro sm:text-3xl"
        >
          Nossas formações
        </h2>

        <div
          className="mt-3 h-0.5 w-24 bg-verde-claro"
          aria-hidden="true"
        />

        <p className="mt-5 text-sm text-texto-escuro sm:text-base">
          A COCOM reúne diferentes formações para atender às demandas da
          sociedade e do mercado.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FORMACOES.map((formacao) => (
            <article
              key={formacao.titulo}
              className="flex h-full min-h-64 flex-col rounded-2xl border border-texto-escuro/25 p-6 pb-8"
            >
              <h3 className="text-base font-bold text-texto-escuro">
                {formacao.titulo}
              </h3>
              <p className="mt-1 text-xs text-texto-escuro/70">
                {formacao.modalidade}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-texto-escuro/90">
                {formacao.descricao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
