import React, { useState, useEffect } from "react";

import PerfilHeader from "../components/PerfilHeader";
import PagamentoFooter from "../components/PagamentoFooter";

const Pagamentos = () => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

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
      const updatedCards = [...cards, newCard];
      setCards(updatedCards);
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      setNewCard({ cardNumero: "", cardTitular: "", dataExpirar: "", cvv: "" });
    } else {
      alert("Por favor, preencha todos os campos do cartão.");
    }
  };

  const handleRemoveCard = (indexToRemove) => {
    const updatedCards = cards.filter((_, index) => index !== indexToRemove);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <PerfilHeader />
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4 text-start bg-dark p-4 rounded-4">
            <h3 className="text-white">Cartões Salvos</h3>
            <hr className="text-white" />
            {cards.length > 0 ? (
              <ul className="list-unstyled">
                {cards.map((card, index) => (
                  <li key={index} className="mb-3">
                    <strong className="text-white">Número:</strong> **** ****
                    **** {card.cardNumero.slice(-4)} <br />
                    <strong className="text-white">Titular:</strong>{" "}
                    {card.cardTitular} <br />
                    <strong className="text-white">Validade:</strong>{" "}
                    {card.dataExpirar}
                    <button
                      className="btn btn-danger btn-sm mx-4 mt-2"
                      onClick={() => handleRemoveCard(index)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white">Nenhum cartão salvo.</p>
            )}
          </div>
          <div className="col-12 col-md-8 bg-dark p-4 rounded-4">
            <h3 className="text-white">Adicionar Novo Cartão</h3>
            <hr className="text-white" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddCard();
              }}
            >
              <div className="mb-3">
                <label className="form-label text-white">
                  Número do Cartão:
                </label>
                <input
                  type="text"
                  name="cardNumero"
                  value={newCard.cardNumero}
                  onChange={handleInputChange}
                  maxLength="16"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">
                  Nome do Titular:
                </label>
                <input
                  type="text"
                  name="cardTitular"
                  value={newCard.cardTitular}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">
                  Data de Validade:
                </label>
                <input
                  type="text"
                  name="dataExpirar"
                  value={newCard.dataExpirar}
                  onChange={handleInputChange}
                  maxLength="5"
                  placeholder="MM/AA"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">CVV:</label>
                <input
                  type="text"
                  name="cvv"
                  value={newCard.cvv}
                  onChange={handleInputChange}
                  maxLength="3"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4">
                Salvar Cartão
              </button>
            </form>
          </div>
        </div>
      </div>
      <PagamentoFooter />
    </>
  );
};

export default Pagamentos;
