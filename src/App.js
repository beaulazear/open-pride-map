import logo from './assets/logo.png';
import './App.css';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Open Pride Maps</h1>
          <p style={{fontSize: '14px'}}>A crowdsourced knowledge-sharing project promoting geospatial awareness of LGBTQ+ history and community.</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
