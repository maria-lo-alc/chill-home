import { useState } from 'react';

function ItemCount() {
    // 1. Define the state here
    const [count, setCount] = useState(1);
    
    function handleIncrement () {
        setCount(count +1);
    }
function handleDecrement() {
 if (count >1) {
    setCount(count -1);
 }
    }

    // 2. Return the basic JSX structure (buttons and quantity display)
    return (
        <div>
            {/* Decrement Button */}
            <button onClick={handleDecrement}> - </button>
            {/* Quantity Display */}
            <span>{count}</span>
            {/* Increment Button */}
            <button onClick={handleIncrement}> + </button>
            {/* Add to Cart Button */}
            <button>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;