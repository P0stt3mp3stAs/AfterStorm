import React from 'react'
import './About.css'
import { aboutbg } from '../../assets'

const About = () => {
  return (
    <div className='aboutcontainer'>
      <div className='about'>
        <p className='abouttext'>Welcome to my world of front-end portfolio that brings code to life. <br></br>From sleek designs to interactive experiences, explore the artistry of modern web development. Join me on this journey through digital innovation and creativity.</p>
      </div>
      <div className='aboutbg'>
        <img src={aboutbg} alt='aboutbg' className='sun' />
      </div>
    </div>
  )
}

export default About

