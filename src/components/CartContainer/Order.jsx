export default function Order (props) {
    return (
        <div>
            <h2 className="font-primary text-2xl font-bold italic" > Gracias por tu compra! </h2>
            <p> Tu número de orden es: {props.orderData.id} </p>
        </div>
    )       ;
}
 