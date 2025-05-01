import React from "react";
import { Link } from "react-router";

const PerfilHeader = () => {
  return (
    <header className="pt-4 w-100 navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="text-decoration-none">
          <div
            id="logo"
            role="button"
            className="d-flex align-items-center me-5 ms-5"
          >
            <span className="navbar-brand fw-bold fs-3">💀DevSteam</span>
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="fs-5 mx-3">
            <ul className="navbar-nav">
              <Link to={"/perfil"} className="text-decoration-none text-white">
                <span id="personalInfo" className="me-5">
                  Informações pessoais
                </span>
              </Link>
              <Link
                to={"/pagamento"}
                className="text-decoration-none text-white"
              >
                <span id="paymentMethod">Métodos de pagamento</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PerfilHeader;
