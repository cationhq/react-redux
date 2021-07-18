import styled from 'styled-components'
import './App.css';

import { Intervalo } from './components/intervalo';
import { Soma } from './components/soma';
import { Sorteio } from './components/sorteio';
import { Media } from './components/media';


const Line = styled.div`
  display: flex;
`


function App() {
  return (
    <div className="App">
      <h1>Exercicio 001 - Redux (Simples)</h1>
      <Line>
        <Intervalo color="blue" />
      </Line>
      <Line>
        <Media />
        <Soma />
        <Sorteio />
      </Line>
    </div>
  );
}

export default App;
