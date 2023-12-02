import React from 'react';

const Star = ({ top, left }) => {
  const starStyle = {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '50%',
    pointerEvents: 'none',
    top,
    left,
    width: `${Math.random() * 1 + 0}px`,
    height: `${Math.random() * 1 + 0}px`,
    animation: 'twinkling 1s infinite',
    transition: 'transform 0.1s linear',
  };

  return <div style={starStyle}></div>;
};

export default Star;