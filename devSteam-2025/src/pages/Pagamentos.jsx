import React, { useState, useEffect } from "react";

import Footer from "../components/Footer";
import PerfilHeader from "../components/PerfilHeader";

const Pagamentos = () => {
  const [cards, setCards] = useState(() => {
    // Recupera os cartões salvos no localStorage ao carregar a página
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
      localStorage.setItem("cards", JSON.stringify(updatedCards)); // Salva os cartões no localStorage
      setNewCard({ cardNumero: "", cardTitular: "", dataExpirar: "", cvv: "" });
    } else {
      alert("Por favor, preencha todos os campos do cartão.");
    }
  };

  useEffect(() => {
    // Atualiza o localStorage sempre que a lista de cartões mudar
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <PerfilHeader />
      <div className="p-5">
        <div className="col-md-6 text-start">
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
        <div className="col-md-6">
        <hr />
          <h3>Adicionar Novo Cartão</h3>
          <hr />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddCard();
            }}
          >
            <div className="mb-3">
              <label className="form-label">Número do Cartão:</label>
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
              <label className="form-label">Nome do Titular:</label>
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
              <label className="form-label">Data de Validade:</label>
              <input
                type="text"
                name="dataExpirar"
                value={newCard.dataExpirar}
                onChange={handleInputChange}
                placeholder="MM/AA"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CVV:</label>
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
      <Footer />
    </>
  );
};

export default Pagamentos;
