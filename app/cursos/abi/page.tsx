import Caminhos from '@/components/cursos/Caminhos'
import CardCoordenador from '@/components/cursos/CardCoordenador'
import ContatoCard from '@/components/cursos/ContatoCard'
import DuvidasFrequentes from '@/components/cursos/DuvidasFrequentes'
import { CorCurso } from '@/components/cursos/EstruturaCurricular'
import InfoCurso from '@/components/cursos/InfoCurso'
import SobreCurso from '@/components/cursos/SobreCurso'
import PageBanner from '@/components/layout/PageBanner'

type dadosABI = {
  sobre: string[],
  cor: CorCurso,
}

export default function Abi({
  sobre = ["Criado em [ano], o curso já formou mais de [N] bacharéis, que atuam em empresas, órgãos públicos e universidades. Com o objetivo de formar profissionais com base sólida em matemática, algoritmos e engenharia de software, capazes de projetar e avaliar sistemas computacionais.", "Docentes [N]% doutores, laboratórios, iniciação científica, ligas estudantis, competições e estágios em [empresas parceiras]."],
  cor = 'abi',
}: dadosABI) {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_porta_ccet.png"
        sobretitulo="ABI"
        titulo="Área Básica de Ingresso"
        subtitulo="Núcleo comum aos cursos de Ciência da Computação e Inteligência Artificial."
      >
        <CardCoordenador
          nome="Prof. Dr. Francisco Glaubos"
          cargo="Coordenador"
          contato="/sobre/contato"
          foto="/images/coord_abi.png"
        />

        <div className="grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <InfoCurso rotulo="Modalidade" valor="Presencial" />
          <InfoCurso rotulo="Duração" valor="3 Semestres" />
          <InfoCurso rotulo="Ingresso" valor="Via SISU" />
          <InfoCurso rotulo="Turno" valor="Integral" />
        </div>
      </PageBanner>

      <div className="mx-auto max-w-6xl space-y-15 px-4 py-8">
        <SobreCurso paragrafos={sobre} />

        <Caminhos />

        <div className='flex justify-between'>
          <DuvidasFrequentes cor={cor} />
          <ContatoCard cor={cor} />
        </div>
      </div>
    </main>
  )
}
