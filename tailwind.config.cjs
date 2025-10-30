

/** @type {import('tailwindcss').Config} */
module.exports = { 
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
     
    },
  },
  plugins: [],
}