'use client'

import { useRef, useState } from 'react'
import { criarOpcoesFiltros, filtrosIniciais, type Publicacao } from './dados'
import PublicacaoCard from './PublicacaoCard'
import PublicacoesFiltros from './PublicacoesFiltros'

const normalizar = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR')

const cursosPrincipais = [
  { valor: '', nome: 'Todos' },
  { valor: 'abi', nome: 'ABI' },
  { valor: 'cc', nome: 'Ciências da Computação' },
  { valor: 'ia', nome: 'Inteligência Artificial' },
]

export default function PublicacoesLista({ publicacoes }: { publicacoes: Publicacao[] }) {
  const [busca, setBusca] = useState('')
  const [curso, setCurso] = useState('')
  const [rascunho, setRascunho] = useState(filtrosIniciais)
  const [aplicados, setAplicados] = useState(filtrosIniciais)
  const buscaRef = useRef<HTMLInputElement>(null)
  const opcoesFiltros = criarOpcoesFiltros(publicacoes)
  const resultados = publicacoes.filter(item => {
    const texto = normalizar([item.titulo, ...item.autores, item.resumo, ...item.temas].join(' '))
    return [busca, aplicados.palavra].every(termo => texto.includes(normalizar(termo.trim())))
      && (!curso || item.curso === curso)
      && (!aplicados.cursos.length || aplicados.cursos.includes(item.curso))
      && (!aplicados.tipos.length || aplicados.tipos.includes(item.tipo))
      && (!aplicados.areas.length || item.temas.some(tema => aplicados.areas.includes(tema)))
      && (!aplicados.de || item.ano >= Number(aplicados.de))
      && (!aplicados.ate || item.ano <= Number(aplicados.ate))
  })

  function limparFiltros() {
    setBusca('')
    setCurso('')
    setRascunho(filtrosIniciais)
    setAplicados(filtrosIniciais)
    buscaRef.current?.focus()
  }

  return (
    <div className="font-light">
      <div className="flex min-h-[50px] items-center justify-center gap-[19px] px-5 py-[11px] shadow-md max-[1250px]:flex-wrap max-[760px]:gap-4 max-[760px]:py-4">
        <div className="relative h-7 w-[300px] flex-[0_1_300px] rounded-[5px] bg-texto-claro" role="search">
          <svg className="pointer-events-none absolute left-2 top-1.5 size-4 text-texto-escuro/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></svg>
          <label htmlFor="buscar-publicacoes" className="sr-only">Buscar publicações</label>
          <input className="relative h-7 w-full rounded-[5px] bg-transparent px-7 text-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro [&::-webkit-search-cancel-button]:hidden" ref={buscaRef} id="buscar-publicacoes" type="search" value={busca} onChange={event => setBusca(event.target.value)} />
          {busca && <button type="button" className="absolute right-[3px] top-0 h-7 w-[25px] text-xl text-texto-escuro cursor-pointer disabled:cursor-not-allowed enabled:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro" aria-label="Limpar busca" onClick={() => { setBusca(''); buscaRef.current?.focus() }}>×</button>}
        </div>
        <div className="flex flex-wrap items-center gap-[19px] max-[760px]:justify-center max-[760px]:gap-2.5" role="group" aria-label="Filtrar por curso">
          {cursosPrincipais.map(item => (
            <button key={item.valor} type="button" className="shrink-0 rounded-[5px] bg-verde-claro/50 px-[25px] py-1.5 text-xs leading-3 font-normal text-texto-escuro aria-pressed:min-h-7 aria-pressed:bg-verde-claro aria-pressed:font-medium max-[760px]:min-h-8 max-[760px]:px-4 cursor-pointer disabled:cursor-not-allowed enabled:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro" aria-pressed={curso === item.valor} onClick={() => setCurso(item.valor)}>{item.nome}</button>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] grid-cols-[325px_minmax(0,1fr)] items-start gap-[57px] pt-[49px] pr-11 pb-16 pl-[69px] max-[1250px]:grid-cols-[290px_minmax(0,1fr)] max-[1250px]:gap-8 max-[1250px]:px-8 max-[760px]:grid-cols-1 max-[760px]:px-5 max-[760px]:pt-8 max-[760px]:pb-12">
        <PublicacoesFiltros opcoes={opcoesFiltros} filtros={rascunho} onChange={setRascunho} onApply={() => setAplicados(rascunho)} />
        <section className="min-w-0" aria-label="Lista de publicações">
          <div className="flex text-xs leading-[18px]">
            <p role="status"><strong className="font-semibold">{resultados.length}</strong> {resultados.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}</p>
          </div>
          <div className="mt-[59px] max-[760px]:mt-7">
            {resultados.map(item => <PublicacaoCard key={item.id} publicacao={item} />)}
            {!resultados.length && <div className="py-[30px]"><h2 className="text-xl font-semibold">Nenhuma publicação encontrada</h2><p className="mt-3">Tente outra palavra-chave ou remova os filtros.</p><button type="button" className="mt-7 ml-px flex min-h-8 w-auto items-center justify-center rounded-[5px] bg-verde-claro px-3 py-1.5 text-xs leading-5 font-semibold text-texto-escuro max-[760px]:min-h-10 cursor-pointer disabled:cursor-not-allowed enabled:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro" onClick={limparFiltros}>Limpar filtros</button></div>}
          </div>
        </section>
      </div>
    </div>
  )
}
