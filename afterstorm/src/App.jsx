import './App.css';
import Navbar from './components/Navbar/Navbar';
import StarrySky from './components/StarrySky/StarrySky';
import Main from './components/main/main';
import ImgLoop from './components/ImgLoop/ImgLoop';
import Achievements from './components/Achievements/Achievements';
import Programs from './components/Programs/Programs';
import Footer from './components/Footer/Footer';
import StarryBackground from './components/StarryBackground/StarryBackground';
import React, { useRef, useState, useEffect  } from 'react';

const App = () => {
  const mainComponentRef = useRef(null);
  const achievementsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="App">
      {/* <StarryBackground starCount={1000} starSize={1} /> */}
      {/* <StarrySky /> */}
      {/* <Navbar 
        mainComponentRef={mainComponentRef} 
        achievementsRef={achievementsRef} 
        footerComponentRef={footerRef}  
      /> */}
      {/* <ImgLoop /> */}
      {/* <Main ref={mainComponentRef}/> */}
      {/* <Achievements ref={achievementsRef} /> */}
      <Programs />
      {/* <Footer ref={footerRef} /> */}
    </div>
  );
}

export default App;