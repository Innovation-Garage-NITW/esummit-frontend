import { useEffect, useState } from 'react'
import { getSponsors } from '../../../backend_functions'

import React from 'react';
import Marquee from "react-fast-marquee";
import './Sponsors.css';
import bigTechSVG from './big_tech.svg';


export const Sponsors = () => {

  // for sponsors
  const [sponsorsData, setSponsorsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await getSponsors();
      data = data.concat(data);
      // console.log(data);
      setSponsorsData(data);
    }
    fetchData();
  }, [])

  return (
    <div className="marquee-container">
      <h1>Our Sponsors</h1>
      <Marquee className='marquee' speed={120}>
        <img src={bigTechSVG} alt="Big Tech Logo" style={{ transform: 'scale(0.5)' }} />
      </Marquee>

    </div>
  );
}
