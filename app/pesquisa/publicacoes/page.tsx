import '@/components/pesquisa/publicacoes/Publicacoes.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import PublicacoesBanner from '@/components/pesquisa/publicacoes/PublicacoesBanner'
import PublicacoesLista from '@/components/pesquisa/publicacoes/PublicacoesLista'
import { publicacoesDemonstracao } from '@/components/pesquisa/publicacoes/dados'

const poppinsPublicacoes = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Publicações | Computação UFMA',
  description: 'Trabalhos científicos, artigos, pesquisas e produções desenvolvidas pela Computação UFMA.',
}

export default function Publicacoes() {
  return (
    <main className={`publicacoes-pagina ${poppinsPublicacoes.className}`}>
      <PublicacoesBanner />
      <PublicacoesLista publicacoes={publicacoesDemonstracao} />
    </main>
  )
}
