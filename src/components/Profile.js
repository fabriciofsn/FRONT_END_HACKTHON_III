import React, { useState } from "react";
import styled from "styled-components";
import {ModalObject} from "../components/ModalObject";
const ProfileColab = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;

  .photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
  }
  .wrapper {
    display: flex;
    justify-content: center;
  }
  h2,
  h3,
  a {
    color: #d9d9d9;
    margin: 5px 0;
    cursor: pointer;
  }
`;

const Profile = (props) => {

  const perfil = {
    id: 15,
    nome: "Werik Joel",
    setorId: "Direcao",
    departamentoId: "Financeiro",
    cargoId: "Diretor Financeiro",
    imagem: ""
  };

  const [poupupObject, setPoupupObject] = useState(false);

  const handleClickCloseObject = () =>{
    setPoupupObject(false);
  }

  return (
    <ProfileColab>
      <div style={{ textAlign: "center" }}>
        <div className="wrapper">
          <div className="photo">
            <img src={props.img} alt="Foto perfil" />
          </div>
        </div>
        <h2>Werik Joel</h2>
        <h3>Diretor financeiro</h3>
        <a onClick={() => setPoupupObject(true)}>Ver perfil</a>
      </div>
      {poupupObject && (
        <ModalObject
          objeto={perfil}
          photoColaborador={true}
          informacao2="Departamento"
          resposta2={perfil.departamentoId}
          closeModal={handleClickCloseObject}
        />
      )}
    </ProfileColab>
  );
};

export default Profile;
