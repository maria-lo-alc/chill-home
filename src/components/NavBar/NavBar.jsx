import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget"; 

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    const linkStyle = "text-lg  text-[#222] hover:underline hover:text-[#4682B4] transition duration-150";

    return (
        <nav className="w-full h-20 bg-white/90 flex items-center justify-between px-4 md:px-5 z-10 sticky top-0">
            
            
            <Link to="/">
                <img className="h-6 md:h-7" src="/logo.png" alt="logo"></img>
            </Link>

            
            <ul className={`
            
                absolute top-20 left-0 w-full bg-white flex-col items-center gap-6 py-8 text-lg transition-transform duration-300 ease-in-out
                
                /* LÓGICA DE VISIBILIDAD */
                ${isOpen ? 'flex' : 'hidden'} 
                
                /* ESTILOS DESKTOP */
                md:flex md:flex-row md:static md:w-auto md:bg-transparent md:shadow-none md:gap-8 md:py-0
            `}>
                <Link to="/category/Salon" className={linkStyle} onClick={() => setIsOpen(false)}>Salon</Link>
                <Link to="/category/Dormitorio" className={linkStyle} onClick={() => setIsOpen(false)}>Dormitorio</Link>
                <Link to="/category/Comedor" className={linkStyle} onClick={() => setIsOpen(false)}>Comedor</Link>
                <Link to="/category/Banio" className={linkStyle} onClick={() => setIsOpen(false)}>Baño</Link> 
            </ul>

            {/* BOTONES MÓVIL (Carrito + Hamburguesa) */}
            <div className="flex items-center space-x-4 md:hidden">
                <div className="nav-cart">
                    <Link to="/cart"><CartWidget/></Link> 
                </div>
                
                <button
                    onClick={toggleMenu}
                    className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" /> 
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" /> 
                        )}
                    </svg>
                </button>
            </div>

            {/* CARRITO DESKTOP */}
            <div className="hidden md:block nav-cart">
                <Link to="/cart"><CartWidget/></Link> 
            </div>
            
        </nav>
    );
}