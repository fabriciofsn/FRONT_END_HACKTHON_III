import React from "react";
import { BiCloudUpload } from "react-icons/bi";
import { DivInputFile, DivIcon } from "../styles/Cadastro";
import { DivAdjustFile } from "../styles/Cadastro";

const Photo = () => {
  return (
    <DivAdjustFile>
      <DivInputFile>
        <input type="file" />
        <DivIcon>
          <BiCloudUpload color="#061226" size={60} />
        </DivIcon>
      </DivInputFile>
    </DivAdjustFile>
  );
};

export default Photo;
