import React, { useState } from "react";
import { DivWrapper } from "../styles/OcorrenciaProduto";
import { MdDone } from "react-icons/md";

const OcorrenciaProduto = ({
  titulo,
  numero,
  urgencia,
  departamento,
  tipo,
  data,
  previsao,
  table,
  concluido,
}) => {
  const [dados, setDados] = useState("");

  table &&
    table.map((table) => {
      return setDados(table.nome);
    });

  return (
    <DivWrapper>
      <div className="infos">
        <div>
          <h2>{titulo}</h2>
          <p>Número: {numero}</p>
          <p>Urgência: {urgencia}</p>
          <p>Departamento: {dados.id}</p>
        </div>
        <div>
          <p>Tipo: {tipo}</p>
          <p>Data: {data}</p>
          <p>Previsão: {previsao}</p>
        </div>
        <div>
          <img
            style={{ width: "70px" }}
            src="https://www.cellshop.com/11966007-thickbox_default/desktop-dell-optiplex-3280-i3-8gb-256ssd-tela-196-w11pro-black.jpg"
            alt=""
          />
          <MdDone
            title="Marcar como concluído"
            size={30}
            cursor="pointer"
            onClick={() => concluido(true)}
          />
        </div>
      </div>
    </DivWrapper>
  );
};

export default OcorrenciaProduto;
