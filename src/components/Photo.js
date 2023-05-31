import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { DivInputFile, DivIcon } from "../styles/Cadastro";
import { DivAdjustFile } from "../styles/Cadastro";

const Photo = () => {
  const [img, setImg] = useState(null);
  return (
    <DivAdjustFile>
      <DivInputFile>
        <input type="file" onChange={({ target }) => setImg(target.value)} />
        <DivIcon>
          {img ? (
            <img src={img} alt="perfil" />
          ) : (
            <BiCloudUpload color="#061226" size={60} />
          )}
        </DivIcon>
      </DivInputFile>
      {console.log(img)}
    </DivAdjustFile>
  );
};

export default Photo;
