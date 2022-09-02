import React from 'react';
import './App.css'


function App() {
  return (
    <div className='sectionCards'>
        <h1>O que você procura?</h1>
        <div className='cardsArea'>
        <div className="card">
            <img src={require('../../../assets/icons/build.png')} alt="Avatar"></img>
            <div className="container">
                <h4><b>Arquitetura, engenharia civil e energia</b></h4>
            </div>  
        </div>
        <div className="card">
            <img src={require('../../../assets/icons/flor.png')} alt="Avatar"></img>
            <div className="container">
                <h4><b>Química ambiental</b></h4>
            </div>  
        </div>
        <div className="card">
            <img src={require('../../../assets/icons/grow.png')} alt="Avatar"></img>
            <div className="container">
                <h4><b>Otimização da produção</b></h4>
            </div>  
        </div>
        <div className="card">
            <img src={require('../../../assets/icons/idea.png')} alt="Avatar"></img>
            <div className="container">
                <h4><b>Gestão e criação de negócios</b></h4>
            </div>  
        </div>
        <div className="card">
            <img src={require('../../../assets/icons/tech.png')} alt="Avatar"></img>
            <div className="container">
                <h4><b>Projetos, mecânica e Materiais</b></h4>
            </div>  
        </div>
    </div>
    </div>

  );
}

export default App;