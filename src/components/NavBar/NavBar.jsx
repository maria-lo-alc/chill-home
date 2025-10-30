import React, { useState } from 'react';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    const linkStyle = "font-primary text-lg font-semibold text-[#222] hover:text-[#4682B4] transition duration-150";

    return (
     
        <nav className="w-full h-20 bg-white/60 flex items-center justify-between px-4 md:px-5  z-10 sticky top-0">
            
            
            <Link to="/">
                <img className="h-6 lg:h-8" src="/logo.png" alt="logo"></img>
            </Link>

           
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


            {/* 3. MENÚ DE ENLACES (UL) - Estilos Condicionales */}
            <ul className={`
                // Clases que siempre se aplican en todas las vistas (MD y más)
                flex flex-col md:flex-row md:space-x-8
                
                // Control de visibilidad en móvil basado en el estado
                ${isOpen ? 'block' : 'hidden'} 
                
                // Posicionamiento para móvil (se expande a lo ancho, debajo del NavBar)
                absolute top-20 left-0 w-full bg-white md:static md:w-auto md:h-auto md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none
                
                // Muestra la lista en desktop
                md:flex
            `}>
                {/* ENLACES - Se convierten en bloques verticales en móvil */}
                <Link to="/category/Salon" className={`${linkStyle} block py-2 md:py-0`}>Salon</Link>
                <Link to="/category/Dormitorio" className={`${linkStyle} block py-2 md:py-0`}>Dormitorio</Link>
                <Link to="/category/Comedor" className={`${linkStyle} block py-2 md:py-0`}>Comedor</Link>
                <Link to="/category/Banio" className={`${linkStyle} block py-2 md:py-0`}>Baño</Link> 
            </ul>

            {/* 4. WIDGET DE CARRITO - EXCLUSIVO PARA ESCRITORIO */}
            {/* Ocultamos el carrito en escritorio si ya está visible en el grupo de iconos anterior (punto 2) */}
            <div className="hidden md:block nav-cart">
                <Link to="/cart"><CartWidget/></Link> 
            </div>
            
        </nav>
    );
}