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
import { ACHIEVEMENTS } from '../../assets'

const Achievements = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='all'>
        <div className='title'>
          <div className='h1'>ACHIEVEMENTS</div>
        </div>
        <div className='cerificates'>
          <div className='cerificates-slide'>
            <img src={A} />
            <img src={B} />
            <img src={C} />
            <img src={D} />
            <img src={E} />
            <img src={F} />
            <img src={G} />
            <img src={H} />
            <img src={I} />
            <img src={J} />
          </div>
          <div className='cerificates-slide'>
            <img src={A} />
            <img src={B} />
            <img src={C} />
            <img src={D} />
            <img src={E} />
            <img src={F} />
            <img src={G} />
            <img src={H} />
            <img src={I} />
            <img src={J} />
          </div>
        </div>
    </div>
  );
});

export default Achievements
