import React from 'react';

const CartContext = React.createContext();

export default CartContext;

export function CartContextProvider({ initialState = [], children }) {
  
  const [cart, setCart] = React.useState(initialState);
  
 function getCart(id) { 
    return cart.find(item => item.id === id); 
  }

  // agregar cierta cantidad de un ítem al carrito
  function isInCart(id) {
    return id === undefined ? undefined : getCart(id) !== undefined;
  }

  function addItem(obj) {
    console.log("cart context addItem.");
    
    if (isInCart(obj && obj.id)) {
      return ;
    }
    
    setCart([...cart, obj])
    console.log(cart);
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
    <CartContext.Provider value={{ addItem, removeItem, clear, cart }}>
      {children}
    </CartContext.Provider>
  )
  
} 