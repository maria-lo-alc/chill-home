import  './CartWidget.css' 
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext.jsx'  

export default function CartWidget() {
    const {countCartItems}= useContext (cartContext)
    const itemsQuantity = countCartItems();
    return (
        <span className="cartcontainer">
        <img className="basketimg" src="/basket.png" alt="cart"></img>
        <div> {itemsQuantity > 0 && itemsQuantity}  </div>
        </span>)   
}