import './App.css';
import Navbar from './components/Navbar/Navbar';
import StarrySky from './components/StarrySky/StarrySky';
import Main from './components/main/main';
import ImgLoop from './components/ImgLoop/ImgLoop';
import Achievements from './components/Achievements/Achievements';
import Programs from './components/Programs/Programs';
import Footer from './components/Footer/Footer';
import React, { useRef, useEffect } from 'react';

const App = () => {
  const imgLoopRef = useRef(null);
  const mainComponentRef = useRef(null);
  const achievementsRef = useRef(null);
  const footerRef = useRef(null);
  const programsRef = useRef(null);

  // const handleScroll = (event) => {
  //   const delta = event.deltaY;

  //   if (delta > 0) {
  //     scrollDown();
  //   } else if (delta < 0) {
  //     scrollUp();
  //   }
  // };

  // const scrollDown = () => {
  //   if (mainComponentRef.current) {
  //     mainComponentRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   if (achievementsRef.current) {
  //     achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   if (programsRef.current) {
  //     programsRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   if (footerRef.current) {
  //     footerRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const scrollUp = () => {
  //   if (imgLoopRef.current) {
  //     imgLoopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   if (mainComponentRef.current) {
  //     mainComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   if (achievementsRef.current) {
  //     achievementsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   if (programsRef.current) {
  //     programsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('wheel', handleScroll);
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  return (
    <div className="App">
      <StarrySky />
      <Navbar 
        mainComponentRef={mainComponentRef} 
        achievementsRef={achievementsRef} 
        footerComponentRef={footerRef}  
        programsRef={programsRef} 
      />
      <ImgLoop ref={imgLoopRef} />
      <Main ref={mainComponentRef}/>
      <Achievements ref={achievementsRef} />
      <Programs ref={programsRef} />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;


{/* <ImgLoop /> <Main/> <Achievements/><Programs/> <Footer/> */}