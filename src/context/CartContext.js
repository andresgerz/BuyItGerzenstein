import { useState, useEffect, useCallback, createContext } from 'react';

const initialState = {
  product: '', 
  quantity: 0 
};

const CartContext = React.createContext([]);

export default CartContext;

export function CartContextProvider({ initialState = [], children }) {
  
  const [cart, setCart] = useState(initialState);
  
  const getCart = (id) => { 
    return cart.find(item => item.id === id); 
  }

  // agregar cierta cantidad de un ítem al carrito
  const isInCart = (id) => {
    return id === undefined ? undefined : getCart !== undefined;
  }

  const addItem = (item, quantity) => {
    
    if (isInCart(item && item.id)) {
      return ;
    }

    setCart([...cart, item])
  }  
  
  // Remover un item del cart por usando su id
  const removeItem = (id) => {
    return card.filter(item => item.id !== id);
  }
  
  // Remover todos los items
  const clear = () => {
    setCard([]);
  }
  
}