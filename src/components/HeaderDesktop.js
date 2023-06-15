import React, { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBoxArrowInRight } from "react-icons/bs";
import Modal from "./Modal";
import perfilJosue from "../assets/perfilJosue.jpg";
import {ModalObject} from "../components/ModalObject";
import "../styles/HeaderDesktop.css";
import { Link } from "react-router-dom";


const HeaderDesktop = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const refFilter = useRef();

  const perfil = {
    id: 15,
    nome: "Werik Joel",
    setorId: "Direcao",
    departamentoId: "Financeiro",
    cargoId: "Diretor Financeiro",
    imagem: ""
  };

  const [poupupObject, setPoupupObject] = useState(false);

  const handleClickCloseObject = () => {
    setPoupupObject(false);
  }

  const handleMenu = () => {
    setOpenModal((openModal) => !openModal);
  };


  return (
    <div>

      <div className="headerDesktop">
        <div>
          <RxHamburgerMenu
            onClick={handleMenu}
            cursor="pointer"
            color="#d9d9d9"
            size={45}
            fontWeight="bold"
          />
          {openModal && <Modal />}
        </div>
        <div className="headerDesktopDiv2">
          <img src={perfilJosue} height="40px" widht="40px" />
          <span onClick={() => setPoupupObject(true)}>
            <p><b>Josue Ferreira</b></p>
            <p>Diretor de RH</p>
          </span>
        </div>
        <div className="headerDesktopDiv3">
          <Link to="/"><BsBoxArrowInRight
            cursor="pointer"
            color="#d9d9d9"
            size={30}
            fontWeight="bold" /></Link>
        </div>
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
    </div>
  );
};

export default HeaderDesktop;
