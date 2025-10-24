export default function Order (props) {
    return (
        <div>
            <h2> Gracias por tu compra! </h2>
            <p> Tu número de orden es: {props.orderData.id} </p>
        </div>
    )       ;
}
 