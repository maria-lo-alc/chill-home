import { useContext } from "react"
import { cartContext } from "../../context/cartContext" 
import { Link } from "react-router"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { createOrder } from "../../data/firebase";

function CartContainer () {
    const {cartItems, removeItem, getTotalPrice, clearCart }= useContext (cartContext)

async function handleCheckOut () {
    const buyer = { name: "Luciana", phone: "1234567", email: "lu@yahoo.com", adress: "Calle Falsa 123" }; 
    const total= getTotalPrice();
   const newOrderconfirmed = await createOrder ({buyer, cartItems, total, date: new Date()})
   alert(`Gracias por tu compra! tu id de la orden es: ${newOrderconfirmed.id}`)
    clearCart();
}

    if (cartItems.length === 0) {
        return (
            <div>
                <h1>Tu carrito esta vacío</h1>
                <Link to= "/"><button>Ir al inicio</button></Link>
            </div>)
        
    }
    
    return (
        <section>
            <h1>Carrito</h1>
            <div>{
            cartItems.map (itemInCart => <div key={itemInCart.id} >
                <h4>{itemInCart.title}</h4>
                <img width="80" src={itemInCart.img} alt={itemInCart.title}/>
               <p>Precio por unidad: ${itemInCart.price}</p>
               <p>Cantidad: {itemInCart.quantity}</p>
                <strong>
                <p>Precio total: ${itemInCart.quantity * itemInCart.price} </p>
              </strong>
              <button onClick={ () => removeItem(itemInCart.id)}>🗑️</button>
            </div>
              )
          }
                </div>
           <hr/>
           <h4>Total a pagar:{getTotalPrice()} </h4>
           <button onClick={clearCart}> Vaciar carrito</button>
           <button onClick={handleCheckOut}> Confirmar Compra</button>
           <Link to="/checkout">
           <button>Finalizar compra</button>
           </Link>

            
        </section>
    )
}

export default CartContainer