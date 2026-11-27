'use client';
import { useState } from "react";
import { useEffect } from 'react';
import Image from 'next/image';

interface Docente {
    nome: string;
    imagem: string;
    coordenacao: string;
    atividade: string;
    linkedin: string;
    lattes: string;
    email: string;
    descricao?: string;
    formacao?: string;
    areasInteresse?: string[];
}

interface ModalPerfilProps {
    docente: Docente;
    onFechar: () => void;
}

export function ModalPerfil({docente, onFechar}: ModalPerfilProps){
    useEffect(() => {
        const anterior = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = anterior;
        };
    }, []);
    return(
        <div className ="fixed inset-0 z-50 flex items-center justify-center bg-black/60" >
            <div className = "relative flex max-h-[90vh] w-full max-w-301.75 overflow-y-auto rounded-3xl bg-azul-escuro">
                <button onClick = {onFechar} className= "absolute top-8.5 flex left-10 h-11 w-12.5 items-center justify-center rounded-2xl bg-verde-claro">
                    <Image
                        src="/icons/seta.svg"
                        alt="Fechar perfil"
                        width={20}
                        height={20}
                        className="-scale-x-100"/>
                </button>
                <section className = "w-62.5 shrink-0 p-10 pt-28">
                    <div className = "relative aspect-3/4 w-full overflow-hidden rounded-2xl">
                        <img
                            src={docente.imagem}
                            alt={`Foto de ${docente.nome}`}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className = "mt-4 flex flex-row gap-2.5 w-28 p-1">
                        <a href={docente.linkedin} target="_blank" rel="noopener noreferrer">
                            <img  src="/icons/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href={docente.lattes} target="_blank" rel="noopener noreferrer">
                            <img  src="/icons/lattes.png" alt="Lattes" />
                        </a>
                        <a href={`mailto:${docente.email}`}>
                            <img src="/icons/gmail.png" alt="E-mail" />
                        </a>
                    </div>
                </section>
                <section className = "w-239.25 shrink-0 p-10 pt-28">
                    <section className = "border-b border-verde-claro py-4">
                        <h2 className="font-roboto text-3xl font-medium text-white">{docente.nome}</h2>
                        <p className ="font-roboto text-lg text-verde-claro">{docente.coordenacao} • {docente.atividade}</p>
                    </section>
                    <section className = "border-b border-verde-claro pt-8 pb-10">
                        <h3 className="font-roboto text-3xl font-medium text-white">Descrição Pessoal</h3>
                        <p className ="mt-3 font-roboto text-lg text-white">{docente.descricao}</p>
                    </section>
                    <section className = "border-b border-verde-claro pt-8 pb-10">
                        <h3 className="font-roboto text-3xl font-medium text-white">Formação</h3>
                        <p className ="mt-3 font-roboto text-lg text-white">{docente.formacao}</p>
                    </section>
                    <section className="border-b border-verde-claro pt-8 pb-10">
                        <h3 className="font-roboto text-3xl font-medium text-white">Áreas de Interesse</h3>
                        <ul className="mt-3 flex flex-wrap gap-3">
                            {docente.areasInteresse?.map((area) => (
                                <li key={area} className="rounded-full border border-verde-claro px-4 py-1 font-roboto text-sm text-verde-claro bg-verde-forte">
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </div>
        </div>
        
    );
}