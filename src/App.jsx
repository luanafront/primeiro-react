import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import imagemReact from "./react.png"

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
      <img alt="react" className='imagem' src={imagemReact}/>
      <h1 className="titulo">Olá Mundo! &nbsp;{<VolunteerActivismIcon/>}</h1>
      <h2 className="subtitulo">Este é meu primeiro site usando React</h2>

      <p className="numeracao">{contador}</p>
      <div className='botoes'>
        <Button onClick={aumentar} variant="contained" color="secondary"  size="small">Aumentar</Button>
        <Button onClick={diminuir} variant="contained" color="secondary"  size="small">Diminuir</Button>
      </div>
    </div>
  );
}

export default App;
