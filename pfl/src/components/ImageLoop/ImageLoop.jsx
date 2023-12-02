// import React, { useEffect, useState } from 'react';
// import './ImageLoop.css';

// const ImageLoop = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const totalImages = 80;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
//     }, 500);

//     return () => clearInterval(interval);
//   }, [totalImages]);

//   const renderImage = (index) => {
//     const imagePath = `./rendered/${String(index + 1).padStart(4, '0')}.png`;
//     return (
//       <img
//         key={index}
//         src={imagePath}
//         alt={`Image ${index + 1}`}
//         style={{ opacity: index === currentImageIndex ? 1 : 0 }}
//       />
//     );
//   };

//   const imageElements = Array.from({ length: totalImages }, (_, index) => renderImage(index));

//   return <div className="image-loop">{imageElements}</div>;
// };

// export default ImageLoop;




// import React from 'react';
// import './ImageLoop.css';
// import x from './rendered/0001.png';

// const ImageLoop = () => {
//   return (
//     <div className="image-loop">
//       <img src={../../assets/slogo.png} alt="Image 1" />
//     </div>
//   );
// };

// export default ImageLoop;


import React, { useEffect, useState } from 'react';
import './ImageLoop.css';
import * as images from './rendered/frame';

const ImageLoop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 80;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 100);

    return () => clearInterval(interval);
  }, [totalImages]);

  const renderImage = (index) => {
    const imagePath = images[`image${index + 1}`];
    return (
      <img
        key={index}
        src={imagePath.default} // Access the image path from the imported object
        alt={`Image ${index + 1}`}
        style={{ opacity: index === currentImageIndex ? 1 : 0 }}
      />
    );
  };

  const imageElements = Array.from({ length: totalImages }, (_, index) => renderImage(index));

  return <div className="image-loop">{imageElements}</div>;
};

export default ImageLoop;