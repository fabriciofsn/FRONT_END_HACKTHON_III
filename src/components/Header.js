import React, { useState } from "react";
import {
  DivAlignCenter,
  DivFilter,
  DivInputSearch,
  HeaderContent,
} from "../styles/Setor";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "./Modal";

const Header = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleMenu = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <div>
      <HeaderContent>
        <DivAlignCenter>
          <RxHamburgerMenu
            onClick={handleMenu}
            cursor="pointer"
            color="#d9d9d9"
            size={45}
            fontWeight="bold"
          />
          {openModal && <Modal />}
          <DivInputSearch>
            <input type="search" placeholder="Pesquise aqui" />
            <AiOutlineSearch size={25} color="#d9d9d9" />
          </DivInputSearch>
        </DivAlignCenter>
        <DivFilter>
          <p>{props.cargo}</p>
          <p className="selected">{props.departamento}</p>
        </DivFilter>
      </HeaderContent>
    </div>
  );
};

export default Header;
