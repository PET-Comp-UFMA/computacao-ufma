'use client'

import Image from 'next/image'
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
    <>
      <div className={'publicacoes-barra'}>
        <div className={'publicacoes-buscaPrincipal'} role="search">
          <Image src="/images/publicacoes/busca.svg" alt="" width={300} height={28} aria-hidden="true" />
          <label htmlFor="buscar-publicacoes" className="sr-only">Buscar publicações</label>
          <input ref={buscaRef} id="buscar-publicacoes" type="search" value={busca} onChange={event => setBusca(event.target.value)} />
          {busca && <button type="button" className={'publicacoes-limparBusca'} aria-label="Limpar busca" onClick={() => { setBusca(''); buscaRef.current?.focus() }}>×</button>}
        </div>
        <div className={'publicacoes-cursos'} role="group" aria-label="Filtrar por curso">
          {cursosPrincipais.map(item => (
            <button key={item.valor} type="button" className={'publicacoes-curso'} aria-pressed={curso === item.valor} onClick={() => setCurso(item.valor)}>{item.nome}</button>
          ))}
        </div>
      </div>
      <div className={'publicacoes-conteudo'}>
        <PublicacoesFiltros opcoes={opcoesFiltros} filtros={rascunho} onChange={setRascunho} onApply={() => setAplicados(rascunho)} />
        <section className={'publicacoes-resultados'} aria-label="Lista de publicações">
          <div className={'publicacoes-resultadosCabecalho'}>
            <p role="status"><strong>{resultados.length}</strong> {resultados.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}</p>
          </div>
          <div className={'publicacoes-lista'}>
            {resultados.map(item => <PublicacaoCard key={item.id} publicacao={item} />)}
            {!resultados.length && <div className={'publicacoes-vazio'}><h2>Nenhuma publicação encontrada</h2><p>Tente outra palavra-chave ou remova os filtros.</p><button type="button" className={'publicacoes-aplicar'} onClick={limparFiltros}>Limpar filtros</button></div>}
          </div>
        </section>
      </div>
    </>
  )
}
