import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <>
      <NavBar />
      <div className="App text-red-500">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-red-500">
            El Librero Errante
          </h1>
          <p>
            Woric Leatherbound
          </p>
        </header>
      </div>
  </>
  );
}

export default App;
