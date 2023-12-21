import React from 'react'
import './Programs.css'
import { react, js, html5, css, blender, ai, ps, figma, blackhole, } from '../../assets'

function Programs() {
  return (
    <div id='blackbg'>

      <div id='blackholebg'>
        <img src={blackhole} alt={blackhole} className='blackhole' />
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

    </div>
  )
}
export default Programs