import React, { useEffect, useRef, useState } from "react";
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
  const refFilter = useRef();

  const handleMenu = () => {
    setOpenModal((openModal) => !openModal);
  };

  useEffect(() => {
    if (refFilter.current) {
      const p = refFilter.current.querySelectorAll("p");

      const filter = (index) => {
        p.forEach((filter) => filter.classList.remove("selected"));
        p[index].classList.add("selected");
      };

      p.forEach((fil, index) => {
        fil.addEventListener("click", () => {
          filter(index);
        });
      });
    }
  });

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
          <DivInputSearch style={{ display: props.none }}>
            <input
              value={props.search}
              onChange={({ target }) => props.setSearch(target.value)}
              type="search"
              placeholder="Pesquise aqui"
            />
            <AiOutlineSearch size={25} color="#d9d9d9" />
          </DivInputSearch>
        </DivAlignCenter>
        <DivFilter ref={refFilter}>
          <p onClick={() => props.setCargo(true)}>
            {props.iconCargo}
            {props.cargo}
          </p>
          <p className="selected" onClick={() => props.setCargo(false)}>
            {props.iconDep}
            {props.departamento}
          </p>
        </DivFilter>
      </HeaderContent>
    </div>
  );
};

export default Header;
