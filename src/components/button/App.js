import React from 'react';
import './App.css'

function buttonClick() {
    alert('YEEEEEEAA');
}

function App() {
  return (
    <div className='botPos'>
        <button className='botao' onClick={buttonClick}>
            Contato
        </button>
    </div>
  );
}

export default App;