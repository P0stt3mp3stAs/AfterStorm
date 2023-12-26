import React, { useEffect } from 'react';
import './StarryBackground.css';

const StarryBackground = ({ starCount = 50, starSize = 2 }) => {
  useEffect(() => {
    const generateStars = () => {
      const starsContainer = document.querySelector('.starry-background');

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;
        star.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        starsContainer.appendChild(star);
      }
    };

    generateStars();
  }, [starCount, starSize]);

  return <div className="starry-background" />;
};

export default StarryBackground;