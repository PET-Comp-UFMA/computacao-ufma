export default function ContatoLocalizacao() {
    return (

        <div className="flex flex-col">
            <div className="mb-3 h-1 w-16 rounded-full bg-verde-claro" />

            <div className="flex flex-1 flex-col gap-4">

                <section className="flex flex-1 flex-col rounded-lg bg-white p-6 text-texto-escuro">
                    <h2 className="mb-4 text-2xl font-bold">
                        Nosso endereço
                    </h2>

                    <address className="not-italic text-sm leading-relaxed">
                        Centro de Ciências Exatas e Tecnologia (CCET)<br/>
                        Universidade Federal do Maranhão — UFMA<br/>
                        Av. dos Portugueses, nº 1966 — Bacanga<br/>
                        São Luís – MA | CEP: 65080-805
                    </address>
                </section>

                <section className="rounded-lg bg-white p-6 text-texto-escuro">
                    <h2 className="mb-4 text-2xl font-bold">
                        Mapa
                    </h2>
                    <iframe className="min-h-56 w-full flex-1 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.841238578728!2d-44.3081181!3d-2.5584645999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68f5cedc548dd%3A0x780f0a32464f4178!2sCCET%20-%20Centro%20de%20Ci%C3%AAncias%20Exatas%20e%20Tecnol%C3%B3gicas!5e0!3m2!1spt-BR!2sbr!4v1795737927246!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                </section>

            </div>
        </div>
    )
}

