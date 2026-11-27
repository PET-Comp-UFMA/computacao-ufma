type LinhaTempoItem = {
    ano:number;
    titulo: string;
    conteudo: string
}

//seria um array na verdade, depois penso nisso
function LinhaTempoItem({ ano, titulo, conteudo }:LinhaTempoItem) {
  return (
    <li className="group flex flex-col items-center"> 
          <span id="bolinha"
                aria-hidden="true"
                className="relative z-10 h-4 w-4 rounded-full border-2 bg-white border-verde-claro"></span>
          <div className="flex w-full flex-l flex-col items-center border-divisoria border-r group-first:-r-0">
            <span id="pontilhado"
                  aria-hidden="true"
                  className="h-10 border-l border-dashed border-verde-claro"></span>
            <span id="ano"className="rounded-lg bg-verde-claro px-4 py-1 text-sm font-semibold text-texto-claro">{ano}</span>
            <div className="mt-6  w-full px-6 text-justify">
                <h3 className="text-lg font-semibold text-texto-escuro">{titulo}</h3>
                <p className="mt-2 text-sm text-slate-600">{conteudo}</p>
            </div>
          </div>
    </li>
  );
}

export default function LinhaTempo({itens}:{itens: LinhaTempoItem[]}){
  return(
    <div className="relative mx-auto max-w-7x1 px-6">
      <div className="absolute inset-x-6 top-2 h-1 -translate-y-1/2 rounded-full bg-verde-claro"></div>
      <ol className="grid auto-cols-fr grid-flow-col px-6">
        {itens.map((item)=>(
            <LinhaTempoItem key={item.ano} {...item}/>
          ))}
      </ol>
    </div>
  );
}
