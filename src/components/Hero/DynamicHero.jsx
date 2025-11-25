const heroImages = {
  home: {
    img: '/hero-desktop.png',
text: 'Relax, estás en casa',
  },
  salon: {
    img: '/hero-salon.png',
       text: 'Confort y estilo para tu Sala',
  },
  dormitorio: {
    img: '/hero-dormitorio.png',
       text: 'Tu espacio ideal para descansar',
  },
  comedor: {
    img: '/hero-comedor.png',
       text: 'Momentos únicos en tu Comedor',
  },
  banio: {
    img: '/hero-banio.png',
       text: 'Relajación y Diseño en tu Baño',
  },
  };

export default function DynamicHero({ currentPath, categoryParam }) {
  let heroConfig;

  if (currentPath === '/') {
    heroConfig = heroImages.home;
  } else if (categoryParam) {
        heroConfig = heroImages[categoryParam.toLowerCase()];
      } else {
       heroConfig = null;   }

    if (!heroConfig) {
    return null;
  }

   return (
    <div className="relative w-full h-[140px] overflow-hidden mb-5 rounded-xl">       
      <img
        src={heroConfig.img} 
        alt={heroConfig.text} 
        className="absolute inset-0 w-auto h-full object-cover object-right"
      />

      {/* Capa de texto superpuesta */}
      <div className="absolute inset-0 bg-transparent flex items-center justify-start p-4
                      md:w-4/5 md:justify-center md:items-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold italic leading-tight text-left">
          {heroConfig.text}
        </h1>
      </div>
    </div>
  );
}