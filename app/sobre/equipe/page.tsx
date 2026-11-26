
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import { Card } from "@/components/sobre/card";

export default function Equipe() {
  return( 
    <main>
      <PageBanner
        imagem="/images/foto_porta_ccet.png"
        titulo="Equipe"
        subtitulo="Confira os membros da coordenação e do corpo de docentes."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Sobre' },
            { nome: 'Equipe' },
          ]}
        />
      </PageBanner>
      <div className="flex flex-row">
     <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="claro"></Card>
     <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="claro"></Card>
     <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="claro"></Card>
  </div>
    </main>
  

  );
}