import { useEffect, useRef } from 'react';

const TypewriterAnimation = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const textArray = text.split('');
    let index = 0;

    const typingEffect = setInterval(() => {
      if (index < textArray.length) {
        textElement.textContent += textArray[index];
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, [text]);

  return <h2 ref={textRef} className="text-2xl font-semibold mb-4 text-left text-white"></h2>;
};

export default TypewriterAnimation;
