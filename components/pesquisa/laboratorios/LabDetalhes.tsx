import Image from 'next/image'
import Link from 'next/link'
import CarrosselFotos from '@/components/pesquisa/laboratorios/CarrosselFotos'
import type { Laboratorio, Membro } from '@/components/pesquisa/laboratorios/dados'

type LabDetalhesProps = {
  laboratorio: Laboratorio
}

// Conteúdo do modal "Saiba mais". Cada seção só aparece se o
// laboratório tiver dados para ela no dados.ts.
export default function LabDetalhes({ laboratorio }: LabDetalhesProps) {
  const {
    id, nome, descricao, subtitulo, logo, larguraLogo, alturaLogo, cor, local, linkMapa,
    sobre, fotos, projetos, coordenacao, posGraduacao, graduacao, contato,
  } = laboratorio

  // Boolean() evita que um "0" (lista vazia) apareça escrito na tela.
  const temEquipe = Boolean(coordenacao?.length || posGraduacao?.length || graduacao?.length)

  return (
    <div className="space-y-12">
      {/* Topo: logo, nome, subtítulo e local */}
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
        <div className="flex size-40 shrink-0 items-center justify-center rounded-3xl bg-texto-claro p-6 md:size-48">
          <Image
            src={logo}
            alt={`Logo do ${nome}`}
            width={larguraLogo}
            height={alturaLogo}
            className="max-h-full w-auto object-contain"
          />
        </div>

        <div>
          <h2 id={`modal-${id}`} className="text-4xl font-bold md:text-5xl">
            {nome}
          </h2>
          {/* Sem subtítulo próprio, usa a descrição curta do card. */}
          <p className="mt-3 text-lg font-semibold">{subtitulo ?? descricao}</p>
          {local && (
            <a
              href={linkMapa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-texto-claro px-4 py-1.5 text-sm font-semibold hover:text-verde-claro"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              {local} · ver no mapa
            </a>
          )}
        </div>
      </header>

      {sobre && <p className="leading-relaxed">{sobre}</p>}

      {fotos && fotos.length > 0 && <CarrosselFotos fotos={fotos} cor={cor} />}

      {projetos && projetos.length > 0 && (
        <section>
          <div className="flex items-baseline gap-3">
            <h3 className="text-2xl font-bold md:text-3xl">Projetos em andamento</h3>
            <span className="text-sm text-texto-escuro/60">
              {projetos.length} {projetos.length === 1 ? 'projeto' : 'projetos'}
            </span>
          </div>

          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {projetos.map((projeto, indice) => (
              <li
                key={`${projeto.nome}-${indice}`}
                className="flex flex-col rounded-2xl border-2 border-divisoria bg-texto-claro/40 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold">{projeto.nome}</h4>
                  <span className="shrink-0 text-xs text-texto-escuro/60">Desde {projeto.desde}</span>
                </div>
                <p className="mt-2 text-sm text-texto-escuro/80">{projeto.descricao}</p>
                <span className="mt-4 self-start rounded-md border border-texto-escuro/30 px-3 py-0.5 text-xs">
                  {projeto.responsavel}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {temEquipe && (
        <section className="space-y-8">
          <h3 className="text-2xl font-bold md:text-3xl">Equipe atual</h3>

          {coordenacao && coordenacao.length > 0 && (
            <div>
              <Rotulo>Coordenação</Rotulo>
              <ul className="grid gap-5 md:grid-cols-2">
                {coordenacao.map((pessoa) => (
                  <li key={pessoa.nome} className="flex items-center gap-5 rounded-2xl bg-texto-claro p-4">
                    <Avatar nome={pessoa.nome} foto={pessoa.foto} tamanho="grande" />
                    <div>
                      <p className="font-bold">{pessoa.nome}</p>
                      <p className="text-sm text-texto-escuro/60">Coordenador</p>
                      {(pessoa.email || pessoa.lattes) && (
                        <div className="mt-2 flex gap-4 text-sm font-semibold text-verde-claro underline">
                          {pessoa.email && <a href={`mailto:${pessoa.email}`}>E-mail</a>}
                          {pessoa.lattes && (
                            <a href={pessoa.lattes} target="_blank" rel="noopener noreferrer">
                              Lattes
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {posGraduacao && posGraduacao.length > 0 && (
            <div>
              <Rotulo>Pós-graduação</Rotulo>
              <ListaMembros membros={posGraduacao} />
            </div>
          )}

          {graduacao && graduacao.length > 0 && (
            <div>
              <Rotulo>Graduação</Rotulo>
              <ListaMembros membros={graduacao} />
            </div>
          )}
        </section>
      )}

      {/* Chamada para contato */}
      <div className="flex flex-col gap-4 rounded-2xl bg-azul-escuro px-8 py-6 text-texto-claro sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xl font-bold">Quer fazer parte do {nome}?</p>
        <Link
          href={contato ?? '/sobre/contato'}
          className="self-start rounded-lg bg-verde-claro px-6 py-2 font-semibold hover:opacity-90 sm:self-auto"
        >
          Entrar em contato
        </Link>
      </div>
    </div>
  )
}

function Rotulo({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-semibold tracking-wide text-texto-escuro/60 uppercase">
      {children}
    </p>
  )
}

function ListaMembros({ membros }: { membros: Membro[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {membros.map((membro, indice) => (
        <li key={`${membro.nome}-${indice}`} className="flex items-center gap-3">
          <Avatar nome={membro.nome} foto={membro.foto} tamanho="pequeno" />
          <div>
            <p className="font-bold">{membro.nome}</p>
            <p className="text-xs text-texto-escuro/60">{membro.vinculo}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

// Foto redonda da pessoa. Sem foto, mostra um círculo cinza, como no Figma.
function Avatar({ nome, foto, tamanho }: { nome: string; foto?: string; tamanho: 'grande' | 'pequeno' }) {
  const classes = tamanho === 'grande' ? 'size-20' : 'size-12'

  if (!foto) {
    return <div className={`${classes} shrink-0 rounded-full bg-divisoria`} aria-hidden="true" />
  }

  return (
    <Image
      src={foto}
      alt={`Foto de ${nome}`}
      width={80}
      height={80}
      className={`${classes} shrink-0 rounded-full object-cover`}
    />
  )
}
