import logo from './logo.svg';
import './App.css';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Open Pride Maps
        </p>
      </header>
      <Map />
    </div>
  );
}

export default App;
