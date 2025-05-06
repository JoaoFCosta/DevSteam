import React, { useState } from "react";
import { useNavigate } from "react-router";
import LoginHeader from "../components/LoginHeader";
import Footer from "../components/Footer";

import QrCode from "../assets/qrCode.jpg";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email && phone && dataNascimento) {
      localStorage.setItem(
        "devlogin",
        JSON.stringify({ nome, email, phone, dataNascimento })
      );

      navigate("/");
    }
  };

  return (
    <>
      <LoginHeader />
      <div className="d-flex align-content-center">
        <div className="container py-5 w-25">
          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <label className="form-label" htmlFor="frmNome">
                Nome
              </label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="form-control"
                type="text"
                name="frmNome"
                id="frmNome"
              />
            </div>

            <div className="mb-2">
              <label className="form-label" htmlFor="frmEmail">
                E-mail
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                type="email"
                name="frmEmail"
                id="frmEmail"
              />
            </div>

            <div className="mb-2">
              <label className="form-label" htmlFor="frmTel">
                Telefone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                type="tel"
                name="frmTel"
                id="frmTel"
              />
            </div>

            <div className="mb-2">
              <label className="form-label" htmlFor="frmDataNascimento">
                Data de Nascimento
              </label>
              <input
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className="form-control"
                type="date"
                name="frmDataNascimento"
                id="frmDataNascimento"
              />
            </div>

            <button className="btn btn-primary w-100 mt-3">Entrar</button>
          </form>
          <hr />
          <h2 className="text-center fw-bolder">Entrar com</h2>
          <div className="d-flex justify-content-center">
            <img src={QrCode} alt="" height={300} className="mt-1" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
