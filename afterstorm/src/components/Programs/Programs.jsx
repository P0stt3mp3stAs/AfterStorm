import React, { useEffect, useRef, useState } from 'react';
import './Programs.css'
import { react, js, html5, css, blender, ai, ps, figma, blackhole, } from '../../assets'
import ship from '../../assets/ship.png'
import black from '../../assets/black.png'
import leftrocket from '../../assets/left-rocket.png'
import rightrocket from '../../assets/right-rocket.png'
import button from '../../assets/button.png'
import clicked from '../../assets/clicked-button.png'

function Programs() {
  const shipRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const setContainerHeight = () => {
      const shipHeight = shipRef.current.clientHeight;
      const blackbg = document.getElementById('blackbg');
      blackbg.style.height = `${shipHeight}px`;
    };
    setContainerHeight();
    window.addEventListener('resize', setContainerHeight);

    return () => {
      window.removeEventListener('resize', setContainerHeight);
    };
  }, []);

  const handleClick = () => {
    animateButton();
    animateItem();
  };
  
  const animateButton = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowButton(true);
    }, 150);
  };
  
  const animateItem = () => {
    const items = document.querySelectorAll('.item');
  
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
  
    const animationDuration = 1500;
    const start = performance.now();
  
    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = elapsed / animationDuration;
  
      const initialBottom = window.innerHeight - selectedItem.getBoundingClientRect().bottom;
      const initialLeft = selectedItem.getBoundingClientRect().left;
  
      const finalBottom = window.innerHeight / 2 - selectedItem.clientHeight / 2;
      const finalLeft = window.innerWidth / 2 - selectedItem.clientWidth / 2;
  
      const currentBottom = initialBottom + (finalBottom - initialBottom) * progress;
      const currentLeft = initialLeft + (finalLeft - initialLeft) * progress;
  
      selectedItem.style.bottom = `${currentBottom}px`;
      selectedItem.style.left = `${currentLeft}px`;
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        selectedItem.style.bottom = '';
        selectedItem.style.left = '';
      }
    };
  
    requestAnimationFrame(animate);
  };

  return (
    <div id='blackbg'>

      <div className='buttonContainer' onClick={handleClick}>
        <div className='centerBottom'>
          {showButton ? (
            <img src={button} alt={button} className='button' />
          ) : (
            <img src={clicked} alt={clicked} className='clicked' />
          )}
        </div>
      </div>

      <div id='ship-container'>
        <img src={ship} alt={ship} id='ship' ref={shipRef} />
      </div>

      

      <div className='wrapper'>
        <div className='item'>
          <img src={react} alt={react} className='react logos' />
        </div>
        <div className='item'>
          <img src={js} alt={js} className='js logos' />
        </div>
        <div className='item'>
          <img src={html5} alt={html5} className='html5 logos' />
        </div>
        <div className='item'>
          <img src={css} alt={css} className='css logos' />
        </div>
        <div className='item'>
          <img src={blender} alt={blender} className='blender logos' />
        </div>
        <div className='item'>
          <img src={ai} alt={ai} className='ai logos' />
        </div>
        <div className='item'>
          <img src={ps} alt={ps} className='ps logos' />
        </div>
        <div className='item'>
          <img src={figma} alt={figma} className='figma logos' />
        </div>
      </div>
      
      <div>
        <img src={leftrocket} alt={leftrocket} id='leftrocket'/>
      </div>

      <div>
        <img src={rightrocket} alt={rightrocket} id='rightrocket'/>
      </div>

      <div id='blackholebg'>
        <img src={blackhole} alt={blackhole} className='blackhole' />
      </div>
      
      <div>
        <img src={black} alt={black} className='black'/>
      </div>

    </div>
  )
}
export default Programs