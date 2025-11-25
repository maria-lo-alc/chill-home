import {Link } from "react-router";
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center not-found bg-cover bg-center h-60 rounded-xl">    
        <h1 className="italic mb-1 text-amber-50">Ups! Aqui no se ve nada</h1>
        <Link to="/">
          <button className='bg-chill-blue rounded-3xl text-amber-50  py-2 font-semibold text-center transition duration-150 hover:opacity-30 pr-4 pl-4'>Ir al inicio</button>
        </Link>
        </div>) }