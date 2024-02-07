import React from 'react';
import Marquee from "react-fast-marquee";
import './Sponsors.css';
import bigTechSVG from './big_tech.svg'; 

export const Sponsors = () => {
  return (
    <div className="marquee-container">
      <h1>Our Sponsors</h1>
      <Marquee>
      <img src={bigTechSVG} alt="Big Tech Logo" style={{ transform: 'scale(0.5)' }} />
      </Marquee>
      
    </div>
  );
}
