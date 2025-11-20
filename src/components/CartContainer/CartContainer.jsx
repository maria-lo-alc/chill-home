import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import {Link } from "react-router";
import { createOrder } from "../../data/firebase";
import FormCheckOut from "./FormCheckout";
import Order from "./Order";
import EmptyCart from "./EmptyCart";

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
      <EmptyCart />
    );
  }

  return (
    <section className="max-w-4xl  p-4 ">
      <h1 className="font-primary font-bold italic text-2xl mb-2">Carrito</h1>
      <div className="md:flex justify-between">
        <div className="mb-4 ">
      <div >
        {cartItems.map((itemInCart) => (
          <div key={itemInCart.id}>
            <div className="flex mb-2 ">
              <img
                className="rounded-xl w-28 md:w-36 mr-4 "
                src={itemInCart.img}
                alt={itemInCart.title}
              />
              <div>
                <div>
                  <h4 className="font-primary font-bold italic ">{itemInCart.title}</h4>
                  </div>
                
                <p className="font-primary text-sm">
                  Precio por unidad: ${itemInCart.price}
                </p>
                <p className="font-primary text-sm">
                  Cantidad: {itemInCart.quantity}
                </p>

                <p className="font-primary font-bold text-sm">
                  Precio total: ${itemInCart.quantity * itemInCart.price}{" "}
                </p>

                <button className="font-primary bg-chill-price rounded-3xl text-amber-50  py-1 font-semibold text-center transition duration-150 hover:bg-chill-delete pr-2 pl-2 text-xs" onClick={() => removeItem(itemInCart.id)}>
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="font-primary font-bold ml-30 md:ml-40">Total a pagar: ${getTotalPrice()} </h4>
      <button className="bg-gray-500 rounded-3xl text-amber-50  py-2 font-semibold text-center transition duration-150 hover:bg-chill-delete pr-4 pl-4 inline-block self-start" onClick={clearCart}> Vaciar carrito</button>
      </div>
      <FormCheckOut handleCheckOut={handleCheckOut} />
      </div>
    </section>
  );
}

export default CartContainer;
