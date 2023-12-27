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
    animateOne();
    animateTwo();
  };
  
  const animateButton = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowButton(true);
    }, 150);
  };
  
  const animateOne = () => {
    const oneItems = document.querySelectorAll('.item.one');
    const randomIndex = Math.floor(Math.random() * oneItems.length);
    const selectedItem = oneItems[randomIndex];
  
    const animationDuration = 2000;
    const targetWidth = 0;
    const targetHeight = 0;
    const newPosition = { bottom: '50%', left: '50%' };
  
    selectedItem.style.transition = `all ${animationDuration / 1000}s ease`;
    selectedItem.style.bottom = newPosition.bottom;
    selectedItem.style.left = newPosition.left;
    selectedItem.style.width = `${targetWidth}%`;
    selectedItem.style.height = `${targetHeight}%`;
  
    setTimeout(() => {
      selectedItem.style.transition = 'none';
      selectedItem.style.bottom = '';
      selectedItem.style.left = '';
      selectedItem.style.width = '';
      selectedItem.style.height = '';
    }, animationDuration);
  };

  const animateTwo = () => {
    const twoItems = document.querySelectorAll('.item.two');
    const randomIndex = Math.floor(Math.random() * twoItems.length);
    const selectedItem = twoItems[randomIndex];

    const animationDuration = 2000;
    const targetWidth = 0;
    const targetHeight = 0;
    const newPosition = { bottom: '50%', right: '50%' };

      selectedItem.style.transition = `all ${animationDuration / 1000}s ease`;
      selectedItem.style.bottom = newPosition.bottom;
      selectedItem.style.right = newPosition.right;
      selectedItem.style.width = `${targetWidth}%`;
      selectedItem.style.height = `${targetHeight}%`;
  
      setTimeout(() => {
        selectedItem.style.transition = 'none';
        selectedItem.style.bottom = '';
        selectedItem.style.right = '';
        selectedItem.style.width = '';
        selectedItem.style.height = ''; 
      }, animationDuration);
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
        <div className='item one'>
          <img src={react} alt={react} className='react logos' />
        </div>
        <div className='item one'>
          <img src={js} alt={js} className='js logos' />
        </div>
        <div className='item one'>
          <img src={html5} alt={html5} className='html5 logos' />
        </div>
        <div className='item one'>
          <img src={css} alt={css} className='css logos' />
        </div>
        <div className='item one'>
          <img src={react} alt={react} className='react logos' />
        </div>
        <div className='item one'>
          <img src={js} alt={js} className='js logos' />
        </div>
        <div className='item one'>
          <img src={html5} alt={html5} className='html5 logos' />
        </div>
        <div className='item one'>
          <img src={css} alt={css} className='css logos' />
        </div>
        <div className='item one'>
          <img src={react} alt={react} className='react logos' />
        </div>
        <div className='item one'>
          <img src={js} alt={js} className='js logos' />
        </div>
        <div className='item one'>
          <img src={html5} alt={html5} className='html5 logos' />
        </div>
        <div className='item one'>
          <img src={css} alt={css} className='css logos' />
        </div>

        <div className='item two'>
          <img src={blender} alt={blender} className='blender logos' />
        </div>
        <div className='item two'>
          <img src={ai} alt={ai} className='ai logos' />
        </div>
        <div className='item two'>
          <img src={ps} alt={ps} className='ps logos' />
        </div>
        <div className='item two'>
          <img src={figma} alt={figma} className='figma logos' />
        </div>
        <div className='item two'>
          <img src={blender} alt={blender} className='blender logos' />
        </div>
        <div className='item two'>
          <img src={ai} alt={ai} className='ai logos' />
        </div>
        <div className='item two'>
          <img src={ps} alt={ps} className='ps logos' />
        </div>
        <div className='item two'>
          <img src={figma} alt={figma} className='figma logos' />
        </div>
        <div className='item two'>
          <img src={blender} alt={blender} className='blender logos' />
        </div>
        <div className='item two'>
          <img src={ai} alt={ai} className='ai logos' />
        </div>
        <div className='item two'>
          <img src={ps} alt={ps} className='ps logos' />
        </div>
        <div className='item two'>
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