

export default function Hero() {
  return (
    <div className="relative w-full h-[140px] overflow-hidden mb-4 rounded-xl">
    
      <img
        src='/hero-desktop.png'
        alt="Persona relajada en casa"
        className="absolute inset-0 w-auto h-full object-cover object-right"
        
      />

      
      <div className="absolute inset-0 bg-transparent flex items-center justify-start p-4
                      w-4/5 md:justify-center md:items-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold italic leading-tight text-left">
          Relax, estás en casa
        </h1>
      </div>
    </div>
  );
}