import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {

  const mensaje = "Vamo' a programá'?"
  const clases = "text-2xl font-bold text-red-500"

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={mensaje} clases={clases}/>
    </>
  );
}

export default App;
