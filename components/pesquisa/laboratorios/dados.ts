export type Laboratorio = {
  id: string
  nome: string
  descricao: string
  logo: string
  larguraLogo: number
  alturaLogo: number
  fundo: string
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
  },
  {
    id: 'viplab',
    nome: 'VIPLab',
    descricao: 'Laboratório de Visão e Processamento de Imagens',
    logo: '/images/laboratorios/viplab.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/viplab-fundo.svg',
  },
  {
    id: 'modal',
    nome: 'MODAL',
    descricao: 'Laboratório de Modelagem Matemática e Algoritmos',
    logo: '/images/laboratorios/modal.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/modal-fundo.svg',
  },
  {
    id: 'lint',
    nome: 'LINT²',
    descricao: 'Laboratório de Inteligência Interativa',
    logo: '/images/laboratorios/lint.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/lint-fundo.svg',
  },
  {
    id: 'nca',
    nome: 'NCA',
    descricao: 'Núcleo de Computação Aplicada',
    logo: '/images/laboratorios/nca.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/nca-fundo.svg',
  },
  {
    id: 'lsdi',
    nome: 'LSDi',
    descricao: 'Laboratório de Sistemas Distribuídos Inteligentes',
    logo: '/images/laboratorios/lsdi.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/lsdi-fundo.svg',
  },
  {
    id: 'laws',
    nome: 'LAWS',
    descricao: 'Laboratório de Sistemas Web Avançados',
    logo: '/images/laboratorios/laws.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/laws-fundo.svg',
  },
  {
    id: 'inovtec',
    nome: 'INOVTEC',
    descricao: 'Núcleo de Estudos Tecnológicos em Mecatrônica',
    logo: '/images/laboratorios/inovtec.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/inovtec-fundo.svg',
  },
  {
    id: 'lacmor',
    nome: 'LACMOR',
    descricao: 'Laboratório de Métodos de Cognição Artificial para Otimização e Robótica',
    logo: '/images/laboratorios/lacmor.png',
    larguraLogo: 243,
    alturaLogo: 241,
    fundo: '/images/laboratorios/lacmor-fundo.svg',
  },
  {
    id: 'telemidia',
    nome: 'TELEMÍDIA',
    descricao: 'Laboratório de Sistemas Multimídia',
    logo: '/images/laboratorios/telemidia.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/telemidia-fundo.svg',
  },
  {
    id: 'lidi',
    nome: 'LIDI',
    descricao: 'Laboratório de Inclusão Digital',
    logo: '/images/laboratorios/lidi.png',
    larguraLogo: 140,
    alturaLogo: 139,
    fundo: '/images/laboratorios/lidi-fundo.svg',
  },
]
