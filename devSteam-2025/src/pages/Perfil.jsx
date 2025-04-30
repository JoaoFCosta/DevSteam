import React, { useState, useEffect } from "react";
import PerfilHeader from "../components/PerfilHeader";
import Footer from "../components/Footer";

const Perfil = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    phone: "",
    foto: "",
  });

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    if (salvaUsuario) {
      setUsuario(JSON.parse(salvaUsuario));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUsuario((prev) => ({ ...prev, foto: reader.result }));
        localStorage.setItem(
          "devlogin",
          JSON.stringify({ ...usuario, foto: reader.result })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("devlogin", JSON.stringify(usuario));
    alert("Informações atualizadas com sucesso!");
  };

  return (
    <>
      <PerfilHeader />

      
      <div className="container py-5">
        <h2 className="text-center mb-4">Meu Perfil</h2>
        <div className="d-flex flex-column align-items-center">
          <img
            src={
              usuario.foto ||
              `https://ui-avatars.com/api/?name=${usuario.nome}&background=2b87ae&color=fff`
            }
            alt="Avatar"
            className="rounded-circle mb-3 object-fit-cover"
            width="300"
            height="300"
          />
          
          <form className="w-50">
            <div class="mb-3">
              <label htmlFor="foto" className="form-label">
                Upload
              </label>
              <input
                type="file"
                class="form-control"
                id="inputGroupFile01"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="form-control"
                value={usuario.nome}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={usuario.phone}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary w-100 mt-3"
              onClick={handleSave}
            >
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
