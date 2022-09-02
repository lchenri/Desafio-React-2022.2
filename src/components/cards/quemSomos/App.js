import React from 'react';
import './App.css'


function App() {
  return (
    <div className='sectionCards'>
        <h1>Quem Somos?</h1>
        <h2>Conheça melhor a Kimi Engenharia</h2>
        <div className='cardsArea'>
            <div className="card">
                <img src={require('../../../assets/icons/flor.png')} alt="Avatar" ></img>
                <div className="container">
                    <h4><b>Consultoria em engenharia personalizada</b></h4>
                    <p>Oferecemos serviços de consultoria totalmente personalizados, para atender aos nossos clientes.</p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../../assets/icons/flor.png')} alt="Avatar" ></img>
                <div className="container">
                    <h4><b>Engenharia na UFJF</b></h4>
                    <p>Somos alunos do Instituto de Ciências Exatas da UFJF, cujos professores orientam nosso trabalho.</p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../../assets/icons/flor.png')} alt="Avatar" ></img>
                <div className="container">
                    <h4><b>Movimento Empresa Júnior</b></h4>
                    <p>Fazemos parte de um movimento competitivo e colaborativo, que visa promover o conhecimento no Brasil e no mundo</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;