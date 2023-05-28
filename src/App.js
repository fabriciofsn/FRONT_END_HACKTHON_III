import React from "react";
import Login from "./screens/Login";
import Setor from "./screens/Setor";
import Departamento from "./screens/Departamento";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/setor" element={<Setor />} />
        <Route path="/departamento" element={<Departamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
