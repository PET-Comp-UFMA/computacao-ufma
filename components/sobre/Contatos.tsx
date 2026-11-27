type Contato = {
    id: string;
    titulo: string;
    email: string;
    atendimento: string;
};

export const contatos: Contato[] = [

    {
        id: 'secretaria',
        titulo: 'Secretária Administrativa – Leidiane Melo',
        email: 'leidiane.melo@ufma.br',
        atendimento: 'CONFIRMAR',
    },
    {
        id: 'computacao',
        titulo: 'Coordenador de Ciência da Computação – Matheus Menezes',
        email: 'cocom.ccet@ufma.br',
        atendimento:'CONFIRMAR',
    },
    {
        id: 'abi',
        titulo: 'Coordenador da ABI – Francisco Glaubos',
        email: 'abic.ccet@ufma.br',
        atendimento:'CONFIRMAR',
    },
    {
        id: 'inteligencia artificial',
        titulo: 'Coordenador de Inteligência Artificial – Tiago Bonini',
        email: 'ccia.ccet@ufma.br',
        atendimento:'CONFIRMAR',
    },
    {
        id: 'licenciatura',
        titulo: 'Coordenador de Licenciatura em Computação – Tiago Bonini',
        email: 'comp.ead@ufma.br',
        atendimento:'CONFIRMAR',
    },
 
];
