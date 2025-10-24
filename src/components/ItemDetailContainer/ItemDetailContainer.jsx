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
            detail: `Agregaste ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} de ${product.title}  al carrito`, 
            life: 2000 
        });
    };
    if (product.loading) { return (<h2>Cargando</h2>);}
    return ( <div className= "flex "> 
    <span className="w-full aspect-[4/3] mr-8 ">
    <img className="rounded-xl " src={product.img} alt={product.imgalt} /></span>
    
    <div className="items-center">
    <h3 className="font-['Open_Sans',_sans-serif] text-xl font-semibold italic text-[#222] mb-1 mt-1">{product.title}</h3>
    <p className="text-2xl font-bold text-[#222]">{`$${product.price}`}</p> 
    <p style={{ fontSize: "12px", opacity: "0.6"}}>{product.description}</p>
    <Toast ref={toastRef} position="bottom-center" messageclassname= "rounded-xl shadow-lg py-6 text-white"/>
    <ItemCount onAdd={handleOnAdd} onAddToast={handleOnAddToast} max={product.stock} />
    </div>
    </div>
    
    )
}
export default ItemDetailContainer
