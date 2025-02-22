import logo from './assets/logo.png';
import './App.css';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="header-content">
          <p>Open Pride Maps</p>
          <a href="https://www.vecteezy.com/free-png/pride" className="credit-link">
            Pride PNGs by Vecteezy
          </a>
        </div>
      </header>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
