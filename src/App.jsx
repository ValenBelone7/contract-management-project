import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import FormContrato from "./components/FormContrato";
import ManejoContrato from "./components/ManejoContrato";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

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
          element={<Hero />}
        />
        <Route
          path="/contrato"
          element={<FormContrato onAgregar={agregarContrato} />}
        />
        <Route
          path="/buscar"
          element={<ManejoContrato />}
        />
      </Routes>
      <Footer />
    </div>
  );
}


