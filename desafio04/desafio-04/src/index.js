import React from 'react';
import ReactDOM from 'react-dom/client';
import './LampadaAladim.css';
import Lampada from './Lampada'; // Importando o componente Lampada

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lampada />
  </React.StrictMode>
);