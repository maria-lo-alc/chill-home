import { useContext,useState } from "react"
import { cartContext } from "../../context/cartContext" 
import { Form, Link } from "react-router"
import { createOrder } from "../../data/firebase";
import FormCheckOut from "./FormCheckout"
import Order from "./Order"

function CartContainer () {
    const {cartItems, removeItem, getTotalPrice, clearCart }= useContext (cartContext)
const [order, setOrder] = useState(null);

async function handleCheckOut (buyer) {
    const total= getTotalPrice();
   const newOrderconfirmed = await createOrder ({buyer, cartItems, total, date: new Date()})

   setOrder(newOrderconfirmed); 
    clearCart();
   
}
if (order) {
    return <Order orderData={order} />; 
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
           <FormCheckOut handleCheckOut={ handleCheckOut } />
          
           

            
        </section>
    )
}

export default CartContainer