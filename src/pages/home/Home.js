import Navbar from '../../components/navbar/App.js';
import Informacoes from '../../components/informacoes/App.js';
import CardIntro from '../../components/cards/cardsIntro/App.js';
import QuemSomos from '../../components/quemSomos/App.js';
import Contato from '../../components/contato/App.js';
import Footer from '../../components/footer/App.js'
import './Home.css';

function App() {
  return (
    <div className='corpo'>
      <Navbar />
      <Informacoes />
      <CardIntro />
      <QuemSomos />
      <Contato />
      <Footer />
    </div>

  );
}

export default App;
