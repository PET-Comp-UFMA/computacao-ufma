type LinhaTempoItem = {
    ano:number;
    titulo: string;
    conteudo: string
}
//seria um array na verdade, depois penso nisso
function LinhaTempo({ ano, titulo, conteudo }:LinhaTempoItem) {
  return (
    <>
      {/* <div className="timeline-barra-superior"></div>
          <div className="timeline-linha-tracejada"></div>
          <div className="timeline-box-ano">{ano}</div>
          <div className="timeline-texto">
              <h1>{titulo}</h1>
              <p>{conteudo}</p>
          </div>
      */}
    </>
  );
}

export default LinhaTempo;
