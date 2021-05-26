import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './pages/Cart';
import { CartContextProvider } from './context/CartContext';
import Footer from './components/Footer';

//import getProducts from './services/getProducts';
import { database } from './firebase/index';

//import { database } from './firebase/index';


//import db from './database.js';


function App() {

  const [products, setProducts] = useState({});  
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    

    const ItemCollection = database.collection('ItemCollection');

    return ItemCollection.get().then((query) => {
      setIsLoading(true);
      setProducts(query.docs.map(doc => doc.data()));
      })
    

  }, [])
  
  console.log("test42");
  console.log(products);
  
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path="/">
            <ItemListContainer database={isLoading ? products : []} />
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer database={isLoading ? products : []} greeting="Welcome to Buy It App" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer database={isLoading ? products : []}/>
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