import React from "react";
import { DivAlignCenter, DivInputSearch, HeaderContent } from "../styles/Setor";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <div>
      <HeaderContent>
        <DivAlignCenter>
          <RxHamburgerMenu
            cursor="pointer"
            color="#d9d9d9"
            size={45}
            fontWeight="bold"
          />
          <DivInputSearch>
            <input type="search" placeholder="Pesquise aqui" />
            <AiOutlineSearch size={25} color="#d9d9d9" />
          </DivInputSearch>
        </DivAlignCenter>
      </HeaderContent>
    </div>
  );
};

export default Header;
