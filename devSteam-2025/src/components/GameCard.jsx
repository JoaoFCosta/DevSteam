import React from "react";

const GameCard = (props) => {
  return (
    <div>
      <div className="gameCard card border-0 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start object-fit-cover"
              src={props.imagem}
              alt={props.titulo}
              height={150}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title fw-bold text-light">{props.titulo}</h5>
              <p className="card-text text-light">{props.descricao}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold fs-5 text-light">
                  {props.formatarMoeda(props.preco)}
                </span>
                <button
                  id="addCarrinho"
                  className="btn btn-success text-light border-0"
                  onClick={props.onAddCarrinho}
                >
                  <i className="bi bi-cart-plus me-2"></i>
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
