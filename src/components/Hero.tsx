
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <iframe 
          title="Brik AI 3D Boxes Hover" 
          src="https://my.spline.design/boxeshover-a76e8ef30e00839d028dae80b9b90797/" 
          width="100%" 
          height="100%" 
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
