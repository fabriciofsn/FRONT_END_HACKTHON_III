import React from "react";
import Login from "./screens/Login";
import Setor from "./screens/Setor";
import Departamento from "./screens/Departamento";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./screens/Error404";
import Colaborador from "./screens/colaborador";
import Home from "./screens/Home";
import Categoria from "./screens/Categoria";
import Bens from "./screens/Bens";
import Cargo from "./screens/Cargo";
import Ocorrencia from "./screens/Ocorrencia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/setor" element={<Setor />} />
        <Route path="/departamento" element={<Departamento />} />
        <Route path="/colaborador" element={<Colaborador />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/bens" element={<Bens />} />
        <Route path="/cargos" element={<Cargo />} />
        <Route path="/ocorrencia" element={<Ocorrencia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
