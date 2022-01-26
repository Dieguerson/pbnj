import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {

  const message = "Welcome to the Infinite Archive!";
  const classes = "flex justify-center text-2xl font-bold text-[#123E59] mt-5";

  return (
    <>
      <BrowserRouter className="flex-col">

        <NavBar />

        <Switch>
          <Route exact path="/">
              <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <ItemListContainer className="bg-[#0596A6]" message={message} classes={classes}/>
          </Route>
          <Route exact path="/hello">
            Rutísima
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
