
import { useEffect } from 'react'
import { getSponsors } from '../../../backend_functions'

import React from 'react';
import Marquee from "react-fast-marquee";
import './Sponsors.css';
import bigTechSVG from './big_tech.svg'; 


export const Sponsors = () => {

  useEffect(() => {
    getSponsors();
  })

  return (
    <div className="marquee-container">

      <h1 className='page-heading'>Our Sponsors</h1>
//       <Marquee>

//       <h1>Our Sponsors</h1>
      <Marquee className='marquee' speed={120}>

      <img src={bigTechSVG} alt="Big Tech Logo" style={{ transform: 'scale(0.5)' }} />
      </Marquee>
      
    </div>
  );
}
