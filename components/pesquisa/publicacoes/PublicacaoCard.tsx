import Image from 'next/image'
import type { Publicacao } from './dados'

export default function PublicacaoCard({ publicacao }: { publicacao: Publicacao }) {
  const descricaoIndisponivel = `${publicacao.id}-indisponivel`
  return (
    <article className={'publicacoes-publicacao'} aria-labelledby={`${publicacao.id}-titulo`}>
      <div className={'publicacoes-publicacaoTexto'}>
        <h2 id={`${publicacao.id}-titulo`}>{publicacao.titulo}</h2>
        <p className={'publicacoes-autores'}>{publicacao.autores.join(', ')}</p>
        <p className={'publicacoes-resumo'}>{publicacao.resumo}</p>
      </div>
      <div className={'publicacoes-acoes'}>
        {publicacao.artigoUrl ? (
          <a href={publicacao.artigoUrl} className={'publicacoes-acao'} aria-label={`Ver mais: ${publicacao.titulo}`}>
            Ver mais <Image src="/images/publicacoes/seta-escura.svg" alt="" width={16} height={15} />
          </a>
        ) : (
          <button type="button" className={'publicacoes-acao'} disabled aria-describedby={descricaoIndisponivel} title="Link do artigo ainda não disponível">
            Ver mais <Image src="/images/publicacoes/seta-escura.svg" alt="" width={16} height={15} />
          </button>
        )}
        {publicacao.pdfUrl ? (
          <a href={publicacao.pdfUrl} className={'publicacoes-acao'} download aria-label={`Baixar PDF: ${publicacao.titulo}`}>Baixar PDF</a>
        ) : (
          <button type="button" className={'publicacoes-acao'} disabled aria-describedby={descricaoIndisponivel} title="PDF ainda não disponível">Baixar PDF</button>
        )}
        <span id={descricaoIndisponivel} className="sr-only">Os links e arquivos desta publicação ainda não estão disponíveis.</span>
      </div>
      <ul className={'publicacoes-metadados'} aria-label="Informações da publicação">
        <li>{publicacao.ano}</li>
        <li>{publicacao.instituicao}</li>
        <li>{publicacao.temas.join(', ')}</li>
      </ul>
    </article>
  )
}
