export type Foto = {
  src: string
  legenda: string
}

export type Projeto = {
  nome: string
  desde: number
  descricao: string
  responsavel: string
}

export type Coordenador = {
  nome: string
  foto?: string
  email?: string
  lattes?: string
}

export type Membro = {
  nome: string
  foto?: string
  vinculo: string
}

export type Laboratorio = {
  id: string
  nome: string
  descricao: string
  logo: string
  larguraLogo: number
  alturaLogo: number
  fundo: string
  // Cor do laboratório (a mesma da faixa do card), usada no fundo do modal.
  cor: string
  // Campos do modal "Saiba mais". São opcionais: o modal só mostra
  // as seções que tiverem conteúdo.
  subtitulo?: string
  local?: string
  linkMapa?: string
  sobre?: string
  fotos?: Foto[]
  projetos?: Projeto[]
  coordenacao?: Coordenador[]
  posGraduacao?: Membro[]
  graduacao?: Membro[]
  contato?: string
}

// A ordem acompanha a apresentação dos laboratórios no Figma.
export const laboratorios: Laboratorio[] = [
  {
    id: 'dxt',
    nome: 'DEXTERS LAB',
    descricao: 'Laboratório de Engenharia de Software',
    logo: '/images/laboratorios/dxt.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/dxt-fundo.svg',
    cor: '#ABF3FF',
  },
  {
    id: 'viplab',
    nome: 'VIPLab',
    descricao: 'Laboratório de Visão e Processamento de Imagens',
    logo: '/images/laboratorios/viplab.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/viplab-fundo.svg',
    cor: '#B8DB87',
    subtitulo: 'Vision and Image Processing Lab',
    sobre:
      'O Vision and Image Processing Lab (Laboratório de Visão e Processamento de Imagens) - VIPLab - é um dos laboratórios vinculados ao Núcleo de Computação Aplicada (NCA). O laboratório desenvolve pesquisas nas áreas de algoritmos de aprendizado profundo aplicados a problemas médicos e ciência de dados.',
    coordenacao: [
      { nome: 'Prof. Dr. Geraldo Braz Júnior' },
      { nome: 'Prof. Dr. João Dallyson' },
    ],
    // TODO: os dados abaixo são provisórios (iguais aos do Figma) e
    // precisam ser trocados pelos reais antes de ir para a main.
    local: 'Bloco 1 - Sala 201',
    linkMapa: 'https://www.google.com/maps/search/?api=1&query=CCET+UFMA',
    fotos: [
      { src: '/images/foto_porta_ccet.png', legenda: 'Foto provisória 1' },
      { src: '/images/foto_entrada_ccet.png', legenda: 'Foto provisória 2' },
      { src: '/images/ccet_agora.jpg', legenda: 'Foto provisória 3' },
      { src: '/images/ccet_totem.jpg', legenda: 'Foto provisória 4' },
    ],
    projetos: [
      { nome: 'Nome do Projeto', desde: 2026, descricao: 'Descrição do projeto.', responsavel: 'Prof. Fulano de Tal' },
      { nome: 'Nome do Projeto', desde: 2026, descricao: 'Descrição do projeto.', responsavel: 'Prof. Fulano de Tal' },
      { nome: 'Nome do Projeto', desde: 2026, descricao: 'Descrição do projeto.', responsavel: 'Prof. Fulano de Tal' },
      { nome: 'Nome do Projeto', desde: 2026, descricao: 'Descrição do projeto.', responsavel: 'Prof. Fulano de Tal' },
    ],
    posGraduacao: [
      { nome: 'Fulano de Tal', vinculo: 'Mestrado - PPGCC' },
      { nome: 'Fulano de Tal', vinculo: 'Mestrado - PPGCC' },
      { nome: 'Fulano de Tal', vinculo: 'Mestrado - PPGCC' },
      { nome: 'Fulano de Tal', vinculo: 'Mestrado - PPGCC' },
    ],
    graduacao: [
      { nome: 'Fulano de Tal', vinculo: 'Graduação - CC' },
      { nome: 'Fulano de Tal', vinculo: 'Graduação - IA' },
      { nome: 'Fulano de Tal', vinculo: 'Graduação - ABI' },
      { nome: 'Fulano de Tal', vinculo: 'Graduação - CC' },
    ],
  },
  {
    id: 'modal',
    nome: 'MODAL',
    descricao: 'Laboratório de Modelagem Matemática e Algoritmos',
    logo: '/images/laboratorios/modal.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/modal-fundo.svg',
    cor: '#D28B8B',
  },
  {
    id: 'lint',
    nome: 'LINT²',
    descricao: 'Laboratório de Inteligência Interativa',
    logo: '/images/laboratorios/lint.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/lint-fundo.svg',
    cor: '#BDE2D0',
  },
  {
    id: 'nca',
    nome: 'NCA',
    descricao: 'Núcleo de Computação Aplicada',
    logo: '/images/laboratorios/nca.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/nca-fundo.svg',
    cor: '#D2C0DA',
  },
  {
    id: 'lsdi',
    nome: 'LSDi',
    descricao: 'Laboratório de Sistemas Distribuídos Inteligentes',
    logo: '/images/laboratorios/lsdi.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/lsdi-fundo.svg',
    cor: '#ABD6DE',
  },
  {
    id: 'laws',
    nome: 'LAWS',
    descricao: 'Laboratório de Sistemas Web Avançados',
    logo: '/images/laboratorios/laws.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/laws-fundo.svg',
    cor: '#E98080',
  },
  {
    id: 'inovtec',
    nome: 'INOVTEC',
    descricao: 'Núcleo de Estudos Tecnológicos em Mecatrônica',
    logo: '/images/laboratorios/inovtec.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/inovtec-fundo.svg',
    cor: '#808080',
  },
  {
    id: 'lacmor',
    nome: 'LACMOR',
    descricao: 'Laboratório de Métodos de Cognição Artificial para Otimização e Robótica',
    logo: '/images/laboratorios/lacmor.png',
    larguraLogo: 243,
    alturaLogo: 241,
    fundo: '/images/laboratorios/lacmor-fundo.svg',
    cor: '#8086AF',
  },
  {
    id: 'telemidia',
    nome: 'TELEMÍDIA',
    descricao: 'Laboratório de Sistemas Multimídia',
    logo: '/images/laboratorios/telemidia.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/telemidia-fundo.svg',
    cor: '#F7CB90',
  },
  {
    id: 'lidi',
    nome: 'LIDI',
    descricao: 'Laboratório de Inclusão Digital',
    logo: '/images/laboratorios/lidi.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/lidi-fundo.svg',
    cor: '#ECF0A0',
  },
]
