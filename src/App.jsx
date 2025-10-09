import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes, Route } from 'react-router'
import  {CartProvider}   from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer'

function App() {


  return (
    <main>
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= "/" element= { <ItemListContainer greeting="Bienvenidos a la tiendita"/>}/>
        <Route 
        path= "/detalle/:idParam" 
        element= {<ItemDetailContainer/>  }/>
        <Route 
        path= "/category/:categoryParam"
        element = {<ItemListContainer greeting= "Categorias"/>}></Route>
        <Route path= "/cart" element= {<CartContainer/>   }/>
        <Route path= "*" element= {<h1> Ups! Página no encontrada</h1>}/>
      </Routes>
      
   </BrowserRouter>
   </CartProvider>
    </main>
  )
}

export default App
