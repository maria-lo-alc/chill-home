
import CartWidget from "./CartWidget"
import { Link } from 'react-router'
export default function NavBar() {
    return (
        <nav className="w-full h-20 bg-white  flex items-center justify-between px-20 border-b">
            <Link to="/">
            <img className="h-9" src="/logo.png" alt="logo"></img>
            </Link>
            
            <ul className="flex space-x-8 ">
                
                <Link 
                to="/category/Salon"
                className="display-block text-lg font-semibold text-[#222] hover:text-[#4682B4] transition duration-150">
                    Salon</Link>
                <Link 
                to= "/category/Dormitorio"
                className="display-block text-lg font-semibold text-[#222] hover:text-[#4682B4] transition duration-150" 
                >Dormitorio</Link>
                <Link 
                to= "/category/Comedor" 
                className="display-block text-lg font-semibold text-[#222] hover:text-[#4682B4] transition duration-150"
                >Comedor</Link>
                <Link 
                to= "/category/Banio" 
                className="display-block text-lg font-semibold text-[#222] hover:text-[#4682B4] transition duration-150"
                >Baño</Link> 
                
            </ul>
            <div className= "nav-cart">
               <Link to="/cart"><CartWidget/></Link> 
            </div>
            
            
        </nav>
    )
}