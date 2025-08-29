import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/layout/Hero";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroContracts from "./components/contracts_views/HeroContracts";
import HeroContratosGuardados from "./components/contracts_views/HeroContratosGuardados";
import HeroLogin from "./components/auth/HeroLogin";

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
    <main>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Hero />}
        />
        <Route
          path="/contrato"
          element={<HeroContracts onAgregar={agregarContrato} />}
        />
        <Route
          path="/buscar"
          element={<HeroContratosGuardados />}
        />
        <Route
          path="/login"
          element={<HeroLogin />}
        />
      </Routes>
      <Footer />
    </main>
  );
}