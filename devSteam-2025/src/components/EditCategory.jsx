import React, { useEffect, useState } from "react";

const EditCategory = () => {
  const [categorias, setCategorias] = useState(() => {
    const savedCategorias = localStorage.getItem("categorias");
    return savedCategorias ? JSON.parse(savedCategorias) : [];
  });

  const [novaCategoria, setNovaCategoria] = useState("");

  const handleAddCategoria = () => {
    if (novaCategoria) {
      const updatedCategorias = [...categorias, novaCategoria];
      setCategorias(updatedCategorias);
      localStorage.setItem("categorias", JSON.stringify(updatedCategorias));
      setNovaCategoria("");
    }
  };

  const handleRemoveCategoria = (index) => {
    const updatedCategorias = categorias.filter((_, i) => i !== index);
    setCategorias(updatedCategorias);
    localStorage.setItem("categorias", JSON.stringify(updatedCategorias));
  };

  useEffect(() => {
    localStorage.setItem("categorias", JSON.stringify(categorias));
  }, [categorias]);

  return (
    <div className="bg-dark p-4 rounded-4">
        {/* Gerenciar Categorias */}
        <div className="mb-5">
          <h3>Categorias</h3>
          <hr />
          <ul>
            {categorias.map((categoria, index) => (
              <li key={index}>
                {categoria}{" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveCategoria(index)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={novaCategoria}
            onChange={(e) => setNovaCategoria(e.target.value)}
            placeholder="Nova Categoria"
            className="form-control my-2"
          />
          <button className="btn btn-primary" onClick={handleAddCategoria}>
            Adicionar Categoria
          </button>
        </div>
      </div>  
  );
};

export default EditCategory;
