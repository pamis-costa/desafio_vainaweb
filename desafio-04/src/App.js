// src/App.js
import React, { useState } from "react";
import './styles.scss';

const App = () => {
  const [mostrarGenio, setMostrarGenio] = useState(false);

  // Função para alternar a imagem
  const alternarImagem = () => {
    setMostrarGenio(!mostrarGenio);
  };

  return (
    <div className="container">
      <h1 className="titulo">
        "Libere a magia da programação com a lâmpada de Aladim"
      </h1>
      <div className="lampada-container">
        <img
          className="lampada-imagem"
          src={
            mostrarGenio
              ? "/imagens/lampadagenio.png"
              : "/imagens/lampadamagica.png"
          }
          alt="Lâmpada de Aladim"
        />
        <button className="botao" onClick={alternarImagem}>
          {mostrarGenio ? "Clique Aqui" : "Clique Aqui"}
        </button>
      </div>
    </div>
  );
};

export default App;
