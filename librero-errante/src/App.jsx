import './App.css';
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {

  const mensaje = "Vamo' a programá'?"
  const clases = "text-2xl font-bold text-neutral-800 mt-5"

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={mensaje} clases={clases}/>
    </>
  );
}

export default App;
