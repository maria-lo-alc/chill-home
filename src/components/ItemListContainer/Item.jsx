 
import {Link} from 'react-router'  
import { useState } from 'react';

 
function Item ({ id, title, img, price, description, imgalt, imghover, stock }) {
    const [isHovered, setIsHovered] = useState(false);
    return ( <div className="w-full bg-white overflow-hidden "
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} >
   <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
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
    <div className= "flex justify-between ">
    <h3 className="font-['Open_Sans',_sans-serif] text-xl font-bold italic text-[#222] mb-1 mt-1">{title}</h3>
    <p className="text-2xl font-bold text-[#222]">{`$${price}`}</p> 
    </div>
    <Link to={`/detail/${id}`}>
    <button className="bg-[#4682B4] rounded-xl text-amber-50 ">Ver detalle</button>
    </Link>
    
    </div>
    )  
}
export default Item; 