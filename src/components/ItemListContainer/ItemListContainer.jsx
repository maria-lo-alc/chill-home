
import {getProducts, getProductsByCategory} from "../../data/firebase";
import Item from "./Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function ItemListContainer(props) {

    const [products, setProducts] = useState ([]); 
    const {categoryParam} = useParams();

useEffect( ()=>{ 
  if (categoryParam === undefined){
    const promiseData = getProducts ();
    promiseData.then( (data) => {
        setProducts(data)

    }).catch( (error) => alert(`Error ${error}`))
  } else {
    getProductsByCategory(categoryParam)
    .then (response => setProducts(response)).catch( err => alert(err))
            
    }
}, [categoryParam])

    return (
        <section>
            <h1>{props.greeting}</h1>
            <p>Nuestros Productos</p>
            <div className="item-list">
      {
        products.map( function(item) 
        { return <Item 
          key={item.id} 
          {...item}          
        />})
      }
    </div>

        </section>
        

    )
}