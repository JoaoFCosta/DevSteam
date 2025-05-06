import React, { useEffect, useState } from "react";

const Cupons = () => {
  const [cupons, setCupons] = useState(() => {
    const savedCupons = localStorage.getItem("cupons");
    return savedCupons ? JSON.parse(savedCupons) : [];
  });

  const [novoCupom, setNovoCupom] = useState({ codigo: "", desconto: "" });

  const handleAddCupom = () => {
    if (novoCupom.codigo && novoCupom.desconto) {
      const updatedCupons = [...cupons, novoCupom];
      setCupons(updatedCupons);
      localStorage.setItem("cupons", JSON.stringify(updatedCupons)); // Salva os cupons no localStorage
      setNovoCupom({ codigo: "", desconto: "" });
    }
  };

  const handleRemoveCupom = (index) => {
    const updatedCupons = cupons.filter((_, i) => i !== index);
    setCupons(updatedCupons);
    localStorage.setItem("cupons", JSON.stringify(updatedCupons));
  };

  useEffect(() => {
    localStorage.setItem("cupons", JSON.stringify(cupons));
  }, [cupons]);

  return (
    <div className="mb-5 bg-dark p-4 rounded-4">
      <h3>Cupons</h3>
      <hr />

      <ul>
        {cupons.map((cupom, index) => (
          <li key={index}>
            {cupom.codigo} - {cupom.desconto}%{" "}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveCupom(index)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={novoCupom.codigo}
        onChange={(e) => setNovoCupom({ ...novoCupom, codigo: e.target.value })}
        placeholder="Código do Cupom"
        className="form-control my-2"
      />
      <input
        type="number"
        value={novoCupom.desconto}
        onChange={(e) =>
          setNovoCupom({ ...novoCupom, desconto: e.target.value })
        }
        placeholder="Desconto (%)"
        className="form-control my-2"
      />
      <button className="btn btn-primary" onClick={handleAddCupom}>
        Adicionar Cupom
      </button>
    </div>
  );
};

export default Cupons;
