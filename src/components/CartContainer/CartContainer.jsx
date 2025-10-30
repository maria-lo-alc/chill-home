import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Form, Link } from "react-router";
import { createOrder } from "../../data/firebase";
import FormCheckOut from "./FormCheckout";
import Order from "./Order";

function CartContainer() {
  const { cartItems, removeItem, getTotalPrice, clearCart } =
    useContext(cartContext);
  const [order, setOrder] = useState(null);

  async function handleCheckOut(buyer) {
    const total = getTotalPrice();
    const newOrderconfirmed = await createOrder({
      buyer,
      cartItems,
      total,
      date: new Date(),
    });

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
        <Link to="/">
          <button>Ir al inicio</button>
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-4xl  p-4 ">
      <h1 className="font-primary font-bold italic text-2xl mb-2">Carrito</h1>
      <div className="mb-2 ">
        {cartItems.map((itemInCart) => (
          <div key={itemInCart.id}>
            <div className="flex mb-2 ">
              <img
                className="rounded-xl w-28 md:w-36 mr-4 "
                src={itemInCart.img}
                alt={itemInCart.title}
              />
              <div>
                <h4 className="font-primary font-bold italic ">{itemInCart.title}</h4>
                <p className="font-primary text-sm">
                  Precio por unidad: ${itemInCart.price}
                </p>
                <p className="font-primary text-sm">
                  Cantidad: {itemInCart.quantity}
                </p>

                <p className="font-primary font-semibold text-md">
                  Precio total: ${itemInCart.quantity * itemInCart.price}{" "}
                </p>

                <button className="font-primary bg-chill-price rounded-3xl text-amber-50  py-1 font-semibold text-center transition duration-150 hover:bg-chill-delete/60 pr-2 pl-2 text-xs" onClick={() => removeItem(itemInCart.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="font-primary font-bold ml-30 md:ml-40">Total a pagar $:{getTotalPrice()} </h4>
      <button className="font-primary bg-chill-price rounded-3xl text-amber-50  py-2 font-semibold text-sm text-center transition duration-150 hover:bg-chill-delete/60 pr-4 pl-4" onClick={clearCart}> Vaciar carrito</button>
      <FormCheckOut handleCheckOut={handleCheckOut} />
      
    </section>
  );
}

export default CartContainer;
