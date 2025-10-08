import { createContext, useState } from "react";

 export const cartContext = createContext("default value");

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(newItem, quantity) {
    const newCart = structuredClone(cartItems);
    const isInCart = cartItems.some((item) => item.id === newItem.id);
    if (isInCart) {
      const index = cartItems.findIndex((item) => item.id === newItem.id);
      newCart[index].quantity += quantity;
    } else {
      newItem.quantity = quantity;
      newCart.push(newItem);
    }

    setCartItems(newCart);
  }

  function countCartItems() {
    let count = 0;
    cartItems.forEach((item) => (count += item.quantity));
    return count;
  }
  function removeItem(idToRemove) {
    const newCart = cartItems.filter(
      (itemInCart) => itemInCart.id !== idToRemove
    );
    setCartItems(newCart);
  }

  function getTotalPrice() {
    return cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
  }
  function clearCart() {
    setCartItems([]);
}
  return (
    <cartContext.Provider
      value={{ cartItems, addItem, countCartItems, removeItem, getTotalPrice, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
