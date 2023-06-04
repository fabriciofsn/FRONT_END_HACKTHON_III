import React, { useEffect, useRef, useState } from "react";
import {
  HeaderContent,
} from "../styles/Setor";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "./Modal";

const HeaderDesktop = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const refFilter = useRef();

  const handleMenu = () => {
    setOpenModal((openModal) => !openModal);
  };


  return (
    <div>
      <HeaderContent>
          <RxHamburgerMenu
            onClick={handleMenu}
            cursor="pointer"
            color="#d9d9d9"
            size={45}
            fontWeight="bold"
          />
          {openModal && <Modal />}
      </HeaderContent>
    </div>
  );
};

export default HeaderDesktop;
