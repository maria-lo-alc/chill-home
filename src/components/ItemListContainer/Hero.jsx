import TypingEffect from './TypingEffectHero'; 

function Hero() {
    return (
        <div className='flex ' >
            <div className="relative h-[100px] left-0 top-0  w-1/3 bg-cover rounded-l-xl" style={{ backgroundImage: 'url("/hero_left.png")' }}>
            </div>
        <div 
            className="relative w-2/3 h-[100px] bg-cover bg-left flex items-center justify-center rounded-r-xl" 
            style={{ backgroundImage: 'url("/hero_right.png")' }} 
        >
           
            <div className="absolute inset-0 flex items-center justify-center "> 
                <TypingEffect 
                    text="Relax, estás en casa" 
                    typingSpeed={100} 
                    delay={100} 
                />
            </div>
</div>
             
        
        </div>
    );
}

export default Hero;