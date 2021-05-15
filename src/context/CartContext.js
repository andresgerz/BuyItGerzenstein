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
/* 
  // agregar cierta cantidad de un ítem al carrito
  function isInCart(id) {
    return id === undefined ? undefined : getCart(id) !== undefined;
  }
 */
  function addItem(obj) {
    
    console.log("context addItem.");
    console.log(obj);
    
    if (!getCart(obj.id)) {
      setCart([...cart, obj])
      
    } else {
      setCart(cart.map(item => item.id === obj.id ? {...item, counter: obj.counter} : item));
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
    console.log("remove all items");
  }

  return(
    <CartContext.Provider value={{ addItem, removeItem, clear, allCart, cart }}>
      {children}
    </CartContext.Provider>
  )
  
} 