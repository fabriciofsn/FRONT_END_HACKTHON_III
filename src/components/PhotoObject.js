import React, { useState } from "react";
import { DivInputFile, DivIcon } from "../styles/Cadastro";
import { DivAdjustFile } from "../styles/Cadastro";
import perfilJosue from "../assets/perfilJosue.jpg";
import pc from "../assets/pc.jpg";


const PhotoObject = ({imagemPerfil = null, photoColaborador= false}) => {
  const [img, setImg] = useState(null);
  const imagem = photoColaborador ? perfilJosue : pc

  console.log("teste" + photoColaborador)
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
          ) : (<img src={imagem} alt="perfil" width={100} height={100}/>)}
          
            
          
        </DivIcon>
      </DivInputFile>
    </DivAdjustFile>
  );
};

export default PhotoObject;
