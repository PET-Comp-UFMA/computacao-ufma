
type CaminhoCardProps = {
    borda?: boolean,
    etapa?: string,
    title?: string,
    subtitle?: string,
}

type SetaProps = {
    width?: number,
    height?: number,
}

export default function Caminhos() {
    return (
        <div className="">
            <h2 className='flex text-2xl font-semibold'>Como funciona o seu caminho</h2>

            <div className='mt-2 flex items-center justify-between'>

                <CaminhoCard borda={false} etapa="Etapa 1" title="Ingresso na ABI" subtitle="Via SISU" />

                <Seta />

                <CaminhoCard borda={false} etapa="Etapa 2" title="Núcleo Comum" subtitle="3 períodos de duração" />

                <Seta />

                <CaminhoCard borda={true} etapa="Etapa 3" title="Escolha do Curso" subtitle="[Critério de escolha]" />
                {/* <div className='bg-white rounded-2xl border-2 border-abi w-60 h-40 py-1.5 px-3'>
                    <p className='text-abi'>Etapa 3</p>
                    <p className='font-semibold text-xl'>Escolha do Curso</p>
                    <p>[Critério de escolha]</p>
                </div> */}

                <Seta />

                <OpcoesCurso />
            </div>
        </div>
    );
}

export function CaminhoCard({
    borda,
    etapa,
    title,
    subtitle,
}: CaminhoCardProps) {
    return (
        <div className={`bg-white rounded-2xl ${borda && "border-abi border-2"} w-60 h-40 py-1.5 px-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}>
            <p className='text-abi'>{etapa}</p>
            <p className='font-semibold text-xl'>{title}</p>
            <p>{subtitle}</p>
        </div>
    );
}

export function OpcoesCurso() {
    return (
        <div className='w-72 flex flex-col gap-2.5'>
            <div className=' bg-white rounded-2xl h-14 border-2 border-cc flex flex-col'>
                <div className='w-full h-3 bg-cc rounded-t-2xl'></div>
                <div className='flex justify-between items-center px-3 h-full'>
                    <p>Ciência da Computação</p>
                    <Seta width={15} height={14} />
                </div>
            </div>

            <div className='bg-white rounded-2xl h-14 border-2 border-ia flex flex-col'>
                <div className='w-full h-3 bg-ia rounded-t-2xl'></div>
                <div className='flex justify-between items-center px-3 h-full'>
                    <p>Inteligência Artificial</p>
                    <Seta width={15} height={14} />
                </div>
            </div>

        </div>
    );
}

function Seta({
    width = 24,
    height = 23,
}: SetaProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13.7438 0.75L19.9417 6.91875C21.8958 8.87292 22.8583 9.83542 22.8583 11.0458C22.8583 12.2563 21.8958 13.2333 19.9417 15.1729L13.7583 21.3708M0.75 11.0604H22.1875" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="black" />
        </svg>
    );
}