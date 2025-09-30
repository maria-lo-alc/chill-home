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
                <Link to="/category/costura"><li>Costura</li></Link>
                <Link to= "/category/manualidades"><li>Manualidades</li></Link>
                <Link to= "/category/bordado"><li>Bordado</li></Link>
                
            </ul>
            <div className= "nav-cart">
               <Link to="/cart"><CartWidget/></Link> 
            </div>
            
            
        </nav>
    )
}