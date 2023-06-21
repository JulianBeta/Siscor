import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Siscore Bitches!!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          que quiere socio!?
        </p>
        <Button/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        

      </header>
    </div>
  );
}
function Button() {
  return (
    <button>Mirá que chimba de botón!</button>
  );
}

export default App;

