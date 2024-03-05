import React, { useState } from 'react';
import Header from '../header/Header';
import './Hero.css';

import { a as jsonData } from '../header/HeaderContent';

function Hero() {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className=" absolute container border-s-8  border-orange-100  border-spacing-1.5 px-6 rounded-full mt-44 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} */}
      <div className={`scrolling-container  gap-4 ${isPaused ? 'paused' : ''}`}>
        {jsonData.map(item => (
          <Header key={item.id} title={item.title} techs={item.techs} body={item.body} img={item.img} />

        ))}
        {/* Duplicate the elements to ensure seamless looping */}
        {jsonData.map(item => (
          <Header key={item.id} title={item.title} techs={item.techs} body={item.body} img={item.img} />

        ))}
      </div>
    </div>
  );
}

export default Hero;
