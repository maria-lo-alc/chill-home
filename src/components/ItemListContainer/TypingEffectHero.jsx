import React, { useState, useEffect } from 'react';


const TypingEffect = ({ text, typingSpeed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    
    const startTyping = setTimeout(() => {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        }, typingSpeed); 
        return () => clearTimeout(timeoutId);
      }
    }, delay);

    return () => clearTimeout(startTyping); 
  }, [text, index, typingSpeed, delay]);

  return (
    
    <span className="text-white text-4xl italic font-bold"> 
      {displayedText}
      
      {index < text.length ? <span className="animate-blink">|</span> : ''}
    </span>
  );
};

export default TypingEffect;