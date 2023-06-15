import React, { useEffect, useRef, useState } from "react";
import Bens from "../components/Bens";
import Profile from "../components/Profile";
import { MdOutlineLogout } from "react-icons/md";
import { HeaderHome } from "../styles/Home";
import Pessoas from "../components/Pessoas";
import "../styles/mediaQuery.css";
import HeaderDesktop from "../components/HeaderDesktop";

const Home = () => {
  const divRef = useRef();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const pha = divRef.current.querySelectorAll("p");
      const accordion = (index) => {
        pha.forEach((p) => p.classList.remove("selected"));
        pha[index].classList.add("selected");
      };
      pha.forEach((p, index) => {
        p.addEventListener("click", () => {
          setPosition(index);
          accordion(index);
        });
      });
    }
  });
  const alter = [<Bens />, <Pessoas />];
  return (
    <div>
      <div className="showMobile">
        <HeaderHome >
          <div className="logout">
            <a href="/">
              <MdOutlineLogout size={40} color="#d9d9d9" />
            </a>
          </div>
          <div className="profile">
            <Profile />
          </div>
          <div ref={divRef} className="accordion">
            <p className="selected">Bens</p>
            <p>Pessoas</p>
          </div>
        </HeaderHome>
        {alter[position]}
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
        <Bens />
        <Pessoas />
      </div>

    </div>
  );
};

export default Home;
