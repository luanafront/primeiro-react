import './App.css';
import React, { useState } from 'react';

function App() {
  const [contador, incrementarContador] = useState(0)

  const aumentar = () => {
    incrementarContador(contador+1)
  }
  const diminuir = () => {
    incrementarContador(contador-1)
  }

  return (
    <div className="primeiro__site--react">
      <h1>Olá Mundo!</h1>
      <h2>Este é meu primeiro site usando React</h2>

      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>


    </div>
  );
}

export default App;
