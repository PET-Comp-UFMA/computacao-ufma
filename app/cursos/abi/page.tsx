import CardCoordenador from '@/components/cursos/CardCoordenador'
import InfoCurso from '@/components/cursos/InfoCurso'
import PageBanner from '@/components/layout/PageBanner'

export default function Abi() {
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
    </main>
  )
}
