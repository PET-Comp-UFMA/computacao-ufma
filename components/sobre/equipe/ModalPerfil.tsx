'use client';

import Image from 'next/image';

export function ModalPerfil(){
    return(
        <div className ="fixed inset-0 z-50 flex items-center justify-center bg-black/50" >
            <div className = "relative flex max-h-[90vh] w-full max-w-301.75 overflow-y-auto rounded-xl bg-azul-escuro">
                <button className= "absolute top-8.5 left-10 h-11 w-12.5 items-center justify-center rounded-xl bg-verde-claro">
                    <Image 
                        src="/icons/seta.svg"
                        alt="Fechar perfil"
                        width={20}
                        height={20}
                        className="-scale-x-100"/>
                </button>
                <section className = "w-62.5 shrink-0 p-10 pt-28">
                    <div className = "relative aspect-3/4 w-full overflow-hidden rounded-lg">
                    </div>
                    <div>
                        redes (3sections)?
                    </div>
                </section>
                <section className = "w-239.25 shrink-0 p-10 pt-28">
                    <section>
                        nome professor e funcao
                    </section>
                    <section>

                    </section>
                    <section>

                    </section>
                    <section>
                        
                    </section>
                </section>
            </div>
        </div>
        
    );
}