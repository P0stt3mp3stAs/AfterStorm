import React from 'react'
import "./Footer.css";
import { sunburn } from '../../assets';
import { light } from '../../assets';
import { Lname } from '../../assets';
import { li } from '../../assets';
import { ig } from '../../assets';
import { mail } from '../../assets';
import { git } from '../../assets';
import { x } from '../../assets';
import { co } from '../../assets';

const Footer = () => {
  return (
    <div className='feet'>
        <div className='footer'>
          
          <div className='mainfooter'>
            <img src={light} alt='light' className='light' />
            <img src={sunburn} alt='sunburn' className='sunburn' />
            <img src={Lname} alt='Lname' className='Lname' />
          </div>

          {/* <div className='contacts'>
            <div className='contacts-slide'>
              <img src={li} />
              <img src={ig} />
              <img src={mail} />
              <img src={git} />
              <img src={x} />
              <img src={co} />
            </div>
          </div> */}

        </div>

      
    </div>
  )
}

export default Footer
