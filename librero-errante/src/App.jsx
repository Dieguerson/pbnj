import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {

  const message = "Welcome to the Infinite Archive!";
  const classes = "text-2xl font-bold text-neutral-800 mt-5";

  return (
    <>
      <NavBar />
      <ItemListContainer message={message} classes={classes}/>
    </>
  );
}

export default App;
