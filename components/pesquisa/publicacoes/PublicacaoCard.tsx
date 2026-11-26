import type { Publicacao } from './dados'

const estiloAcao = 'relative flex min-h-[33px] w-[155px] items-center justify-center rounded-[5px] bg-verde-claro text-base leading-6 font-semibold text-texto-escuro disabled:opacity-100 max-[760px]:min-h-10 max-[760px]:w-[148px] cursor-pointer disabled:cursor-not-allowed enabled:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro'

export default function PublicacaoCard({ publicacao }: { publicacao: Publicacao }) {
  const descricaoIndisponivel = `${publicacao.id}-indisponivel`
  return (
    <article className="relative grid grid-cols-[minmax(0,1fr)_155px] gap-x-2 pr-[3px] pb-5 [&+article]:border-t [&+article]:border-texto-escuro/25 [&+article]:pt-7 max-[1250px]:grid-cols-1" aria-labelledby={`${publicacao.id}-titulo`}>
      <div className="min-w-0">
        <h2 className="text-xl leading-[30px] font-semibold wrap-anywhere whitespace-pre-line max-[760px]:text-lg max-[760px]:leading-[27px] max-[760px]:whitespace-normal" id={`${publicacao.id}-titulo`}>{publicacao.titulo}</h2>
        <p className="mt-1.5 text-base leading-6 wrap-anywhere max-[760px]:text-sm max-[760px]:leading-[22px]">{publicacao.autores.join(', ')}</p>
        <p className="mt-1.5 text-base leading-6 whitespace-pre-line max-[760px]:text-sm max-[760px]:leading-[22px] max-[760px]:whitespace-normal">{publicacao.resumo}</p>
      </div>
      <div className="flex flex-col gap-3 self-start max-[1250px]:row-start-3 max-[1250px]:mt-4 max-[1250px]:flex-row max-[1250px]:flex-wrap">
        {publicacao.artigoUrl ? (
          <a href={publicacao.artigoUrl} className={estiloAcao} aria-label={`Ver mais: ${publicacao.titulo}`}>
            Ver mais <svg className="absolute right-3 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M3 12h18m-7-7 7 7-7 7" /></svg>
          </a>
        ) : (
          <button type="button" className={estiloAcao} disabled aria-describedby={descricaoIndisponivel} title="Link do artigo ainda não disponível">
            Ver mais <svg className="absolute right-3 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M3 12h18m-7-7 7 7-7 7" /></svg>
          </button>
        )}
        {publicacao.pdfUrl ? (
          <a href={publicacao.pdfUrl} className={estiloAcao} download aria-label={`Baixar PDF: ${publicacao.titulo}`}>Baixar PDF</a>
        ) : (
          <button type="button" className={estiloAcao} disabled aria-describedby={descricaoIndisponivel} title="PDF ainda não disponível">Baixar PDF</button>
        )}
        <span id={descricaoIndisponivel} className="sr-only">Os links e arquivos desta publicação ainda não estão disponíveis.</span>
      </div>
      <ul className="col-span-full mt-3 grid grid-cols-[146px_212px_minmax(0,1fr)] text-base leading-6 max-[1250px]:flex max-[1250px]:flex-wrap max-[1250px]:gap-x-6 max-[1250px]:gap-y-2.5 max-[760px]:text-sm max-[760px]:leading-[22px]" aria-label="Informações da publicação">
        <li>{publicacao.ano}</li>
        <li>{publicacao.instituicao}</li>
        <li>{publicacao.temas.join(', ')}</li>
      </ul>
    </article>
  )
}
