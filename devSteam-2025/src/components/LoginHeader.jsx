import React from "react";
import { Link } from "react-router";

const LoginHeader = () => {
  return (
    <header className="pt-4 w-100 navbar navbar-dark bg-dark">
      <Link to={"/"} className="text-decoration-none">
        <div
          id="logo"
          role="button"
          className="d-flex align-items-center me-5 ms-5"
        >
          <i className="bi bi-controller fs-1 text-light me-3"></i>
          <span className="navbar-brand fw-bold fs-3">DevSteam</span>
        </div>
      </Link>
    </header>
  );
};

export default LoginHeader;
