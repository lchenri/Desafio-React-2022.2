import Navbar from '../../components/navbar/App.js';
import Footer from '../../components/footer/App.js';
import Membros from '../../components/post/App.js';
import './Membros.css';



function App() {
  return (
    <div className='corpo'>
        <Navbar />
        <Membros />
        <Footer />
    </div>

  );
}

export default App;
