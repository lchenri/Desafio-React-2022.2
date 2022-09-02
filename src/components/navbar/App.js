import React from 'react';
import './App.css';

function App() {
  return (
    <header>
      <div className='navigation'>
        <div className='logo'>
          <img src={require('../../assets/img/logo.png')} alt="Logo" className='logo'></img>
        </div>
        <div className='navLinks'>
          <ul>
            <li><a href='/'>Início</a></li>
            <li><a href='Membros'>Membros</a></li>
            <li><a href='login'>Login</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
// se o nav itens na linha 13 não funcionar, tirar o div.
//        <div>
//<img src={require('../../assets/img/logo.png')} alt="Logo" className='logo'></img>
//</div>