import React, { useState } from 'react';
import './LampadaAladim.css'; // Importando o estilo

const Lampada = () => {
  const [isGenio, setIsGenio] = useState(false);

  const handleButtonClick = () => {
    setIsGenio(!isGenio);
  };

  return (
    <main>
      <h1>"Libere a magia da programação com a lâmpada de Aladim"</h1>
      <section id="lampada-container">
        <img
          id="lampada-imagem"
          src={isGenio ? '/imagens/lampadagenio.png' : '/imagens/lampadamagica.png'}
          alt="Lâmpada de Aladim"
        />
        <button id="lampada-botao" onClick={handleButtonClick}>
          {isGenio ? 'Clique para liberar' : 'Clique Aqui'}
        </button>
      </section>
    </main>
  );
};

export default Lampada;