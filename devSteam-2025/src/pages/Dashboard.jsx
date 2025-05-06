import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Cupons from "../components/Cupons";
import EditGames from "../components/EditGames";
import EditCategory from "../components/EditCategory";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("EditGames");

  return (
    <>
      <AdminHeader />
      <div className="container mt-4">
        <div className="d-flex gap-3 mb-4">
          <button
            className={`btn ${
              activeComponent === "EditGames"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setActiveComponent("EditGames")}
          >
            Gerenciar Jogos
          </button>
          <button
            className={`btn ${
              activeComponent === "EditCategory"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setActiveComponent("EditCategory")}
          >
            Gerenciar Categorias
          </button>
          <button
            className={`btn ${
              activeComponent === "Cupons"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setActiveComponent("Cupons")}
          >
            Gerenciar Cupons
          </button>
        </div>
        {activeComponent === "EditGames" ? (
          <EditGames />
        ) : activeComponent === "EditCategory" ? (
          <EditCategory />
        ) : (
          <Cupons />
        )}
      </div>
    </>
  );
};

export default Dashboard;
