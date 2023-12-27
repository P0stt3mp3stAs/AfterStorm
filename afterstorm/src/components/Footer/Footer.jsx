// import React from 'react';
import React, { forwardRef } from 'react';
import StarryBackground from '../StarryBackground/StarryBackground';

import "./Footer.css";
import { sunburn, light, Lname, li, ig, mail, git, x, co } from '../../assets';

const Footer = forwardRef((props, ref) => {
  const handleMailClick = () => {
    window.location.href = 'mailto:ghaliwali@gmail.com';
  };
  
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/elghali-wali-alami-4082a5207/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/t0dd3r1k/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/P0stt3mp3stAs', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/P0stt3mp3stAs', '_blank');
  };

  const handleCourseraClick = () => {
    window.open('https://www.coursera.org/user/dadda33a04c1ffd169c0520dd7e948f0', '_blank');
  };

  return (
    <div ref={ref} className='feet'>
        <div className='footer'>
          
          <div className='mainfooter'>
            <img src={light} alt='light' className='light' />
            <img src={sunburn} alt='sunburn' className='sunburn' />
            <img src={Lname} alt='Lname' className='Lname' />
          </div>


          <div className='contacts'>
            <div className='contacts-slid'>
              <a onClick={handleLinkedInClick}>
                <img src={li} alt='LinkedIn' />
              </a>

              <a onClick={handleInstagramClick}>
                <img src={ig} alt='Instagram' />
              </a>

              <a onClick={handleMailClick}>
                <img src={mail} alt='Mail' />
              </a>

              <a onClick={handleGitHubClick}>
                <img src={git} alt='GitHub' />
              </a>

              <a onClick={handleTwitterClick}>
                <img src={x} alt='Twitter' />
              </a>

              <a onClick={handleCourseraClick}>
                <img src={co} alt='Coursera' />
              </a>
            </div>

            <div className='contacts-slid'>
            <a onClick={handleLinkedInClick}>
                <img src={li} alt='LinkedIn' />
              </a>

              <a onClick={handleInstagramClick}>
                <img src={ig} alt='Instagram' />
              </a>

              <a onClick={handleMailClick}>
                <img src={mail} alt='Mail' />
              </a>

              <a onClick={handleGitHubClick}>
                <img src={git} alt='GitHub' />
              </a>

              <a onClick={handleTwitterClick}>
                <img src={x} alt='Twitter' />
              </a>

              <a onClick={handleCourseraClick}>
                <img src={co} alt='Coursera' />
              </a>
            </div>
            
            <div className='contacts-slid'>
            <a onClick={handleLinkedInClick}>
                <img src={li} alt='LinkedIn' />
              </a>

              <a onClick={handleInstagramClick}>
                <img src={ig} alt='Instagram' />
              </a>

              <a onClick={handleMailClick}>
                <img src={mail} alt='Mail' />
              </a>

              <a onClick={handleGitHubClick}>
                <img src={git} alt='GitHub' />
              </a>

              <a onClick={handleTwitterClick}>
                <img src={x} alt='Twitter' />
              </a>

              <a onClick={handleCourseraClick}>
                <img src={co} alt='Coursera' />
              </a>
            </div>
          </div>

        </div>
        <div className='footersky'>
          <StarryBackground starCount={1000} starSize={1} />
        </div>
        
    </div>
  )
});

export default Footer
