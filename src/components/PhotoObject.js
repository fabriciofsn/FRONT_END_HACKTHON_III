import React, { useState } from "react";
import { DivInputFile, DivIcon } from "../styles/Cadastro";
import { DivAdjustFile } from "../styles/Cadastro";
import perfilJosue from "../assets/perfilJosue.jpg"


const PhotoObject = (imagemPerfil = null) => {
  const [img, setImg] = useState(null);
  return (
    <DivAdjustFile>
      <DivInputFile>
        <input
          type="file"
          accept="image/*"
          onChange={({ target }) => setImg(target.value)}
        />
        <DivIcon>
          {img ? (
            <img src={img} alt="perfil" />
          ) : (<img src={perfilJosue} alt="perfil" width={100} height={100}/>)}
          
            
          
        </DivIcon>
      </DivInputFile>
    </DivAdjustFile>
  );
};

export default PhotoObject;
