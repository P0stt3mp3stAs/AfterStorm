import React from 'react'
import './Programs.css'
import { react, js, html5, css, blender, ai, ps, figma, } from '../../assets'

function Programs() {
  return (
    <div className='wrapper'>

      <div className='item'>
        <img src={react} alt={react} className='logos' />
      </div>
      <div className='item'>
        <img src={js} alt={js} className='logos' />
      </div>
      <div className='item'>
        <img src={html5} alt={html5} className='logos' />
      </div>
      <div className='item'>
        <img src={css} alt={css} className='logos' />
      </div>
      <div className='item'>
        <img src={blender} alt={blender} className='logos' />
      </div>
      <div className='item'>
        <img src={ai} alt={ai} className='logos' />
      </div>
      <div className='item'>
        <img src={ps} alt={ps} className='logos' />
      </div>
      <div className='item'>
        <img src={figma} alt={figma} className='figma' />
      </div>

    </div>
  )
}
export default Programs