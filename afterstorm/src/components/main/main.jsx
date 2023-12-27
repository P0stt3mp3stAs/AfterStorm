import React, { useState, useEffect, forwardRef } from 'react';
import './main.css'
import { aboutbg } from '../../assets';

const Main = forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const messages = [
    '❯ This is a homosepian\n❯ <Elghali_Wali_Alami>\n❯ ./Africa/morocco\n❯ Front-en Web Dveloper\n❯ junior in:\n React_\n javascrip_\n html_\n css_\n❯ .'
  ];

  useEffect(() => {
    let index = 0;
    let timer;

    const loopText = () => {
      timer = setTimeout(() => {
        setText(prevText => {
          if (prevText === messages[index]) {
            // Animation completed, show cursor for 2 seconds and restart animation
            setShowCursor(false); // Hide cursor
            setTimeout(() => {
              setShowCursor(true); // Show cursor after 2 seconds
              setTimeout(() => {
                index = (index + 1) % messages.length;
                setText('');
                loopText(); // Restart animation loop
              }, 100); // Delay before restarting animation
            }, 2000); // Pause for 2 seconds
            return messages[index];
          }
          return prevText + messages[index].charAt(prevText.length);
        });
      }, 100);
    };

    const blinkCursor = () => {
      setInterval(() => {
        setShowCursor(prevState => !prevState); // Alternate cursor visibility every 500ms
      }, 20000);
    };

    loopText();
    blinkCursor();

    return () => clearTimeout(timer);
  }, [messages]);

  return (
    
    <div ref={ref} className='about'>
      <div className='main'>
        <div className='text'>
          <h2>AFTER STORM</h2>
          <br></br>
          <h3>The beauty of the creativity after long days of code</h3>
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