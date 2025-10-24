
import { useState } from 'react';


function ItemCount({onAdd, onAddToast, max}) {
    const [count, setCount] = useState(1);
    
    function handleIncrement () {
      if (count < max) {
    setCount(count + 1);
  }
    }
function handleDecrement() {
 if (count >1) {
    setCount(count -1);
 }
    }

    
    return (
      <div className='flex' >
        <div className='!flex !items-center !justify-between !border !border-gray-400 !rounded-full w-fit' >

            <button onClick={handleDecrement} className='!text-xl !font-bold !px-4 !py-2 !text-gray-700 !hover:bg-gray-100 !rounded-l-full !transition duration-150'> - </button>
           
            <span className='text-lg font-semibold px-3'>{count}</span>
       
            <button onClick={handleIncrement} className='!text-xl !font-bold !px-4 !py-2 !text-gray-700 !hover:bg-gray-100 !rounded-r-full !transition !duration-150'> + </button>
          </div>
            <button  onClick={() => { onAdd(count); onAddToast(count); }} 
                disabled={count === 0} className='!bg-[#4682B4] !rounded-3xl !text-amber-50  !py-2 !font-semibold !text-center !transition !duration-150 !hover:opacity-30 !pr-4 !pl-4'>Agregar al Carrito </button>
        
        </div>
    );
}

export default ItemCount;