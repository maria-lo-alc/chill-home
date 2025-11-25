import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import AppContent from './AppContent'; // Importa el componente AppContent

function App() {
  return (
    <main id="root" className="font-sans text-chill-dark bg-chill-background max-w-[1440px] mx-auto px-5 lg:px-32">
      <PrimeReactProvider>
        <CartProvider>
          <BrowserRouter>
            {/* Aquí es donde AppContent vive, envuelto por todos los contextos */}
            <AppContent />
          </BrowserRouter>
        </CartProvider>
      </PrimeReactProvider>
    </main>
  );
}

export default App;