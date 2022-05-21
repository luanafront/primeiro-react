import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import imagemReact from "./react.png"
import imagemGithub from "./github.png"
import Luana from "./componentes/luana"
import Churros from "./componentes/churros"

function App() {
  const [contador, incrementarContador] = useState(0)

  const aumentar = () => {
    incrementarContador(contador+1)
  }
  const diminuir = () => {
    incrementarContador(contador-1)
  }
  let listaProdutos = [
    {preco: 2.00, nome: "luana"},
    {preco: 3.00, nome: "Nick"},
    {preco: 4.00, nome: "ana"}
  ]

  return (
    <div className="primeiro__site--react">
      <img alt="react" className='imagem' src={imagemReact}/>
      <h1 className="titulo">Olá Mundo! &nbsp;{<VolunteerActivismIcon/>}</h1>
      <h2 className="subtitulo">Este é meu primeiro site usando React</h2>

      <Luana nome = "luana"/>
      <Luana nome = "churros"/>
      <ul>
        {listaProdutos.map((produto) =>{
          return (
            <Churros preco={produto.preco} nome={produto.nome}/>
          )
        })}
      </ul>

      <p className="numeracao">{contador}</p>
      <div className='botoes'>
        <Button onClick={aumentar} variant="contained" color="secondary"  size="small">Aumentar</Button>
        <Button onClick={diminuir} variant="contained" color="secondary"  size="small">Diminuir</Button>
      </div>
      <footer className="rodape">
        <a href="https://github.com/luanafront/primeiro-react" class="link__imagem">
          <img alt="github" className='imagem__github' src={imagemGithub}/>
        </a>
       
      </footer>
    </div>
  );
}

export default App;
