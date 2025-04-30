import React, { useState } from "react";

import Footer from "../components/Footer";
import PerfilHeader from "../components/PerfilHeader";

const Pagamentos = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    cardNumero: "",
    cardTitular: "",
    dataExpirar: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleAddCard = () => {
    if (
      newCard.cardNumero &&
      newCard.cardTitular &&
      newCard.dataExpirar &&
      newCard.cvv
    ) {
      setCards([...cards, newCard]);
      setNewCard({ cardNumero: "", cardTitular: "", dataExpirar: "", cvv: "" });
    } else {
      alert("Por favor, preencha todos os campos do cartão.");
    }
  };

  return (
    <>
      <PerfilHeader />
      <div className="p-5">
        <div className="col-3 text-start position-absolute">
          <h3>Cartões Salvos</h3>
          <hr />
          {cards.length > 0 ? (
            <ul>
              {cards.map((card, index) => (
                <li key={index}>
                  <strong>Número:</strong> **** **** ****{" "}
                  {card.cardNumero.slice(-4)} <br />
                  <strong>Titular:</strong> {card.cardTitular} <br />
                  <strong>Validade:</strong> {card.dataExpirar}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum cartão salvo.</p>
          )}
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-3">Adicionar Novo Cartão</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddCard();
            }}
          >
            <div className="mb-2">
              <label className="form-label">Número do Cartão:</label>
              <input
                type="text"
                name="cardNumero"
                value={newCard.cardNumero}
                onChange={handleInputChange}
                maxLength="16"
                required
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Nome do Titular:</label>
              <input
                type="text"
                name="cardTitular"
                value={newCard.cardTitular}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Data de Validade:</label>
              <input
                type="text"
                name="dataExpirar"
                value={newCard.dataExpirar}
                onChange={handleInputChange}
                placeholder="MM/AA"
                required
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">CVV:</label>
              <input
                type="password"
                name="cvv"
                value={newCard.cvv}
                onChange={handleInputChange}
                maxLength="3"
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-5">Salvar Cartão</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pagamentos;
