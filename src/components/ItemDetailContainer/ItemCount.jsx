import { useState } from 'react';

function ItemCount({onAdd}) {
    const [count, setCount] = useState(1);
    
    function handleIncrement () {
        setCount(count +1);
    }
function handleDecrement() {
 if (count >1) {
    setCount(count -1);
 }
    }

    
    return (
        <div>

            <button onClick={handleDecrement}> - </button>
           
            <span>{count}</span>
       
            <button onClick={handleIncrement}> + </button>
          
            <button  onClick={() => onAdd(count)} 
                disabled={count === 0}>Agregar al Carrito </button>
        </div>
    );
}

export default ItemCount;