import { contatos } from '@/components/sobre/Contatos'







export default function ContatoSetores() {
    return (
        <div className='flex flex-col'>
            <div className='mb-3 h-1 w-16 rounded-full bg-verde-claro' />

            <section className= "flex-1 rounded-lg bg-white p-6 text-texto-escuro">

                <h2 className="mb-4 text-2xl font-bold">
                    Contato
                </h2>
                <div className="flex flex-col gap-5">
                    {contatos.map((contato) => (
                        <div key={contato.id}>
                            <h3 className="text-lg font-semibold">{contato.titulo}</h3>
                            <p>E-mail: {contato.email}</p>
                            <p>Atendimento: {contato.atendimento}</p>
                        </div>

                    ))}
                </div>

            </section>
        </div>
    )
}
