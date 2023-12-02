import './App.css';
import Navbar from './components/Navbar/Navbar';
import StarrySky from './components/StarrySky/StarrySky';
import ImageLoop from './components/ImageLoop/ImageLoop';
import VideoLoop from './components/VideoLoop/VideoLoop';
import Main from './components/main/main';
import ImgLoop from './components/ImgLoop/ImgLoop';

const App = () => {
  return (
    <div className="App">
      <StarrySky />
      <Navbar/>
      <ImgLoop />
      {/* <VideoLoop/> */}
      {/* <ImageLoop/> */}
      <Main/>
      
    </div>
  );
}

export default App;