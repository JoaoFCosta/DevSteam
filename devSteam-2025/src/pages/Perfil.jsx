import React, { useState } from "react";
import PerfilHeader from "../components/PerfilHeader";
import DadosPerfil from "../components/DadosPerfil";
import Pagamentos from "../components/Pagamentos";
import Footer from "../components/Footer";

const Perfil = () => {
  const [activeComponent, setActiveComponent] = useState("DadosPerfil");

  return (
    <>
      <PerfilHeader />
      <div className="container mt-4">
        <div className="d-flex gap-3 mb-4">
          <button
            className={`btn ${
              activeComponent === "DadosPerfil"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setActiveComponent("DadosPerfil")}
          >
            Gerenciar Perfil
          </button>

          <button
            className={`btn ${
              activeComponent === "Pagamentos"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setActiveComponent("Pagamentos")}
          >
            Gerenciar Cartões
          </button>
        </div>
      </div>
      {activeComponent === "DadosPerfil" && <DadosPerfil />}
      {activeComponent === "Pagamentos" && <Pagamentos />}
      <Footer />
    </>
  );
};

export default Perfil;
