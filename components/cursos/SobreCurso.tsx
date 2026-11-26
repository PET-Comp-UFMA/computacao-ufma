interface SobreCursoProps {
  paragrafos: string[]
}

function SobreCurso({ paragrafos }: SobreCursoProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-texto-escuro">Sobre o curso</h2>

      <div className="mt-2 space-y-2 text-sm text-texto-escuro">
        {paragrafos.map((texto) => (
          <p key={texto}>{texto}</p>
        ))}
      </div>
    </section>
  )
}

export default SobreCurso