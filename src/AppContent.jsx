import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import DynamicHero from './components/Hero/DynamicHero'; 
import NotFound from './components/NotFound';

export default function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const categoryParam = currentPath.startsWith('/category/')
    ? currentPath.split('/')[2]
    : null;

  return (
    <>
      <NavBar />
      <DynamicHero currentPath={currentPath} categoryParam={categoryParam} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail/:idParam" element={<ItemDetailContainer />} />
        <Route
          path="/category/:categoryParam"
          element={<ItemListContainer greeting="Categorias" />}
        />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}