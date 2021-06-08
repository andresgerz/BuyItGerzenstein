import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './pages/Cart';
import { CartContextProvider } from './context/CartContext';
import Footer from './components/Footer';
import Finished from './pages/Finished';

//import getProducts from './services/getProducts';



//import db from './database.js';


function App() {

  
  return (
    <CartContextProvider>
    <Router>
   
        <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer greeting="Welcome to Buy It App" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/finished">
            <Finished />
          </Route>
        </Switch>

        <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;