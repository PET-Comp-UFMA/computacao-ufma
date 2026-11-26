import { notFound } from 'next/navigation'
import CardCoordenador from '@/components/cursos/CardCoordenador'
import InfoCurso from '@/components/cursos/InfoCurso'
import PageBanner from '@/components/layout/PageBanner'
import EstruturaCurricular, {
  type CorCurso,
} from '@/components/cursos/EstruturaCurricular'

type DadosCurso = {
  imagem: string
  sobretitulo: string
  titulo: string
  subtitulo: string
  modalidade: string
  duracao: string
  ingresso: string
  turno: string
  coordenador: string
  fotoCoordenador?: string
  cor: CorCurso 
  obrigatorias: number 
  optativas: number
  complementares: number
  urlSigaa: string
}


const cursos: Record<string, DadosCurso> = {
  cc: {
    imagem: '/images/foto_porta_ccet.png',
    sobretitulo: 'BACHARELADO - PRESENCIAL',
    titulo: 'Ciência da Computação',
    subtitulo: 'Formação ampla em computação: teoria, sistemas e software.',
    modalidade: 'Presencial',
    duracao: '8 Semestres',
    ingresso: 'Via ABI',
    turno: 'Integral',
    coordenador: 'Prof. Dr. Matheus Chaves Menezes',
    fotoCoordenador: '/images/coord_cc.png',
    cor: 'cc', 
    obrigatorias: 0, 
    optativas: 0, 
    complementares: 0, 
    urlSigaa: 'https://sigaa.ufma.br/sigaa/public/curso/curriculo_curso.jsf?lc=pt_br&id=85766',
  },
  ia: {
    imagem: '/images/foto_entrada_ccet.png',
    sobretitulo: 'BACHARELADO - PRESENCIAL',
    titulo: 'Inteligência Artificial',
    subtitulo: 'Aprendizado de máquina, dados e sistemas inteligentes.',
    modalidade: 'Presencial',
    duracao: '8 Semestres',
    ingresso: 'Via ABI',
    turno: 'Integral',
    coordenador: 'Prof. Dr. Tiago Bonini',
    fotoCoordenador: '/images/coord_ia.png',
    cor: 'ia',
    obrigatorias: 0, 
    optativas: 0, 
    complementares: 0,
    urlSigaa: 'https://sigaa.exemplo.br',
  },
  licenciatura: {
    imagem: '/images/foto_porta_ccet.png',
    sobretitulo: 'LICENCIATURA - EAD',
    titulo: 'Licenciatura em Computação\ne Informática',
    subtitulo: 'Forma professores e profissionais para atuar no ensino de computação.',
    modalidade: 'EAD',
    duracao: '5 Semestres',
    ingresso: 'Via SISU',
    turno: 'Integral',
    coordenador: 'Prof. Dr. Tiago Bonini',
    fotoCoordenador: '/images/coord_ia.png',
    cor: 'licenciatura', 
    obrigatorias: 0, 
    optativas: 0, 
    complementares: 0, 
    urlSigaa: 'https://sigaa.exemplo.br',

  },
}

export const instant = false

export function generateStaticParams() {
  return Object.keys(cursos).map((curso) => ({ curso }))
}

export default async function Curso({
  params,
}: {
  params: Promise<{ curso: string }>
}) {
  const { curso } = await params

  if (!Object.hasOwn(cursos, curso)) {
    notFound()
  }

  const dados = cursos[curso]

  return (
    <main>
      <PageBanner
        imagem={dados.imagem}
        sobretitulo={dados.sobretitulo}
        titulo={dados.titulo}
        subtitulo={dados.subtitulo}
      >
        <CardCoordenador
          nome={dados.coordenador}
          cargo="Coordenador"
          contato="/sobre/contato"
          foto={dados.fotoCoordenador}
        />

        <div className="grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <InfoCurso rotulo="Modalidade" valor={dados.modalidade} />
          <InfoCurso rotulo="Duração" valor={dados.duracao} />
          <InfoCurso rotulo="Ingresso" valor={dados.ingresso} />
          <InfoCurso rotulo="Turno" valor={dados.turno} />
        </div>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <EstruturaCurricular
          obrigatorias={dados.obrigatorias}
          optativas={dados.optativas}
          complementares={dados.complementares}
          urlSigaa={dados.urlSigaa}
          cor={dados.cor}
        />
      </div>

    </main>
  )
}
