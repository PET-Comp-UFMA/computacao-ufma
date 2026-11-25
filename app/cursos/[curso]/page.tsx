import { notFound } from 'next/navigation'
import CardCoordenador from '@/components/cursos/CardCoordenador'
import InfoCurso from '@/components/cursos/InfoCurso'
import PageBanner from '@/components/layout/PageBanner'

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
}

// Um arquivo serve 3 cursos, então os textos de cada um ficam aqui.
// A chave (cc, ia, licenciatura) é o que aparece na URL: /cursos/cc
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
    fotoCoordenador: '/images/coord_cc.png'
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
    fotoCoordenador: '/images/coord_ia.png'
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
    fotoCoordenador: '/images/coord_ia.png'
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
    </main>
  )
}
