import React, { useState, useEffect, forwardRef } from 'react';
import './main.css'
import { aboutbg } from '../../assets';

const Main = forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const messages = [
    '❯ This is a homosapien\n❯ <Elghali_Wali_Alami>\n❯ ./Africa/morocco\n❯ Front-end Web Dveloper\n❯ junior in:\n React_\n javascrip_\n html_\n css_\n❯ # # # # # # # # # # # # #'
  ];

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let timer;

    const loopText = () => {
      timer = setTimeout(() => {
        if (charIndex === messages[index].length) {
          index = (index + 1) % messages.length;
          charIndex = 0;
          setText("");
        } else {
          setText((prevText) => prevText + messages[index].charAt(charIndex));
          charIndex++;
        }
        loopText();
      }, 100);
    };

    loopText();

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <div ref={ref} className='about'>
      <div className='main'>
        <div className='text'>
          {/* <h2>AFTER STORM</h2> */}
          <br></br>
          <h3>The beauty of the creativity <br></br> after long days of code</h3>
          <p className='welcome'>I am proudly to say that I self thought my way into life, I learned a lot of things from art to web development, <br></br>3D, illustrations, color grading, photoshop, video editting,... <br></br>I will never stop learning because life is limiteless </p>
        </div>

        <div className='contaner'>
          <div className='xbar'>
            <div className='red'></div>
            <div className='yellow'></div>
            <div className='green'></div>
          </div>

          <div className="terminal">
            <p>❯ Hello World!</p>
            <p className='t_text'>{text}{showCursor ? '|' : ''}</p>
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