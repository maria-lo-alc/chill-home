
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext.jsx'  

export default function CartWidget() {
    const {countCartItems}= useContext (cartContext)
    const itemsQuantity = countCartItems();
    return (
        <span className=" flex items-center justify-between space-x-2">
        <img className="basketimg" src="/basket.png" alt="cart"></img>
        <div> {itemsQuantity > 0 && itemsQuantity}  </div>
        </span>)   
}