import './App.css';
import Navbar from './components/Navbar/Navbar';
import StarrySky from './components/StarrySky/StarrySky';
import Main from './components/main/main';
import ImgLoop from './components/ImgLoop/ImgLoop';
import Achievements from './components/Achievements/Achievements';
import Programs from './components/Programs/Programs';
import Footer from './components/Footer/Footer';
import React, { useRef } from 'react';

const App = () => {
  const mainComponentRef = useRef(null);
  const achievementsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="App">
      <StarrySky />
      <Navbar 
        mainComponentRef={mainComponentRef} 
        achievementsRef={achievementsRef} 
        footerComponentRef={footerRef}  
      />
      <ImgLoop />
      <Main ref={mainComponentRef}/>
      <Achievements ref={achievementsRef} />
      <Programs />

      <Footer ref={footerRef} />
    </div>
  );
}

export default App;