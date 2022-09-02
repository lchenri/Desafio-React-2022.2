import React from 'react';
import './App.css';


function App() {
  return (
    <div className='contatoArea'>
        <h1>Fale Conosco!</h1>
        <h2>Acompanhe nosso trabalho e entre em contato pelas redes sociais</h2>
        <div className='icons'>
          <a href='Facebook'><img src={require('../../assets/icons/facebook.png')} alt="Facebook"></img></a>
          <a href='instagram'><img src={require('../../assets/icons/instagram.png')} alt="Instagram"></img></a>
          <a href='twitter'><img src={require('../../assets/icons/email.png')} alt="Email"></img></a>
        </div>
    </div>
  );
}

export default App;