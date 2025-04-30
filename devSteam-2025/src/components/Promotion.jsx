import React, { useEffect, useState, useContext } from "react";
import PromoCard from "./PromoCard";
import { GlobalContext } from "../main.jsx";

const Promotion = (props) => {
  const [aleatorio, setAleatorio] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null); // Estado para o jogo selecionado
  const { formatarMoeda } = useContext(GlobalContext);

  const games = React.useMemo(
    () => [
      {
        id: 1,
        titulo: "Counter-Strike 2",
        preco: 0.0,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        descricao:
          "O clássico FPS competitivo retorna com gráficos renovados e jogabilidade ainda mais precisa. Perfeito para amantes de tiro tático.",
        categoria: "FPS",
      },
      {
        id: 2,
        titulo: "Elden Ring",
        preco: 249.9,
        desconto: 35,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
        descricao:
          "Uma aventura épica em mundo aberto criada por Hidetaka Miyazaki e George R. R. Martin. Desafios intensos e lore profundo.",
        categoria: "RPG",
      },
      {
        id: 3,
        titulo: "Hogwarts Legacy",
        preco: 229.99,
        desconto: 10,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
        descricao:
          "Mergulhe no mundo bruxo de Hogwarts no século XIX. Crie seu próprio bruxo e descubra segredos mágicos.",
        categoria: "RPG de Ação",
      },
      {
        id: 4,
        titulo: "The Witcher 3: Wild Hunt",
        preco: 89.99,
        desconto: 60,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
        descricao:
          "Acompanhe Geralt de Rívia em sua busca épica por Ciri. Combate envolvente, escolhas impactantes e um dos melhores RPGs já feitos.",
        categoria: "RPG",
      },
      {
        id: 5,
        titulo: "God of War",
        preco: 159.99,
        desconto: 25,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
        descricao:
          "Kratos retorna em uma jornada emocional com seu filho Atreus. Uma releitura nórdica da lenda do Deus da Guerra.",
        categoria: "Ação e Aventura",
      },
      {
        id: 6,
        titulo: "FIFA 24",
        preco: 299.9,
        desconto: 15,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
        descricao:
          "O mais recente simulador de futebol da EA Sports, com gráficos realistas e modo carreira renovado.",
        categoria: "Esportes",
      },
    ],
    []
  );

  useEffect(() => {
    const aleatorioJogos = games
      .filter((jogo) => jogo.desconto > 0)
      .sort(() => Math.random() - 0.5) //ordenação aleatória
      .slice(0, 3);

    setAleatorio(aleatorioJogos);
  }, [games]);

  const handleGameClick = (game) => {
    setSelectedGame(game); // Define o jogo selecionado
  };

  const handleCloseModal = () => {
    setSelectedGame(null); // Fecha a modal
  };

  return (
    <div id="promotion" className="container w-75 my-4">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Promoções
      </h2>
      <div
        id="itensPromo"
        className="d-flex flex-wrap gap-4 justify-content-around"
      >
        {aleatorio.map((jogo) => (
          <div key={jogo.id} onClick={() => handleGameClick(jogo)}>
            <PromoCard
              titulo={jogo.titulo}
              preco={jogo.preco}
              precoFormatado={formatarMoeda(jogo.preco)}
              desconto={jogo.desconto}
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
                {selectedGame.desconto > 0 && (
                  <p>
                    <strong>Desconto:</strong> {selectedGame.desconto}%
                  </p>
                )}
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

export default Promotion;
