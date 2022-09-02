import React from 'react';
import './App.css'
import Botao from '../button/App.js';

function App() {
  return (
    <div className='corpoInfo'>
        <div className='intro'>
            <h1>Resolvemos seu problema com projetos de consultoria em engenharia.</h1>
            <h2>Oferecemos solução para o problema do seu negócio.</h2>
            <h3>Como podemos te ajudar hoje?</h3>
            <Botao />
        </div>
    </div>
  );
}

export default App;