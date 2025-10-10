import './NavBar.css'
import CartWidget from "./CartWidget"
import { Link } from 'react-router'
export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">
            <img className="logo" src="/logo.png" alt="logo"></img>
            </Link>
            
            <ul className="menu">
                <Link to="/category/Salon"><li>Salon</li></Link>
                <Link to= "/category/Dormitorio"><li>Dormitorio</li></Link>
                <Link to= "/category/Comedor"><li>Comedor</li></Link>
                <Link to= "/category/Banio"><li>Baño</li></Link>
                
            </ul>
            <div className= "nav-cart">
               <Link to="/cart"><CartWidget/></Link> 
            </div>
            
            
        </nav>
    )
}