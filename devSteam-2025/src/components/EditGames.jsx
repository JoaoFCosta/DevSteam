import React, { useEffect, useState } from "react";

const EditGames = () => {
  const [jogos, setJogos] = useState(() => {
    const savedJogos = localStorage.getItem("jogos");
    return savedJogos ? JSON.parse(savedJogos) : [];
  });

  const [editIndex, setEditIndex] = useState(null); // Índice do jogo em edição

  const handleEditJogo = (index) => {
    const jogoParaEditar = jogos[index];
    setNovoJogo(jogoParaEditar);
    setEditIndex(index); // Define o índice do jogo em edição
  };

  const handleSaveJogo = () => {
    if (
      novoJogo.titulo &&
      novoJogo.descricao &&
      novoJogo.preco &&
      novoJogo.categoria &&
      novoJogo.imagem
    ) {
      const updatedJogos = [...jogos];
      if (editIndex !== null) {
        // Atualiza o jogo existente
        updatedJogos[editIndex] = novoJogo;
      } else {
        // Adiciona um novo jogo
        updatedJogos.push(novoJogo);
      }
      setJogos(updatedJogos);
      localStorage.setItem("jogos", JSON.stringify(updatedJogos)); // Salva os jogos no localStorage
      setNovoJogo({
        titulo: "",
        descricao: "",
        preco: "",
        categoria: "",
        imagem: null,
      });
      setEditIndex(null); // Reseta o índice de edição
    }
  };

  const [novoJogo, setNovoJogo] = useState({
    titulo: "",
    descricao: "",
    preco: "",
    categoria: "",
    imagem: null,
  });

  const handleRemoveJogo = (index) => {
    const updatedJogos = jogos.filter((_, i) => i !== index);
    setJogos(updatedJogos);
    localStorage.setItem("jogos", JSON.stringify(updatedJogos));
  };

  useEffect(() => {
    localStorage.setItem("jogos", JSON.stringify(jogos));
  }, [jogos]);

  return (
    <div className="bg-dark p-4 rounded-4 my-5">
      <div className="d-flex">
        <div className="col-md-6">
          <div className="mb-5">
            <h3>Gerenciar Jogos</h3>
            <hr />
            <ul>
              {jogos.map((jogo, index) => (
                <li key={index}>
                  <img
                    src={jogo.imagem}
                    alt={jogo.titulo}
                    className="object-fit-cover w-25 h-25 mb-1"
                  />
                  <br />
                  <p className="mb-2">
                    {jogo.titulo} - {jogo.categoria}{" "}
                  </p>
                  <button
                    className="btn btn-danger btn-sm mb-5"
                    onClick={() => handleRemoveJogo(index)}
                  >
                    Excluir
                  </button>
                  <button
                    className="btn btn-warning btn-sm ms-2 mb-5"
                    onClick={() => handleEditJogo(index)}
                  >
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="col-md-6 mt-5">
          <div className="mb-5 mt-4">
            <input
              type="text"
              value={novoJogo.titulo}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, titulo: e.target.value })
              }
              placeholder="Título do Jogo"
              className="form-control my-2"
            />
            <input
              type="text"
              value={novoJogo.descricao}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, descricao: e.target.value })
              }
              placeholder="Descrição do Jogo"
              className="form-control my-2"
            />
            <input
              type="text"
              value={novoJogo.preco}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, preco: e.target.value })
              }
              placeholder="Preço do Jogo"
              className="form-control my-2"
            />
            <input
              type="text"
              value={novoJogo.categoria}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, categoria: e.target.value })
              }
              placeholder="Categoria do Jogo"
              className="form-control my-2"
            />
            <input
              type="file"
              onChange={(e) =>
                setNovoJogo({
                  ...novoJogo,
                  imagem: URL.createObjectURL(e.target.files[0]),
                })
              }
              className="form-control my-2"
            />
            <button className="btn btn-primary" onClick={handleSaveJogo}>
              {editIndex !== null ? "Salvar Alterações" : "Adicionar Jogo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGames;
