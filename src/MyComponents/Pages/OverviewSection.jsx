import React from "react";
import TypingEffect from "react-typing-effect";
import RotatingText from "react-rotating-text";
import { useSpring, animated } from "react-spring";
import './OverviewSection.css'; 

const CountingAnimation = ({ targetNumber }) => {
    const { count } = useSpring({
      count: targetNumber,
      from: { count: 0 },
      reset: true, 
      config: { duration: 3000, easing: (t) => t * t },
      onRest: () => {
        // Callback when the animation is complete
        //console.log("Animation complete!");
      },
    });
  
    const textStyle = {
        color: "#363537",
        fontFamily: 'Roboto',
        fontSize: '66px' 
      };

    return <animated.span style={textStyle}>{count.interpolate((val) => Math.floor(val))}</animated.span>;
};

const OverviewSection = () => {
  return (
    <div className="overview-section">
      {/* Description Part */}
      <div className="description custom-typing">
        <TypingEffect
          text={["Welcome to the E-Summit!", "Discover innovation and collaboration.", "Join us for an exciting event."]}
          speed={70}
          eraseDelay={700}
        />
      </div>
    
      <div className="numbers-container">
      <div className="rounded-container1">
        <p>No. of Speakers</p>
        <CountingAnimation targetNumber={30} />
      </div>

      <div className="rounded-container2">
        <p>No. of Events</p>
        <CountingAnimation targetNumber={15} />
      </div>

      <div className="rounded-container3">
        <p>No. of Sponsors</p>
        <CountingAnimation targetNumber={10} />
      </div>
    </div>  
      
    </div>
  );
};

export default OverviewSection;
