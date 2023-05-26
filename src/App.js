import React from "react";
import Login from "./screens/Login";
import Setor from "./screens/Setor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/setor" element={<Setor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
