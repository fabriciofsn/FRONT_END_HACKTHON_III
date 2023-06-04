import React, { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBoxArrowInRight } from "react-icons/bs";
import Modal from "./Modal";
import perfilJosue from "../assets/perfilJosue.jpg";
import "../styles/HeaderDesktop.css"

const HeaderDesktop = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const refFilter = useRef();

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
          <span>
            <p><b>Josue Ferreira</b></p>
            <p>Diretor de RH</p>
          </span>
        </div>
        <div className="headerDesktopDiv3">
          <p><BsBoxArrowInRight
            cursor="pointer"
            color="#d9d9d9"
            size={30}
            fontWeight="bold" /></p>
        </div>
      </div>

    </div>
  );
};

export default HeaderDesktop;
