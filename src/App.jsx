import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardsPrincipales from "./components/CardsPrincipales";
import FormContrato from "./components/FormContrato";
import Buscar from "./pages/Buscar";
import { Header } from "./components/Header";

export default function App() {
  const [contratos, setContratos] = useState(
    JSON.parse(localStorage.getItem("contratos") || "[]")
  );

  const agregarContrato = (nuevo) => {
    const nuevos = [...contratos, nuevo];
    setContratos(nuevos);
    localStorage.setItem("contratos", JSON.stringify(nuevos));
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CardsPrincipales />}
        />
        <Route
          path="/contrato"
          element={<FormContrato onAgregar={agregarContrato} />}
        />
        <Route
          path="/buscar"
          element={<Buscar />}
        />
      </Routes>
    </div>
  );
}


