import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './pages/Cart';

import db from './database.js';


function App() {
  return (
  <Router>
    <div className="App">
    <NavBar/>
    
    <Switch>
      <Route exact path="/">
        <ItemListContainer database={db} />
      </Route>
      <Route exact path="/category/:category">
        <ItemListContainer database={db} greeting="Welcome to Buy It App" />
      </Route>
      <Route exact path="/item/:id">
        <ItemDetailContainer database={db}/>
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;