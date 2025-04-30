import React, { useContext, useState } from "react";
import GameCard from "./GameCard";
import { GlobalContext } from "../main.jsx";

const OutrosJogos = (props) => {
  const { formatarMoeda } = useContext(GlobalContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const games = React.useMemo(
    () => [
      {
        id: 1,
        titulo: "Hollow Knight",
        preco: 49.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
        descricao:
          "Explore um vasto mundo subterrâneo em um dos melhores jogos de plataforma e ação já criados.",
        categoria: "Metroidvania",
      },
      {
        id: 2,
        titulo: "Cyberpunk 2077",
        preco: 199.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        descricao:
          "Mergulhe em Night City, uma metrópole futurista cheia de ação, escolhas e histórias envolventes.",
        categoria: "RPG de Ação",
      },
      {
        id: 3,
        titulo: "Stardew Valley",
        preco: 24.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
        descricao:
          "Construa sua fazenda dos sonhos neste simulador de vida relaxante e viciante.",
        categoria: "Simulação",
      },
      {
        id: 4,
        titulo: "Red Dead Redemption 2",
        preco: 249.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
        descricao:
          "Viva a vida de um fora-da-lei no Velho Oeste em um dos jogos mais imersivos já feitos.",
        categoria: "Ação e Aventura",
      },
      {
        id: 5,
        titulo: "Hades",
        preco: 79.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
        descricao:
          "Lute para escapar do submundo neste premiado jogo de ação roguelike com uma narrativa envolvente.",
        categoria: "Roguelike",
      },
      {
        id: 6,
        titulo: "Among Us",
        preco: 10.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg",
        descricao:
          "Jogue com amigos e descubra quem é o impostor neste divertido jogo de dedução social.",
        categoria: "Multiplayer",
      },
      {
        id: 7,
        titulo: "The Sims 4",
        preco: 199.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg",
        descricao:
          "Crie e controle a vida de seus Sims neste simulador de vida icônico.",
        categoria: "Simulação",
      },
      {
        id: 8,
        titulo: "Dark Souls III",
        preco: 159.99,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",
        descricao:
          "Enfrente desafios brutais e explore um mundo sombrio neste aclamado RPG de ação.",
        categoria: "RPG de Ação",
      },
    ],
    []
  );

  const handleGameClick = (game) => {
    setSelectedGame(game); // Define o jogo selecionado
  };

  const handleCloseModal = () => {
    setSelectedGame(null); // Fecha a modal
  };

  return (
    <div id="outrosJogos" className="container w-75 my-5">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Outros Jogos
      </h2>
      <div id="itensJogos" className="d-flex flex-column ms-md-5 ps-md-3 gap-4">
        {games.map((jogo) => (
          <div key={jogo.id} onClick={() => handleGameClick(jogo)}>
            <GameCard
              key={jogo.id}
              titulo={jogo.titulo}
              preco={jogo.preco}
              precoFormatado={formatarMoeda(jogo.preco)}
              descricao={jogo.descricao}
              imagem={jogo.imagem}
              formatarMoeda={formatarMoeda}
              onAddCarrinho={(e) => {
                e.stopPropagation(); // Impede que o clique no botão abra a modal
                props.onAddCarrinho(jogo);
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal para exibir informações do jogo */}
      {selectedGame && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleCloseModal} // Fecha a modal ao clicar no fundo
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()} // Impede o clique dentro da modal de fechá-la
          >
            <div className="conteudoModal modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedGame.titulo}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedGame.imagem}
                  alt={selectedGame.titulo}
                  className="img-fluid mb-3"
                />
                <p>
                  <strong>Descrição:</strong> {selectedGame.descricao}
                </p>
                <p>
                  <strong>Categoria:</strong> {selectedGame.categoria}
                </p>
                <p>
                  <strong>Preço:</strong> {formatarMoeda(selectedGame.preco)}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    props.onAddCarrinho(selectedGame);
                    handleCloseModal();
                  }}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutrosJogos;
