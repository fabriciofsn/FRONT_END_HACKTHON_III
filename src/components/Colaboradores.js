import React from 'react';
import tableColaboradores from '../tables/TableColaboradores';

function Colaboradores(){
    // const tableColaboradores = [<TableColaboradores />]

    return(
        <>
        <p>{tableColaboradores.map((colaborador, index) => {return<>
        <p>{colaborador.id}</p>
        </>})}</p>
        </>
    )
}

export default Colaboradores

