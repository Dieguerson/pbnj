import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Cart from './components/Cart';
import CartContext from './components/CartContext';

function App() {
  
  const message = `Welcome to Our On Demand Pokemon Breeding Store!`;
  const classes = "flex justify-center text-2xl font-bold text-[#123E59] mt-5";

  return (
    <>
      <CartContext>
        <BrowserRouter className="flex-col bg-[#0596A6]">

          <NavBar />

          <Switch>
            <Route exact path="/">
                <Redirect to="/pbnj" />
            </Route>
            <Route exact path="/home">
                <Redirect to="/pbnj" />
            </Route>
            <Route exact path="/types">
                <Redirect to="/pbnj" />
            </Route>
            <Route exact path="/pbnj/cart">
              <Cart />
            </Route>
            <Route exact path="/pbnj">
              <ItemListContainer message={message} classes={classes}/>
            </Route>
            <Route exact path="/pbnj/types/:typeName">
              <ItemListContainer message={message} classes={classes}/>
            </Route>
            <Route exact path="/pbnj/:individual">
              <ItemListContainer message={message} classes={classes}/>
            </Route>
            <Route exact path="/pbnj/types/:typeName/:individual">
              <ItemListContainer message={message} classes={classes}/>
            </Route>
            <Route exact path="/cart">
                <Redirect to="/pbnj/cart" />
            </Route>

            
          </Switch>

        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
