import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { DivInputFile, DivIcon } from "../styles/Cadastro";
import { DivAdjustFile } from "../styles/Cadastro";


const Photo = (imagemPerfil = null) => {
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
          {imagemPerfil && <img src={imagemPerfil} alt="perfil1" height={100} width={100}/>}
          {img && 
            <img src={img} alt="perfil2" />
          }
          {imagemPerfil === null && !img && 
            <BiCloudUpload color="#061226" size={60} />
          }
        </DivIcon>
      </DivInputFile>
    </DivAdjustFile>
  );
};

export default Photo;
