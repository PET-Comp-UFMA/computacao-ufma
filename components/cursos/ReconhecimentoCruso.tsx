export type CorCurso = 'cc' | 'ia' | 'licenciatura'

type ReconhecimentoCursoCardProps = {
    title?: string;
    subtitle?: string;
    cor: CorCurso;
}

const bordaPorCurso: Record<CorCurso, string> = {
    cc: 'border-cc',
    ia: 'border-ia',
    licenciatura: 'border-licenciatura',
}

export function ReconhecimentoCard({
    title,
    subtitle,
    cor,
}: ReconhecimentoCursoCardProps) {
    return (
        <div className={`w-80 h-54 rounded-xl border-2 ${bordaPorCurso[cor]} bg-white overflow-hidden flex flex-col`}>

            <div className={`w-full h-3.5 ${bordaPorCurso[cor]} shrink-0`} />

            <div className="flex-1 flex flex-col justify-center px-10">
                <h2 className="text-xl font-bold leading-snug text-texto-escuro">
                    {title}
                </h2>
                <p className="mt-5 font-semibold text-texto-escuro">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

export function ReconhecimentoCurso({
    cor,
}: ReconhecimentoCursoCardProps) {
    return (
        <section>
            <h2 className='font-semibold text-2xl text-texto-escuro'>Reconhecimento do Curso</h2>
            <div className='mt-2 flex justify-between'>
                <ReconhecimentoCard
                    title="Conceito Preliminar de Curso 2024"
                    subtitle="4 - Conceito elevado"
                    cor={cor}
                />
                <ReconhecimentoCard
                    title="ENADE 2021"
                    subtitle="4 - Conceito elevado"
                    cor={cor}
                />
                <ReconhecimentoCard
                    title="Conceito Preliminar de Curso 2024"
                    subtitle="4 - Conceito elevado"
                    cor={cor}
                />
            </div>
        </section>
    )
}