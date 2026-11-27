import { CorCurso } from "./EstruturaCurricular";

type DuvidaProps = {
    id?: number;
    question?: string;
    answer?: string;
    cor: CorCurso;
}

const coresSeta: Record<CorCurso, string> = {
    cc: 'text-cc',
    ia: 'text-ia',
    licenciatura: 'text-licenciatura',
}

const duvidas = [
    {
        id: 1,
        question: 'Preciso saber programar para entrar na faculdade?',
        answer: 'Não. As disciplinas introdutórias começam do zero, ensinando lógica de programação antes de avançar para linguagens específicas.',
    },
    {
        id: 2,
        question: 'Qual é a diferença entre Ciência da Computação e Engenharia de Software?',
        answer: 'Ciência da Computação foca mais nos fundamentos teóricos, algoritmos e matemática, enquanto Engenharia de Software foca no ciclo de desenvolvimento, arquitetura e gestão de sistemas.',
    },
    {
        id: 3,
        question: 'A própria inteligência artificial não vai substituir quem trabalha com IA?',
        answer: 'A IA atua como ferramenta de produtividade. Profissionais continuam essenciais para projetar, treinar, auditar e integrar esses modelos aos problemas reais.',
    },
    {
        id: 4,
        question: 'O curso tem muita matemática? Para que vou usar tudo isso?',
        answer: 'Sim, especialmente cálculo, álgebra linear e estatística. Elas são a base para entender como algoritmos funcionam, otimizar sistemas e treinar modelos de dados.',
    }
];

export default function DuvidasFrequentes({
    cor,
}: DuvidaProps) {
    return (
        <div className="Duvidas flex flex-col gap-8 max-w-180">
            <h2 className='text-2xl font-semibold'>Dúvidas frequentes</h2>

            <div className='flex flex-col gap-8 w-full'>
                {duvidas.map((item) => {
                    return (
                        <DuvidaCard key={item.id} question={item.question} answer={item.answer} cor={cor} />
                    );
                })}
            </div>

        </div>
    );
}

function DuvidaCard({
    id,
    question,
    answer,
    cor,
}: DuvidaProps) {
    return (
        <details key={id} className='group bg-[#E8EEF4] rounded-xl px-5 py-3.5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden'>
            <summary className='flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-azul-escuro'>
                <p>&quot;{question}&quot;</p>
                <SetaSvg cor={cor} />
            </summary>

            <div className='px-5 pb-4 pt-1 text-gray-700 leading-relaxed'>
                {answer}
            </div>
        </details>
    );
}

function SetaSvg({
    cor,
}: DuvidaProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://w3.org"
            role="img"
            aria-label="Ícone seta direita"
            className={`shrink-0 transition-transform duration-200 group-open:rotate-90 ${coresSeta[cor]}`}
        >
            <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
            />
        </svg>
        // <Image width={25} height={25} src="/icons/si_chevron-right-alt-duotone.svg" alt="Ícone seta diretna" className='shrink-0 transition-transform duration-200 group-open:rotate-90' />
    );
}