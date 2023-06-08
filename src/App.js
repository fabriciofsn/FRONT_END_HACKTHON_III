import React from "react";
import Login from "./screens/Login";
import Setor from "./screens/Setor";
import Departamento from "./screens/Departamento";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./screens/Error404";
import Colaborador from "./screens/Colaborador";
import Home from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setor" element={<Setor />} />
        <Route path="/departamento" element={<Departamento />} />
        <Route path="/colaborador" element={<Colaborador />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
