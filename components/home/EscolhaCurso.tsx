import CardAbi from '@/components/home/CardABI'
import CardCurso from '@/components/home/CardCurso'
import CardLicenciatura from '@/components/home/CardLicenciatura'

export default function EscolhaCurso() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 h-1 w-16 rounded-full bg-verde-claro" />
          <h2 className="text-5xl font-semibold text-texto-escuro">Escolha seu curso</h2>
          <p className="mt-1 text-sm text-verde-claro">
            Entre pela ABI e siga para Ciência da Computação ou Inteligência Artificial
          </p>
        </div>
        <p className="text-sm font-medium uppercase text-verde-claro">Presencial - São Luís</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-8 md:gap-0">
        <div className="md:col-span-3">
          <CardAbi />
        </div>

        <svg
          className="hidden h-full w-full md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 50 H40"
            className="stroke-verde-claro"
            strokeWidth={3}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M40 50 L100 22 M40 50 L100 78"
            className="stroke-texto-escuro/70"
            strokeWidth={3}
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="flex flex-col gap-6 md:col-span-4">
          <CardCurso
            nome="Ciência da Computação"
            descricao="Formação ampla em computação: teoria, sistemas e software."
            href="/cursos/cc"
          />

          <CardCurso
            nome="Inteligência Artificial"
            descricao="Aprendizado de máquina, dados e sistemas inteligentes."
            href="/cursos/ia"
          />
        </div>
      </div>
      <p className="mt-12 text-center text-sm font-medium uppercase text-verde-claro">
        A distância - ingresso próprio
      </p>

      <div className="mt-3">
        <CardLicenciatura />
      </div>
    </section>
  )
}