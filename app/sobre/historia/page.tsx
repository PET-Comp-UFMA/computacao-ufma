import Text_Image from "../../../components/sobre/historia/TextImage";
import Texto_Simples from "../../../components/sobre/historia/SimpleText";  
import Breadcrumb from '@/components/layout/Breadcrumb'
import PageBanner from '@/components/layout/PageBanner'
import { NossasFormacoes } from '@/components/sobre/historia/NossasFormacoes'
import LinhaTempo from "@/components/sobre/historia/LinhaTempo";


const itensLinhaTempo=[
  {ano:1976, titulo:"Os primeiros passos", conteudo:"O professor João Fernando Atta de Oliveira Pantoja promove a criação "+
                                                    "de uma estrutura de comunicação, documentação e informática na UFMA, "+
                                                    "precursora da atual NTI"},
  {ano:1987,titulo:"Criação do curso",conteudo:"A Resolução nº 48/87 – CONSUN autoriza o funcionamento do curso de Ciência "+
                                               "da Computação. As atividades começam no segundo semestre, com 20 alunos."},
  {ano:1992,titulo:"Departamento de Informática",conteudo:"A Resolução nº 10/92 – CONSUN cria o Departamento de Informática, "+
                                                          "desmembrado do Departamento de Matemática."},
  {ano:2025,titulo:"Bacharelado em Inteligência Artificial",conteudo:"A Resolução nº 4072, de 6 de novembro de 2025, cria o "+
                                                                     "curso de Inteligência Artificial, ampliando as possibilidades de formação."},
  {ano:2026,titulo:"ABI em Computação e Inteligência Artificial",conteudo:"A partir do SISU 2026, os estudantes ingressam por uma área básica "+
                                                                          "comum, cursando três semestres de formação compartilhada antes da escolha "+
                                                                          "entre os bacharelados."}
]

export default function Historia() {
  return (
    <main>
      <PageBanner
        imagem="/images/foto_entrada_ccet.png"
        titulo="Nossa História"
        subtitulo="A trajetória da Computação na Universidade Federal do Maranhão, construida por pessoas, ideias e muitas possibilidades."
      >
        <Breadcrumb
          itens={[
            { nome: 'Início', href: '/' },
            { nome: 'Sobre' },
            { nome: 'História' },
          ]}
        />
      </PageBanner>
  
    <div className="mx-auto max-w-7xl px-6"> 
      <Text_Image texto={{titulo:'Computacão na UFMA', conteudo:'A história da Computação na UFMA é marcada pelo esforço de professores, '+
                                 'estudantes e técnicos que acreditaram no potencial transformador da '+
                                 'tecnologia. Desde os primeiros passos, a área vem se consolidando como '+
                                 'referência no ensino, na pesquisa e na extensão, formando profissionais que '+
                                 'contribuem para o desenvolvimento do Maranhão e do Brasil.'
                                }}
                  imagem={{fonte:'/images/ccet_agora.jpg',alt:'Foto do CCET',tamanho: 259, largura: 585}}
                  inverter={false}
      />
      <Texto_Simples titulo="Linha do tempo" conteudo="Principais marcos da trajetória da Computação na  UFMA:" />
      <LinhaTempo itens={itensLinhaTempo}/>
      {//<Texto_Simples titulo="Nossas formações" conteudo="A COCOM reúne diferentes formações para atender às demandas  da sociedade e do mercado." 
      }
      <NossasFormacoes />
      <Text_Image texto={{titulo:'Uma nova fase da Computaçã́o', conteudo:'A criação do curso de Intenligência Artificial e a implementação da ABI'+
                          'representam uma nova etapa na história da Computação na UFMA. Essas iniciativas ampliam as oportunidades de formação, '+
                          'fortalecem a integração entre os cursos e colocam a universidade ainda mais próxima das demandas tecnológicas e sociais da '+
                          'atualidade.'}}
                  imagem={{fonte:'/images/ccet_totem.jpg',alt:'Foto do CCET',tamanho: 259, largura: 585}}
                  inverter={true}
      />
    </div>
    
    </main>
  )
}
