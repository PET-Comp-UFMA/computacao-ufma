'use client';
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import { Card } from "@/components/sobre/equipe/card";
import {useState} from "react";


export default function Equipe() {
  const [aba,setAba] = useState("ativos");
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
      <nav className="bg-azul-escuro w-full h-15  flex gap-10 px-6 items-center">

        <button onClick={() => setAba("ativos")} className="text-verde-claro font-sans font-bold h-full flex flex-col justify-between pt-4" >
          <span>Docentes ativos</span>
          <div className={aba == "ativos" ? "w-full h-1.5 bg-verde-claro rounded-t-full" : "h-1.5"}></div>
        </button>

        <button onClick={() => setAba("aposentados")} className="text-verde-claro font-sans font-bold h-full flex flex-col justify-between pt-4" >
          <span>Docentes aposentados</span>
          <div className={aba == "aposentados" ? "w-full h-1.5 bg-verde-claro rounded-t-full" : "h-1.5"}></div>
        </button>
        
      </nav>
      { aba == "ativos" ?
       (<div className='flex-col bg-azul-escuro/95'>
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
      </div>)
      :
       (<div className='flex-col bg-azul-escuro/95'>
          <div className="flex flex-row flex-wrap items-center justify-center">
          <Card nome = "Prof. Dr. Italo Francyles Santos da Silva" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=2041885&key=3f47cb1d9f14bce32c0fe0c7ca0db27f" coordenacao="Tutor" atividade = " PETComp" linkedin="https://www.linkedin.com/in/italo-francyles-phd/" lattes="https://busca-cv-lattes.cnpq.br/curriculo/5461815672803673" email="francyles06@gmail.com" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Italo Francyles Santos da Silva" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=2041885&key=3f47cb1d9f14bce32c0fe0c7ca0db27f" coordenacao="Tutor" atividade = " PETComp" linkedin="https://www.linkedin.com/in/italo-francyles-phd/" lattes="https://busca-cv-lattes.cnpq.br/curriculo/5461815672803673" email="francyles06@gmail.com" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Italo Francyles Santos da Silva" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=2041885&key=3f47cb1d9f14bce32c0fe0c7ca0db27f" coordenacao="Tutor" atividade = " PETComp" linkedin="https://www.linkedin.com/in/italo-francyles-phd/" lattes="https://busca-cv-lattes.cnpq.br/curriculo/5461815672803673" email="francyles06@gmail.com" modal="jss" tema="escuro">
          </Card>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
          <Card nome = "Prof. Dr. Italo Francyles Santos da Silva" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=2041885&key=3f47cb1d9f14bce32c0fe0c7ca0db27f" coordenacao="Tutor" atividade = " PETComp" linkedin="https://www.linkedin.com/in/italo-francyles-phd/" lattes="https://busca-cv-lattes.cnpq.br/curriculo/5461815672803673" email="francyles06@gmail.com" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Italo Francyles Santos da Silva" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=2041885&key=3f47cb1d9f14bce32c0fe0c7ca0db27f" coordenacao="Tutor" atividade = " PETComp" linkedin="https://www.linkedin.com/in/italo-francyles-phd/" lattes="https://busca-cv-lattes.cnpq.br/curriculo/5461815672803673" email="francyles06@gmail.com" modal="jss" tema="escuro">
          </Card>
          <Card nome = "Prof. Dr. Italo Francyles Santos da Silva" imagem = "https://sigaa.ufma.br/sigaa/verFoto?idFoto=2041885&key=3f47cb1d9f14bce32c0fe0c7ca0db27f" coordenacao="Tutor" atividade = " PETComp" linkedin="https://www.linkedin.com/in/italo-francyles-phd/" lattes="https://busca-cv-lattes.cnpq.br/curriculo/5461815672803673" email="francyles06@gmail.com" modal="jss" tema="escuro">
          </Card>
      </div>
      </div>)
      }
      
    </section>
    </main>
  

  );
}