import React from 'react';

const CartContext = React.createContext();

export default CartContext;

export function CartContextProvider({ initialState = [], children }) {
  
  const [cart, setCart] = React.useState(initialState);
  
 function getCart(id) { 
    return cart.find(item => item.id === id); 
  }

  function allCart() {
    return cart;
  }

  function addItem(obj) {
    
    //console.log(obj);
    
    if (!getCart(obj.id)) {
      setCart([...cart, obj])
      
    } else {
      console.log("context addItem 42.");
      
      setCart(cart.map(item => item.id === obj.id ? {...item, counter: item.counter + obj.counter} : item));
    }
    
  }  
  
  // Remover un item del cart por usando su id
  function removeItem(id) {
    setCart(cart.filter(item => item.id !== id));
    console.log("remove item");
  }
  
  // Remover todos los items
  function clear() {
    setCart([]);
  }
  
  function totalItems() {
    return cart.reduce((accum, current) => accum + current.counter, 0);
  }
  
  function counterItem(id) {
    console.log("counter item 42");
    
    if (getCart(id) != undefined) {
      let item = getCart(id);
      console.log(item);
      return item.counter;

    } else { 
      return 1;
    }
  }

  return(
    <CartContext.Provider value={{ addItem, removeItem, clear, allCart, cart, totalItems , counterItem}}>
      {children}
    </CartContext.Provider>
  )
  
} 