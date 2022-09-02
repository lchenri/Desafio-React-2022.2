import React from 'react';
import './App.css';
import '../../assets/img/logo.png'


function App() {
  return (
    <footer>
        <div className='footer'>
            <div className='footerContent'>
                <div className='footerLogo'>
                    <img src={require('../../assets/img/logo.png')} alt="Logo" className='logo'></img>
                </div>
                <div className='footerLinks'>
                    <a href='inicio'><h1>Inicio</h1></a>
                    <a href='membros'><h1>Membros</h1></a>
                    <a href='login'><h1>Login</h1></a>
                </div>
                <div className='footerInfo'>
                    <h1>Kimi Engenharia is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </h1>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default App;