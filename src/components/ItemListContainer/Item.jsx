 
import {Link} from 'react-router'  
import { useState } from 'react';

 
function Item ({ id, title, img, price, description, imgalt, imghover, stock }) {
    const [isHovered, setIsHovered] = useState(false);
    return ( <div className="w-full bg-white overflow-hidden "
             >
   <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl"
   onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>

    <img 
                    src={img} 
                    alt={imgalt} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <img 
                    src={imghover} 
                    alt={imgalt} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />


    </div> 
    <div className= "flex justify-between items-center mt-3 mb-4 pr-2 px-2">
    <h3 className="font-['Open_Sans',_sans-serif] text-base font-semibold italic text-[#222] mb-1 mt-1">{title}</h3>
    <p className="text-xl font-bold text-[#222]">{`$${price}`}</p> 
    </div>
    <Link to={`/detail/${id}`} className="flex justify-center">
    <button className="bg-chill-blue rounded-3xl text-amber-50  py-2 font-semibold text-center transition duration-150 hover:bg-chill-blue-hover pr-4 pl-4">Ver detalle</button>
    </Link>
    
    </div>
    )  
}
export default Item; 