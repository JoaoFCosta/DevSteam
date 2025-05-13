import React, { useEffect, useState } from "react";

const CategoryGames = () => {
  

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
    <div className="container mt-4">
      <div className="row">
        


      </div>
    </div>
  );
};

export default CategoryGames;
