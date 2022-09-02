import React from 'react';
import './Membros.css'


function App({nome, cargo, departamento}) {
  return (
    <div className='sectionCards'>
        <div className='cardsArea'>
            <div className="card">
                <img src={require('../../../assets/icons/flor.png')} alt="Avatar" ></img>
                <div className="container">
                    <h1><b>{nome}</b></h1>
                    <h2>{cargo}</h2>
                    <h3>{departamento}</h3>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;