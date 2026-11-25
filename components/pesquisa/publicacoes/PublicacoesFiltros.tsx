'use client'

import Image from 'next/image'
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
    <aside className={'publicacoes-filtros'} aria-labelledby="filtros-titulo">
      <h2 id="filtros-titulo">Filtros</h2>
      <Image className={'publicacoes-divisorFiltros'} src="/images/publicacoes/divisor-filtros.svg" alt="" width={303} height={1} />
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
        <label htmlFor="palavra-chave" className={'publicacoes-rotulo'}>Buscar por palavra-chave</label>
        <div className={'publicacoes-buscaLateral'}>
          <input ref={buscaRef} id="palavra-chave" type="search" value={filtros.palavra} placeholder="Digite um título, autor ou palavra-chave..." onChange={event => onChange({ ...filtros, palavra: event.target.value })} />
          {filtros.palavra && <button type="button" className={'publicacoes-limparBusca'} aria-label="Limpar palavra-chave" onClick={() => { onChange({ ...filtros, palavra: '' }); buscaRef.current?.focus() }}>×</button>}
        </div>
        {grupos.map(grupo => (
          <details key={grupo.chave} open className={'publicacoes-grupoFiltro'}>
            <summary>{grupo.titulo}<span aria-hidden="true">⌃</span></summary>
            <fieldset>
              <legend className="sr-only">{grupo.titulo}</legend>
              {grupo.opcoes.map(opcao => (
                <label key={opcao.valor}>
                  <input type="checkbox" checked={filtros[grupo.chave].includes(opcao.valor)} onChange={() => alternar(grupo.chave, opcao.valor)} />
                  <span>{opcao.nome} ({opcao.quantidade})</span>
                </label>
              ))}
            </fieldset>
          </details>
        ))}
        <fieldset className={'publicacoes-anos'}>
          <legend className={'publicacoes-rotulo'}>Ano de publicação</legend>
          <div className="flex gap-[45px]">
            <label htmlFor="ano-de">De<input ref={deRef} id="ano-de" inputMode="numeric" maxLength={4} value={filtros.de} placeholder="2020..." aria-invalid={!!erro} aria-describedby={erro ? 'erro-anos' : undefined} onChange={event => { setErro(''); onChange({ ...filtros, de: event.target.value }) }} /></label>
            <label htmlFor="ano-ate">Até<input id="ano-ate" inputMode="numeric" maxLength={4} value={filtros.ate} placeholder="2022..." aria-invalid={!!erro} aria-describedby={erro ? 'erro-anos' : undefined} onChange={event => { setErro(''); onChange({ ...filtros, ate: event.target.value }) }} /></label>
          </div>
          {erro && <p id="erro-anos" role="alert" className={'publicacoes-erro'}>{erro}</p>}
        </fieldset>
        <button type="submit" className={'publicacoes-aplicar'}>Aplicar Filtros</button>
      </form>
    </aside>
  )
}
