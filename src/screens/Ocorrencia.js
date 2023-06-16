import React, { useState } from "react";
import Header from "../components/Header";
import { RiFilter2Fill } from "react-icons/ri";
import Filtros from "../components/Filtros";
import { tableDepartamentos } from "../tables/TableDepartamentos";
import OcorrenciaProduto from "../components/OcorrenciaProduto";
import { DivObjectos } from "../styles/OcorrenciaProduto";

const Ocorrencia = () => {
  const [del, setDel] = useState(false);
  const [lenovo, setLenovo] = useState(false);
  const [acer, setAcer] = useState(false);

  return (
    <>
      <Header none="none" />

      <div style={{ backgroundColor: "#d9d9d9" }}>
        {!del && (
          <OcorrenciaProduto
            titulo="Desktop Dell 25350"
            numero="0935225"
            urgencia="Alta"
            departamento="RH"
            tipo="Furto"
            data="25/05/2023"
            concluido={setDel}
          />
        )}
        <DivObjectos>
          {!lenovo && (
            <OcorrenciaProduto
              titulo="Desktop Lenovo 65850"
              numero="0935987"
              urgencia="Baixa"
              departamento="RH"
              tipo="Defeito"
              data="25/03/2023"
              concluido={setLenovo}
            />
          )}
        </DivObjectos>

        <DivObjectos>
          {!acer && (
            <OcorrenciaProduto
              titulo="Desktop Acer 2545784"
              numero="659887"
              urgencia="Alta"
              departamento="Financeiro"
              tipo="Defeito"
              data="12/03/2023"
              concluido={setAcer}
            />
          )}
        </DivObjectos>
      </div>
    </>
  );
};

export default Ocorrencia;
