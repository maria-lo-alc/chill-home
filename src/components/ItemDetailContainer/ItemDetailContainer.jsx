 import { Toast } from 'primereact/toast';
 import { useParams } from "react-router"
 import {getProductById} from "../../data/firebase"
 import { useState, useEffect, useRef } from "react"
import { cartContext } from "../../context/cartContext"
 import { useContext } from "react"
 import ItemCount from "./ItemCount"

 function ItemDetailContainer() {
    const toastRef = useRef(null);
    const {idParam}= useParams()
    const [product, setProduct]= useState ({loading:true});
    const {addItem}= useContext (cartContext)
    useEffect (() => {
        getProductById(idParam).then (response => setProduct(response))
        .catch (error=> console.log(error))
    }, [])
       const handleOnAdd = (quantity) => {
        addItem(product, quantity);};

        const handleOnAddToast = (quantity) => {
        toastRef.current.show({
            severity: 'success', 
            summary: 'Añadido al Carrito',
            detail: `Agregaste ${quantity} unidades de ${product.title}  al carrito`, 
            life: 3000 
        });
    };
    if (product.loading) { return (<h2>Cargando</h2>);}
    return ( <div className= "item-card"> 
    <img className="item-card-img" src={product.img} alt={product.imgalt} />
    <h3 className="item-card-title">{product.title}</h3>
    <p className="item-card-price">{product.price}</p> 
    <p style={{ fontSize: "12px", opacity: "0.6"}}>{product.description}</p>
    <Toast ref={toastRef} messageClassName= "!rounded-xl !shadow-lg !py-6 !text-white"/>
    <ItemCount onAdd={handleOnAdd} onAddToast={handleOnAddToast} />
    
    </div>
    
    )
}
export default ItemDetailContainer
