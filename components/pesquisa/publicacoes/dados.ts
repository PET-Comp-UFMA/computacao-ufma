export type Publicacao = {
  id: string
  titulo: string
  autores: string[]
  resumo: string
  ano: number
  instituicao: string
  temas: string[]
  curso: string
  tipo: string
  artigoUrl?: string
  pdfUrl?: string
}

// Fixtures para comparação visual; não representam o acervo real.
export const publicacoesDemonstracao: Publicacao[] = [
  {
    id: 'acalourada',
    titulo: 'Do Primeiro Contato à Permanência: Acalourada como Ferramenta\nde Integração do PETComp',
    autores: ['Arthur Kean', 'Pedro Matos', 'Herbert Richars', 'Nicolas Caliman'],
    resumo: 'Este trabalho apresenta uma análise da Acalourada do PETComp como estratégia de integração\ne acolhimento de novos estudantes no ambiente universitário, destacando sua contribuição para\no fortalecimento dos vínculos acadêmicos, a participação estudantil e a permanência no curso',
    ano: 2025,
    instituicao: 'PETComp - UFMA',
    temas: ['Extensão', 'Permanência', 'Computação'],
    curso: 'cc',
    tipo: 'evento',
  },
  {
    id: 'planilhas',
    titulo: 'Planilhas Inteligentes: Transformando Organização em\nAutomação Via Programação',
    autores: ['Arthur Kean', 'Pedro Matos', 'Herbert Richars', 'Nicolas Caliman'],
    resumo: 'O trabalho aborda a utilização de ferramentas computacionais para automatizar\nprocessos de organização e tratamento de dados por meio de planilhas eletrônicas.\nA proposta explora a integração entre programação e ferramentas de produtividade,\ndemonstrando possibilidades de otimização de tarefas acadêmicas e administrativas.',
    ano: 2025,
    instituicao: 'PETComp - UFMA',
    temas: ['Extensão', 'Permanência', 'Computação'],
    curso: 'cc',
    tipo: 'evento',
  },
  {
    id: 'deteccao-desinformacao',
    titulo: 'Detecção de Desinformação em Redes Sociais com\nModelos de Linguagem',
    autores: ['Ana Beatriz Costa', 'Lucas Ribeiro', 'Mariana Sousa'],
    resumo: 'Esta pesquisa investiga o uso de modelos de linguagem para identificar conteúdos potencialmente falsos em redes sociais. O estudo compara técnicas de processamento de linguagem natural e analisa os principais desafios encontrados na classificação automática de textos.',
    ano: 2024,
    instituicao: 'Computação - UFMA',
    temas: ['Inteligência Artificial', 'Machine Learning'],
    curso: 'ia',
    tipo: 'artigo',
  },
]

export type OpcaoFiltro = {
  valor: string
  nome: string
  quantidade: number
}

const nomesCursos: Record<string, string> = {
  abi: 'ABI',
  cc: 'Ciência da Computação',
  ia: 'Inteligência Artificial',
  licenciatura: 'Licenciatura em Computação',
}

const nomesTipos: Record<string, string> = {
  artigo: 'Artigo Cientifico',
  evento: 'Trabalho em evento',
  tcc: 'TCC e Monografia',
  outros: 'Outros',
}

function nomeLegivel(valor: string, catalogo: Record<string, string>) {
  return catalogo[valor] ?? valor
}

function contar(valores: string[], catalogo: Record<string, string> = {}) {
  const quantidades = new Map<string, number>()

  valores.forEach(valor => quantidades.set(valor, (quantidades.get(valor) ?? 0) + 1))

  return Array.from(quantidades, ([valor, quantidade]) => ({
    valor,
    nome: nomeLegivel(valor, catalogo),
    quantidade,
  }))
}

export function criarOpcoesFiltros(publicacoes: Publicacao[]) {
  return {
    cursos: contar(publicacoes.map(publicacao => publicacao.curso), nomesCursos),
    tipos: contar(publicacoes.map(publicacao => publicacao.tipo), nomesTipos),
    areas: contar(publicacoes.flatMap(publicacao => publicacao.temas)),
  }
}

export type FiltrosPublicacoes = {
  palavra: string
  tipos: string[]
  cursos: string[]
  areas: string[]
  de: string
  ate: string
}

export const filtrosIniciais: FiltrosPublicacoes = {
  palavra: '', tipos: [], cursos: [], areas: [], de: '', ate: '',
}
