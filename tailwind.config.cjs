

/** @type {import('tailwindcss').Config} */
module.exports = { // ¡CAMBIAR 'export default' a 'module.exports'!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{ts,js,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Para el logo (Playfair Display)
        'logo': ['"Playfair Display"', 'serif'], // Lo agregué por si lo quieres usar
        // Para el resto del texto (Open Sans)
        'sans': ['"Open Sans"', 'sans-serif'], 
        'sans-italic': ['"Open Sans"', 'font-medium', 'italic'],
      },
      // Definición de tus colores de marca
      colors: {
        'chill-dark': '#222', 
        'chill-background': '#F8F8F8', 
        'chill-accent-blue': '#4682B4', 
        'chill-accent-blue-hover': '#3A6A92', 
        'chill-price': '#666', 
        'chill-stock-warning': '#D9B8C4', 
        'temp-fix': '#000000'
      },
    },
  },
  plugins: [],
}