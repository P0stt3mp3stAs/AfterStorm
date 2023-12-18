import React, { useEffect, useRef } from 'react';
import Star from './Star'; // Import the Star component
import './StarrySky.css'; // Import your CSS file

const StarrySky = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const moveStars = (e) => {
      const stars = starsRef.current.childNodes;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      stars.forEach((star) => {
        const rect = star.getBoundingClientRect();
        const starX = rect.left + rect.width / 2;
        const starY = rect.top + rect.height / 2;

        const dx = mouseX - starX;
        const dy = mouseY - starY;

        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;
        const moveAmount = Math.min(20, (maxDistance - distance) / maxDistance * 20);

        const angle = Math.atan2(dy, dx);
        const xMove = Math.cos(angle) * moveAmount;
        const yMove = Math.sin(angle) * moveAmount;

        star.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    };

    document.addEventListener('mousemove', moveStars);

    return () => {
      document.removeEventListener('mousemove', moveStars);
    };
  }, []);

  const numberOfStars = 1000; // Number of stars

  const stars = Array.from({ length: numberOfStars }, (_, i) => (
    <Star key={i} top={`${Math.random() * 100}%`} left={`${Math.random() * 100}%`} />
  ));

  return (
    <div className="starry-sky" ref={starsRef}>
      {stars}
    </div>
  );
};

export default StarrySky;