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
                <Redirect to="/wanlibReactJS" />
            </Route>
            <Route exact path="/home">
                <Redirect to="/wanlibReactJS" />
            </Route>
            <Route exact path="/types">
                <Redirect to="/wanlibReactJS" />
            </Route>
            <Route exact path="/wanlibReactJS">
              <ItemListContainer message={message} classes={classes}/>
            </Route>
            <Route exact path="/wanlibReactJS/types/:typeName">
              <ItemListContainer message={message} classes={classes}/>
            </Route>
            <Route path="/wanlibReactJS/types/:typeName/:individual">
              <ItemListContainer message={message} classes={classes}/>
            </Route>
            <Route exact path="/wanlibReactJS/cart">
              <Cart />
            </Route>

            
          </Switch>

        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
