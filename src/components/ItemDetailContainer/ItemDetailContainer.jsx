 
 import { useParams } from "react-router"
 import { getProductById } from "../../data/mockAPI"
 import { useState, useEffect } from "react"
import { cartContext } from "../../context/cartContext"
 import { useContext } from "react"
 import ItemCount from "./ItemCount"

 function ItemDetailContainer() {
    const {idParam}= useParams()
    const [product, setProduct]= useState ({loading:true});
    const {addItem}= useContext (cartContext)
    useEffect (() => {
        getProductById(idParam).then (response => setProduct(response))
        .catch (error=> console.log(error))
    }, [])
       const handleOnAdd = (quantity) => {
        addItem(product, quantity);
    };
    if (product.loading) { return (<h2>Cargando</h2>);}
    return ( <div className= "item-card"> 
    <img className="item-card-img" src={product.img} alt={product.title} />
    <h3 className="item-card-title">{product.title}</h3>
    <p className="item-card-price">{product.price}</p> 
    <p style={{ fontSize: "12px", opacity: "0.6"}}>{product.description}</p>
    <ItemCount onAdd={handleOnAdd}/>
    </div>
    )
}
export default ItemDetailContainer