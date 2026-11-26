type InfoCursoProps = {
  rotulo: string
  valor: string
}

export default function InfoCurso({ rotulo, valor }: InfoCursoProps) {
  return (
    <div className="rounded-2xl bg-white px-4 py-3 text-texto-escuro">
      <p className="text-sm">{rotulo}</p>
      <p className="text-lg font-semibold md:text-xl">{valor}</p>
    </div>
  )
}
