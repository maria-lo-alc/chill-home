import './NavBar.css'
import CartWidget from "./CartWidget"
export default function NavBar() {
    return (
        <nav className="navbar">
            <img className="logo" src="/logo.png" alt="logo"></img>
            <ul className="menu">
                <li href="#">Kits</li>
                <li href="#">Talleres</li>
                <li href="#">Bordados</li>
            </ul>
            <CartWidget/>
            
        </nav>
    )
}