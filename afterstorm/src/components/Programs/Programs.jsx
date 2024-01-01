import React, { useRef, useState, forwardRef } from 'react';
import './Programs.css'
import { react, js, html5, css, blender, ai, ps, figma, blackhole, } from '../../assets'
import ship from '../../assets/ship.png'
import rocket from '../../assets/rocket.png'
import button from '../../assets/button.png'
import clicked from '../../assets/clicked-button.png'
import StarryBackground from '../StarryBackground/StarryBackground';

  const Programs = forwardRef((props, ref) => {
  const shipRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    animateButton();
    shootItems();
  };
  
  const animateButton = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowButton(true);
    }, 150);
  };
  
  const shootItems = () => {
    const wrapper = document.querySelector('.wrapper');
    const items = wrapper.querySelectorAll('.item');
  
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
  
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
  }

  // const shootItems = () => {
  //   const wrapper = document.querySelector('.wrapper');
  //   const items = wrapper.querySelectorAll('.item');
  
  //   const randomIndex = Math.floor(Math.random() * items.length);
  //   const selectedItem = items[randomIndex];
  
  //   const animationDuration = 2000;
  //   const targetWidth = 0;
  //   const targetHeight = 0;
  
  //   // Calculate half of the item's width and height
  //   const itemWidth = selectedItem.offsetWidth / 2;
  //   const itemHeight = selectedItem.offsetHeight / 2;
  
  //   // Calculate the new position to adjust for the item's dimensions
  //   const newPosition = {
  //     bottom: `calc(50% - ${itemHeight}px)`,
  //     left: `calc(50% - ${itemWidth}px)`,
  //   };
  
  //   selectedItem.style.transition = `all ${animationDuration / 1000}s ease`;
  //   selectedItem.style.bottom = newPosition.bottom;
  //   selectedItem.style.left = newPosition.left;
  //   selectedItem.style.width = `${targetWidth}%`;
  //   selectedItem.style.height = `${targetHeight}%`;
  
  //   setTimeout(() => {
  //     selectedItem.style.transition = 'none';
  //     selectedItem.style.bottom = '';
  //     selectedItem.style.left = '';
  //     selectedItem.style.width = '';
  //     selectedItem.style.height = '';
  //   }, animationDuration);
  // };

  return (
    <div ref={ref} id='blackbg'>

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
          <img src={blender} alt={blender} className='blender logos' />
        </div>
        <div className='item one'>
          <img src={ai} alt={ai} className='ai logos' />
        </div>
        <div className='item one'>
          <img src={ps} alt={ps} className='ps logos' />
        </div>
        <div className='item one'>
          <img src={figma} alt={figma} className='figma logos' />
        </div>
      </div>
      
      <div>
      <img src={rocket} alt={rocket} id='rocket' />
      </div>

      <div id='blackholebg'>
        <img src={blackhole} alt={blackhole} className='blackhole' />
      </div>
      
      {/* <StarryBackground starCount={1000} starSize={1} /> */}

    </div>
  )
});
export default Programs