'use client'

import { useRef, useState } from 'react'
import type { FiltrosPublicacoes, OpcaoFiltro } from './dados'

type Props = {
  opcoes: {
    tipos: OpcaoFiltro[]
    cursos: OpcaoFiltro[]
    areas: OpcaoFiltro[]
  }
  filtros: FiltrosPublicacoes
  onChange: (filtros: FiltrosPublicacoes) => void
  onApply: () => void
}

export default function PublicacoesFiltros({ opcoes, filtros, onChange, onApply }: Props) {
  const buscaRef = useRef<HTMLInputElement>(null)
  const deRef = useRef<HTMLInputElement>(null)
  const [erro, setErro] = useState('')

  function alternar(grupo: 'tipos' | 'cursos' | 'areas', valor: string) {
    const selecionados = filtros[grupo]
    onChange({ ...filtros, [grupo]: selecionados.includes(valor) ? selecionados.filter(item => item !== valor) : [...selecionados, valor] })
  }

  const grupos = [
    { chave: 'tipos' as const, titulo: 'Tipo de publicação', opcoes: opcoes.tipos },
    { chave: 'cursos' as const, titulo: 'Curso', opcoes: opcoes.cursos },
    { chave: 'areas' as const, titulo: 'Área temática', opcoes: opcoes.areas },
  ]

  return (
    <aside className="min-h-[601px] bg-texto-claro pt-[17px] pr-[13px] pb-3.5 pl-[9px] max-[760px]:min-h-0 max-[760px]:p-4" aria-labelledby="filtros-titulo">
      <h2 className="text-2xl leading-9 font-semibold" id="filtros-titulo">Filtros</h2>
      <div className="mt-1 mb-2.5 border-t border-texto-escuro/40" aria-hidden="true" />
      <form noValidate onSubmit={event => {
        event.preventDefault()
        const anos = [filtros.de, filtros.ate].filter(Boolean)
        if (anos.some(ano => !/^\d{4}$/.test(ano)) || (filtros.de && filtros.ate && Number(filtros.de) > Number(filtros.ate))) {
          setErro('Informe anos com quatro dígitos e um ano final maior ou igual ao inicial.')
          deRef.current?.focus()
          return
        }
        setErro('')
        onApply()
      }}>
        <label htmlFor="palavra-chave" className="block text-sm leading-[21px] font-semibold text-texto-escuro">Buscar por palavra-chave</label>
        <div className="relative mt-1.5 mb-3">
          <input className="h-7 w-full border border-texto-escuro/40 px-[5px] pr-7 text-sm placeholder:text-texto-escuro/45 max-[760px]:text-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro [&::-webkit-search-cancel-button]:hidden" ref={buscaRef} id="palavra-chave" type="search" value={filtros.palavra} placeholder="Digite um título, autor ou palavra-chave..." onChange={event => onChange({ ...filtros, palavra: event.target.value })} />
          {filtros.palavra && <button type="button" className="absolute right-[3px] top-0 h-7 w-[25px] text-xl text-texto-escuro cursor-pointer disabled:cursor-not-allowed enabled:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro" aria-label="Limpar palavra-chave" onClick={() => { onChange({ ...filtros, palavra: '' }); buscaRef.current?.focus() }}>×</button>}
        </div>
        {grupos.map(grupo => (
          <details key={grupo.chave} open className="group mt-[17px] [&+details]:mt-2">
            <summary className="flex cursor-pointer items-center justify-between list-none text-sm leading-[21px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro [&::-webkit-details-marker]:hidden">{grupo.titulo}<span className="rotate-180 group-open:rotate-0" aria-hidden="true">⌃</span></summary>
            <fieldset className="mt-[9px]">
              <legend className="sr-only">{grupo.titulo}</legend>
              {grupo.opcoes.map(opcao => (
                <label className="flex cursor-pointer items-center gap-[7px] text-xs leading-4 max-[760px]:min-h-6" key={opcao.valor}>
                  <input className="h-2.5 w-[11px] shrink-0 appearance-none border border-texto-escuro/40 accent-verde-claro checked:appearance-auto max-[760px]:size-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro" type="checkbox" checked={filtros[grupo.chave].includes(opcao.valor)} onChange={() => alternar(grupo.chave, opcao.valor)} />
                  <span>{opcao.nome} ({opcao.quantidade})</span>
                </label>
              ))}
            </fieldset>
          </details>
        ))}
        <fieldset className="mt-[15px]">
          <legend className="block text-sm leading-[21px] font-semibold text-texto-escuro">Ano de publicação</legend>
          <div className="mt-1.5 flex gap-[45px]">
            <label className="text-xs leading-[18px]" htmlFor="ano-de">De<input className="mt-[5px] block h-6 w-[95px] border border-texto-escuro/40 px-[5px] text-xs placeholder:text-texto-escuro/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro" ref={deRef} id="ano-de" inputMode="numeric" maxLength={4} value={filtros.de} placeholder="2020..." aria-invalid={!!erro} aria-describedby={erro ? 'erro-anos' : undefined} onChange={event => { setErro(''); onChange({ ...filtros, de: event.target.value }) }} /></label>
            <label className="text-xs leading-[18px]" htmlFor="ano-ate">Até<input className="mt-[5px] block h-6 w-[95px] border border-texto-escuro/40 px-[5px] text-xs placeholder:text-texto-escuro/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro" id="ano-ate" inputMode="numeric" maxLength={4} value={filtros.ate} placeholder="2022..." aria-invalid={!!erro} aria-describedby={erro ? 'erro-anos' : undefined} onChange={event => { setErro(''); onChange({ ...filtros, ate: event.target.value }) }} /></label>
          </div>
          {erro && <p id="erro-anos" role="alert" className="mt-2.5 text-xs leading-[18px] font-medium">{erro}</p>}
        </fieldset>
        <button type="submit" className="mt-7 ml-px flex min-h-8 w-full items-center justify-center rounded-[5px] bg-verde-claro px-3 py-1.5 text-xs leading-5 font-semibold text-texto-escuro max-[760px]:min-h-10 cursor-pointer disabled:cursor-not-allowed enabled:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azul-escuro">Aplicar Filtros</button>
      </form>
    </aside>
  )
}
