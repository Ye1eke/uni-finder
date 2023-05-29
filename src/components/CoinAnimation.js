import React, { useEffect } from 'react';

const Animation = ({ text }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Remove the animation after 1 second
      document.getElementById('animation-container').remove();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="animation-container" className="animation-container">
      <div className="animation">{text}</div>
    </div>
  );
};

export default Animation;
