import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Header = (props) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    salvaUsuario && setUsuario(JSON.parse(salvaUsuario));

    const handleStorageChange = () => {
      const updatedUsuario = localStorage.getItem("devlogin");
      updatedUsuario && setUsuario(JSON.parse(updatedUsuario));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <header className="pt-4 w-100 navbar navbar-dark bg-dark justify-content-center align-items-center">
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div id="logo" role="button" className="d-flex align-items-center me-5">
          <span className="navbar-brand fw-bold fs-3">💀DevSteam</span>
        </div>

        <input
          type="text"
          className="w-100 d-none d-md-block border-0 rounded-pill buscar px-4 my-2 mx-5 ms-5"
          placeholder="Buscar..."
        />
      </div>

      <div id="carrinho" className="d-flex align-items-center gap-3">
        {usuario ? (
          <span className="d-flex align-items-center gap-2 me-0 me-md-5">
            <span className="d-none d-md-block">
              {usuario.nome.split(" ")[0]}{" "}
            </span>
            <div className="dropdown">
              <div
                role="button"
                className=" border-0"
                type="div"
                id="dropdownPerfil"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    usuario.foto ||
                    `https://ui-avatars.com/api/?name=${usuario.nome}&background=2b87ae&color=fff`
                  }
                  alt={usuario.nome}
                  className="rounded-circle object-fit-cover"
                  width="40"
                  height="40"
                />
              </div>
              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="dropdownPerfil"
              >
                <li>
                  <Link to={"/perfil"} className="dropdown-item">
                    Perfil
                  </Link>
                </li>
                <li>
                  {usuario.email == "admin@admin.com" ? (
                    <Link to={"/dashboard"} className="dropdown-item">
                      Painel Admin
                    </Link>
                  ) : (
                    <></>
                  )}
                </li>
                <li>
                  <Link
                    to={"/"}
                    onClick={() => {
                      localStorage.removeItem("devlogin");
                      location.reload();
                    }}
                    className="dropdown-item"
                  >
                    Sair
                  </Link>
                </li>
              </ul>
            </div>
          </span>
        ) : (
          <Link
            to="/login"
            role="button"
            className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
          >
            <i className="bi bi-person-circle fs-3"></i>
            <div className="d-none d-md-flex flex-column m-0 w-50">
              <span className="h6 m-0">Entrar</span>
            </div>
          </Link>
        )}

        <div className="position-relative ms-5">
          <i
            role="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#carrinhoOffCanvas"
            className="bi bi-cart4 text-light fs-2"
          ></i>

          {props.contadorJogos > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.contadorJogos}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
