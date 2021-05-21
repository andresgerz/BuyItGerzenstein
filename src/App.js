import React, { useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './pages/Cart';
import { CartContextProvider } from './context/CartContext';
import Footer from './components/Footer';

import getProducts from './services/getProducts';

import { database } from './firebase/index';


//import db from './database.js';


function App() {

  const db = database;
  const ItemCollection = db.collection('ItemCollection');
  
  
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path="/">
            <ItemListContainer database={ItemCollection} />
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer database={ItemCollection} greeting="Welcome to Buy It App" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer database={ItemCollection}/>
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

        <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;