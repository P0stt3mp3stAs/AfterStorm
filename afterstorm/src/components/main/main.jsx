import React, { useState, useEffect } from 'react';
import './main.css'

const Main = () => {
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
    
    <div className='main'>

      <div className='text'>
        <h2>Welcome to my portfolio,</h2>
        <br></br>
        <h3>where creativity meets innovation.</h3>
      </div>

      <div className='contaner'>
        <div className='xbar'>
          <div className='red'></div>
          <div className='yellow'></div>
          <div className='green'></div>
        
        </div>

        <div className="terminal">
          <div></div>
          <p>❯ Hello!</p>
          <p>{text}</p>
        </div>
        <div className='terminalbg'></div>
      </div>

    </div>
  );
};

export default Main;