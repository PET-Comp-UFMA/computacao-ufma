import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Card } from "@/components/sobre/card";


export default function Equipe() {
  return( 
    <main>
      <Header/>
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
      <section className="flex flex-col py-12 gap-y-5 bg-fundo">
        <span className="text-verde-claro px-6 font-sans font-semibold text-3xl">Coordenação</span>
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="claro">
          </Card>
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="claro">
          </Card>
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="claro">
          </Card>
      </div>
    </section>
    <section>
      <nav className="bg-azul-escuro w-full h-10  flex gap-10 px-6 items-center">
        <a href="#" className="text-verde-claro font-sans font-bold">Docentes ativos</a>
        <a href="#" className="text-verde-claro font-sans font-bold">Docentes aposentados</a>
      </nav>
      <div className='flex-col bg-azul-escuro/95'>
          <div className="flex flex-row flex-wrap items-center justify-center">
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="escuro">
          </Card>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Matheus Chaves Menezes" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=3620875&key=1a826f0017f6309c70367f01507f0b5f" coordenacao="Coordenador" atividade = " Ciência da Computação" linkedin="https://www.linkedin.com/in/menezes94/" lattes="https://lattes.cnpq.br/5225992710518109" email="matheus.menezes@ufma.br" modal="jss" tema="escuro">
          </Card>
      </div>
      </div>
    </section>
    <Footer/>
    </main>
  

  );
}