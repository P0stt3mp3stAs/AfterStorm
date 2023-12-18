// import React from 'react'
import { A } from '../../assets'
import { B } from '../../assets'
import { C } from '../../assets'
import { D } from '../../assets'
import { E } from '../../assets'
import { F } from '../../assets'
import { G } from '../../assets'
import { H } from '../../assets'
import { I } from '../../assets'
import { J } from '../../assets'
import './Achievements.css'
import React, { forwardRef } from 'react';

const Achievements = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='achvmnt'>

      <div className='arrowPosition'>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
      </div>

      <div className='container'>
        <div>
          <img src={A} className='Ac'/>
        </div>
        <div>
          <img src={B} className='Ac'/>
        </div>
        <div>
          <img src={C} className='Ac'/>
        </div>
        <div>
          <img src={D} className='Ac'/>
        </div>
        <div>
          <img src={E} className='Ac'/>
        </div>
        <div>
          <img src={F} className='Ac'/>
        </div>
        <div>
          <img src={G} className='Ac'/>
        </div>
        <div>
          <img src={H} className='Ac'/>
        </div>
        <div>
          <img src={I} className='Ac'/>
        </div>
        <div>
          <img src={J} className='Ac'/>
        </div>
      </div>

      <div className='arrowPosition'>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
      </div>
      
    </div>
  );
});

export default Achievements
