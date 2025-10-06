import { createContext, useState } from "react";

export const cartContext = createContext("default value");

export const CartProvider=({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  function addItem(newItem) {
    const quantityCount = 1;
    const newCart = structuredClone(cartItems)
    const isInCart = cartItems.some(item => item.id === newItem.id)
    if (isInCart) {
      const index = cartItems.findIndex(item => item.id === newItem.id)
      newCart[index].quantity += quantityCount;
    } 
    else {
      newItem.quantity = quantityCount;
      newCart.push(newItem);
    }

    setCartItems(newCart);
  }


function countCartItems() {
    let count = 0;
    cartItems.forEach(item => count += item.quantity)
    return count;
}
 function removeItem(idToRemove){
    const newCart = cartItems.filter( itemInCart => itemInCart.id !== idToRemove)
    setCartItems(newCart)
}
    return (
    <cartContext.Provider value={{ cartItems, addItem, countCartItems, removeItem }}>
        { children }        
    </cartContext.Provider>
  )
  }


