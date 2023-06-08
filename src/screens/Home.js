import React, { useEffect, useRef, useState } from "react";
import Bens from "../components/Bens";
import Profile from "../components/Profile";
import { MdOutlineLogout } from "react-icons/md";
import { HeaderHome } from "../styles/Home";
import Pessoas from "../components/Pessoas";

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
      <HeaderHome>
        <div className="logout">
          <MdOutlineLogout size={40} color="#d9d9d9" />
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
  );
};

export default Home;
