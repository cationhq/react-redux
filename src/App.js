import styled from 'styled-components'
import './App.css';

import { Intervalo } from './components/intervalo';
import { Soma } from './components/soma';
import { Sorteio } from './components/sorteio';
import { Media } from './components/media';
import { useState } from 'react';


const Line = styled.div`
  display: flex;
`


function App() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercicio 001 - Redux (Simples)</h1>
      <Line>
        <Intervalo min_max={[[min, max], [setMin, setMax]]} color="blue" />
      </Line>
      <Line>
        <Media min_max={[min, max]} />
        <Soma min_max={[min, max]} />
        <Sorteio min_max={[min, max]} />
      </Line>
    </div>
  );
}

export default App;
