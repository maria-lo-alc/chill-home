import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes, Route } from 'react-router'

function App() {

  return (
    <main>
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
        <Route path= "/cart" element= {<div><h1>Carrito</h1></div>   }/>
        <Route path= "*" element= {<h1> Ups! Página no encontrada</h1>}/>
      </Routes>
      
   </BrowserRouter>
    </main>
  )
}

export default App
