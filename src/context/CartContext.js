import React from 'react';

const CartContext = React.createContext();

export default CartContext;

export function CartContextProvider({ initialState = [], children }) {
  
  const [cart, setCart] = React.useState(initialState);
  
 function getCart(id) { 
    return cart.find(item => item.id === id); 
  }

  function addItem(obj) {
        
    if (!getCart(obj.id)) {
      setCart([...cart, obj])
      
    } else {
      
      setCart(cart.map(item => item.id === obj.id ? {...item, counter: item.counter + obj.counter} : item));
    }
    
  }  
  
  // Remover un item del cart por usando su id
  function removeItem(id) {
    setCart(cart.filter(item => item.id !== id));
  }
  
  // Remover todos los items
  function clear() {
    setCart([]);
  }
  
  function totalItems() {
    return cart.reduce((accum, current) => accum + current.counter, 0);
  }
  
  function counterItem(id) {
    
    if (getCart(id) != undefined) {
      let item = getCart(id);
      return item.counter;

    } else { 
      return 1;
    }
  }

  return(
    <CartContext.Provider value={{ addItem, removeItem, clear, cart, totalItems , counterItem}}>
      {children}
    </CartContext.Provider>
  )
  
} 