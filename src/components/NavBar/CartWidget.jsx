import  './CartWidget.css' 
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext.jsx'  

export default function CartWidget() {
    const {countCartItems}= useContext (cartContext)
    return (
        <span className="cartcontainer">
        <img className="basketimg" src="/basket.png" alt="cart"></img>
        <div> {countCartItems()} </div>
        </span>)   
}