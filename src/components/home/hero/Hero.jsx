import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='box'>
          <div className='title'>
            <span className='block'></span>
            <h1>
              <span className='block'></span>
              Craft Clothings<span></span>
            </h1>
          </div>
          <div className='role'>
            <div className='block'></div>
            <p>Crafted with Precision and Passion with CraftClothing</p>            
          </div>
          <div className="p2"> 
              <p>- customize your jersey with us -</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
