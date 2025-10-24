
import {getProducts, getProductsByCategory} from "../../data/firebase";
import Hero from "./Hero";
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
        <section >
          <Hero />
          <h1 className="text-white">Nuestros productos</h1>
            
            <div className="grid grid-cols-3 gap-7">
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