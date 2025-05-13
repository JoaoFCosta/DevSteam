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
      </div>
    </header>
  );
};

export default PerfilHeader;
