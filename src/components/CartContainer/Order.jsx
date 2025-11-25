export default function Order (props) {
    return (
        <div className="flex md:items-center justify-center">
            <div className="h-60 w-60">
                <img src="./order.jpg" className="rounded-xl "/>
            </div>
            <div className="justify-between ml-4"><h3 className="font-primary text-xl md:text-2xl font-bold italic mb-4  " > Relax, tenemos tu pedido </h3>
            <p className="font-primary font-bold text-xs opacity-60 mb-2"> Tu número de orden es: {props.orderData.id} </p>
            <p className="font-primary text-xs opacity-60">Estamos preparando todo para hacer el envío, te enviaremos un correo cuando esté en camino.</p>
            
            </div>
            
        </div>
    )       ;
}
 