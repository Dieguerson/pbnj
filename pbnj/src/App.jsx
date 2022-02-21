import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import Cart from './components/cart/Cart';
import CartContext from './components/context/CartContext';

function App() {

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
              <ItemListContainer />
            </Route>
            <Route exact path="/pbnj/types/:typeName">
              <ItemListContainer />
            </Route>
            <Route exact path="/pbnj/:individual">
              <ItemListContainer />
            </Route>
            <Route exact path="/pbnj/types/:typeName/:individual">
              <ItemListContainer />
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
