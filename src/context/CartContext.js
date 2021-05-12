import React from 'react';

const initialState = {
  product: '', 
  quantity: 0 
};
 
const { Provider, Consumer }  = React.createContext([]);


function CartContextProvider({ initialState = [], children }) {
  
  const [cart, setCart] = React.useState(initialState);
  
  const getCart = (id) => { 
    return cart.find(item => item.id === id); 
  }

  // agregar cierta cantidad de un ítem al carrito
  const isInCart = (id) => {
    return id === undefined ? undefined : getCart !== undefined;
  }

  const addItem = (item, quantity, setCart) => {
    
    if (isInCart(item && item.id)) {
      return ;
    }

    setCart([...cart, item])
  }  
  
  // Remover un item del cart por usando su id
  const removeItem = (id, card) => {
    return card.filter(item => item.id !== id);
  }
  
  // Remover todos los items
  const clear = (setCart) => {
    setCart([]);
  }

  return(
    <Provider value={[]}>
      {children}
    </Provider>
  )
  
} 

export { CartContextProvider, Consumer as CartContextConsumer};