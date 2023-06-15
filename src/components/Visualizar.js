import "../styles/Visualizar.css"

export function Visualizar({objeto= null, categoria= false, informacao2, resposta2, informacao3, resposta3, informacao4, resposta4, informacao5, resposta5, informacao6, resposta6, informacao7, resposta7, informacao8, resposta8, informacao9, resposta9, informacao10, resposta10, informacao11, resposta11, informacao12, resposta12, informacao13, resposta13}){


    return(
        <div className={!categoria ? "divBody" : "divBodyCategoria"}>
            <span>
                <p className="p1">Nome</p><p className="p2">{objeto.nome}</p>
            </span>
            <span>
                <p className="p1">{informacao2}</p><p className="p2">{resposta2}</p>
            </span>
            <span>
                <p className="p1">{informacao3}</p><p className="p2">{resposta3}</p>
            </span>
            <span>
                <p className="p1">{informacao4}</p><p className="p2">{resposta4}</p>
            </span>
            <span>
                <p className="p1">{informacao5}</p><p className="p2">{resposta5}</p>
            </span>
            <span>
                <p className="p1">{informacao6}</p><p className="p2">{resposta6}</p>
            </span>
            <span>
                <p className="p1">{informacao7}</p><p className="p2">{resposta7}</p>
            </span>
            <span>
                <p className="p1">{informacao8}</p><p className="p2">{resposta8}</p>
            </span>
            <span>
                <p className="p1">{informacao9}</p><p className="p2">{resposta9}</p>
            </span>
            <span>
                <p className="p1">{informacao10}</p><p className="p2">{resposta10}</p>
            </span>
            <span>
                <p className="p1">{informacao11}</p><p className="p2">{resposta11}</p>
            </span>
            <span>
                <p className="p1">{informacao12}</p><p className="p2">{resposta12}</p>
            </span>
            <span>
                <p className="p1">{informacao13}</p><p className="p2">{resposta13}</p>
            </span>
            
        </div>
    )
}