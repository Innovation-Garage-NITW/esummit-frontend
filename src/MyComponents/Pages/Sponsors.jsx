import Marquee from "react-fast-marquee";
import './Sponsors.css';

import spons1 from '../../assets/sponsors/spons1.png';
import spons2 from '../../assets/sponsors/spons2.png';
import spons3 from '../../assets/sponsors/spons3.png';
import spons4 from '../../assets/sponsors/spons4.png';
import spons5 from '../../assets/sponsors/spons5.png';
import spons6 from '../../assets/sponsors/spons6.png';
import spons7 from '../../assets/sponsors/spons7.png';
import spons8 from '../../assets/sponsors/spons8.png';
import spons9 from '../../assets/sponsors/spons9.png';
import spons10 from '../../assets/sponsors/spons10.png';
import spons11 from '../../assets/sponsors/spons11.png';

export const Sponsors = () => {

  return (
    <div className="marquee-container">

      <h1 className='page-heading'>Our Sponsors</h1>
      {/* //       <Marquee> */}

      {/* //       <h1>Our Sponsors</h1> */}
      <Marquee className='marquee' speed={120}>

        <div className='sponsor-container'>
          <img src={spons1} alt='spons1' />
        </div>
        <div className='sponsor-container'>
          <img src={spons2} alt='spons2' />
        </div>
        <div className='sponsor-container'>
          <img src={spons3} alt='spons3' />
        </div>
        <div className='sponsor-container'>
          <img src={spons4} alt='spons4' />
        </div>
        <div className='sponsor-container'>
          <img src={spons5} alt='spons5' />
        </div>
        <div className='sponsor-container'>
          <img src={spons6} alt='spons6' />
        </div>
        <div className='sponsor-container'>
          <img src={spons7} alt='spons7' />
        </div>
        <div className='sponsor-container'>
          <img src={spons8} alt='spons8' />
        </div>
        <div className='sponsor-container'>
          <img src={spons9} alt='spons9' />
        </div>
        <div className='sponsor-container'>
          <img src={spons10} alt='spons10' />
        </div>
        <div className='sponsor-container'>
          <img src={spons11} alt='spons11' />
        </div>

      </Marquee>

    </div>
  );
}
