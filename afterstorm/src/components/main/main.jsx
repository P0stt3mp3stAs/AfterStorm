import React, { useState, useEffect, forwardRef } from 'react';
import './main.css'
import { aboutbg } from '../../assets';

const Main = forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const messages = ['  Welcome to the terminal.\n  Welcome to the terminal.\n  Type anything here.'];

  useEffect(() => {
    let index = 0;
    let timer;

    const loopText = () => {
      timer = setTimeout(() => {
        setText(prevText => prevText + messages[index].charAt(prevText.length));
        if (text === messages[index]) {
          index = (index + 1) % messages.length;
          setText('');
        }
        loopText();
      }, 100);
    };

    loopText();

    return () => clearTimeout(timer);
  }, [text]);

  return (
    
    <div ref={ref} className='about'>
      <div className='main'>
        <div className='text'>
          <h2>Welcome to my portfolio,</h2>
          <br></br>
          <h3>world of front-end that brings life to code and creativity meets innovation.</h3>
          <p className='welcome'>From sleek designs to interactive experiences, explore the artistry of modern web development. Join me on this journey through digital innovation and creativity.</p>
        </div>

        <div className='contaner'>
          <div className='xbar'> 
            <div className='red'></div>
            <div className='yellow'></div>
            <div className='green'></div>
          </div>

          <div className="terminal">
            <p>❯ Hello!</p>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className='aboutbg'>
        <img src={aboutbg} alt='aboutbg' className='sun' />
      </div>


    </div>
  );
});

export default Main;