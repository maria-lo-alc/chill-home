 
 import { useParams } from "react-router"
 import { getProductById } from "../../data/mockAPI"
 import { useState, useEffect } from "react"
 function ItemDetailContainer() {
    const {idParam}= useParams()
    const [product, setProduct]= useState ({loading:true});
    useEffect (() => {
        getProductById(idParam).then (response => setProduct(response))
        .catch (error=> console.log(error))
    }, [])
    if (product.loading) { return (<h2>Cargando</h2>);}
    return ( <div className= "item-card"> 
    <img className="item-card-img" src={product.img} alt={product.title} />
    <h3 className="item-card-title">{product.title}</h3>
    <p className="item-card-price">{product.price}</p> 
    <p style={{ fontSize: "12px", opacity: "0.6"}}>{product.description}</p>
    <button className="item-card-button">Agregar al carrito</button>
    </div>
    )
}
export default ItemDetailContainer