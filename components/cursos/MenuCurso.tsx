export type ItemMenu = 'visao-geral' | 'curriculo' | 'documentos' | 'estagio-tcc'

const itens: { id: ItemMenu; rotulo: string }[] = [
  { id: 'visao-geral', rotulo: 'Visão Geral' },
  { id: 'curriculo', rotulo: 'Currículo' },
  { id: 'documentos', rotulo: 'Documentos' },
  { id: 'estagio-tcc', rotulo: 'Estágio TCC' },
]

interface MenuCursoProps {
  ativo?: ItemMenu
}

function MenuCurso({ ativo = 'visao-geral' }: MenuCursoProps) {
  return (
    <nav
    aria-label="Menu do curso"
    className="flex h-12 items-center gap-6 overflow-x-auto bg-transparente px-4 text-sm shadow-md md:gap-[50px] md:px-[50px]"
    >
      {itens.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-current={item.id === ativo ? 'page' : undefined}
          className={`cursor-pointer whitespace-nowrap text-texto-escuro hover:opacity-70 ${
            item.id === ativo ? 'font-bold' : ''
          }`}
        >
          {item.rotulo}
        </button>
      ))}
    </nav>
  )
}

export default MenuCurso
