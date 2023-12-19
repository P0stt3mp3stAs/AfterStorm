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
import StarrySky from '../StarrySky/StarrySky';

const Footer = () => {
  return (
    <div className='feet'>
        <div className='footer'>
          
          {/* <div className='X'>

            <div className='smc'>
              <img src={mail} alt='mail' className='sm' />
            </div>

            <div className='smc'>
              <img src={x} alt='x' className='sm' />
            </div>

            <div className='smc'>
              <img src={ig} alt='ig' className='sm' />
            </div>

          </div> */}

          <div className='mainfooter'>
            <img src={light} alt='light' className='light' />
            <img src={sunburn} alt='sunburn' className='sunburn' />
            <img src={Lname} alt='Lname' className='Lname' />
          </div>

          {/* <div className='Git'>

            <div className='smc'>
              <img src={git} alt='git' className='sm' />
            </div>

            <div className='smc'>
              <img src={li} alt='li' className='sm' />
            </div>

            <div className='smc'>
              <img src={co} alt='c' className='sm' />
            </div>

          </div> */}

        </div>

      <div className="bg">
        <StarrySky />
      </div>
    </div>
  )
}

export default Footer
