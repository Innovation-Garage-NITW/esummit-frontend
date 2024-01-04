import React, {useEffect} from "react";
import { gsap } from "gsap";
import "./Home.css";
import bgImg from "../Images/new-bg.png"
import stars from "../Images/stars-2.png"
import sun from "../Images/moon.png"
import mountain0Right from "../Images/mountain-0-right.png"
import mountain1Left from "../Images/mountain-1-left.png"
import mountain2Right from "../Images/mountain-2-right.png"
import mountain3Left from "../Images/mountain-3-left.png"
import mountain4Right from "../Images/mountain-4-right.png"
import mountain5Left from "../Images/mountain-5-left.png"
import mountain6Left from "../Images/mountain-6-left.png"
import waveLeft from "../Images/wave-left.png"
import logo from "../Images/logo.png"
import tree from "../Images/Trees.png"
import fade from "../Images/groupmountain.png"
import mountain5Right from "../Images/Vector70.png"
import mountain7Left from "../Images/Vector74.png"
import overview from "../Images/overview.png"
import text from "../Images/text.png"
//import OverviewSection from "./OverviewSection";

export const Home = () => {
  let flag = 0;
  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax")
    let xValue = 0, yValue = 0;
    const main = document.querySelector(".main");

    if (window.innerWidth >= 725) {
      main.style.maxHeight = `${window.innerWidth * 0.6}px`;
    } else {
      main.style.maxHeight = `${window.innerWidth * 1.6}px`;
    }

    function logoAnimationFunction() {
      let timeline = gsap.timeline();

      timeline.from(".logo",
        {
          y: window.innerHeight - document.querySelector(".logo").getBoundingClientRect().top - 300,
          opacity: 0,
          duration: 3,
        }
      );
    }

    function moonAnimationFunction() {
      let timeline = gsap.timeline();

      timeline.from(".sun",
        {
          top: `${document.querySelector(".sun").offsetHeight / 2}px`,
          left: `${document.querySelector(".sun").offsetWidth / 2 + 200}px`,
          duration: 3.5,
        }
      );

      logoAnimationFunction();
    }

    function bgAnimationFunction() {
      if(flag === 1) return;
      
      let timeline = gsap.timeline();
      
      timeline.from(".img-bg", 
      {
        top: `${document.querySelector(".img-bg").offsetHeight / 2 + 90}px`,
        duration: 3.5,
        ease: "power1.in"
      }
      );
      
      moonAnimationFunction();
      
      flag = 1;
    }

    bgAnimationFunction();

    window.addEventListener("mousemove", (e) => {
      if(document.timeline.currentTime < 4000) return;
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY- window.innerWidth / 2;

      parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(calc(${zValue * speedz}px))`;
      });
    });
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
    <div className="main">
      <img src={bgImg} alt="" data-speedx="0.3" data-speedy="0.3" data-speedz="0" data-distance="-200" className="parallax img-bg"/>
      <img src={stars} alt="" data-speedx="0.27" data-speedy="0.27" data-speedz="0" data-distance="-200" className="parallax stars"/>
      <img src={sun} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-distance="-200" className="parallax sun"/>
      <img src={logo} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0.3" data-distance="-200" className="parallax logo"/>
      <img src={waveLeft} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-distance="200" className="parallax wave-left"/>
      <img src={mountain0Right} alt="" data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-distance="800" className="parallax mountain-0-right"/>
      <img src={mountain1Left} alt="" data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-distance="800" className="parallax mountain-1-left"/>
      <img src={mountain2Right} alt="" data-speedx="0.035" data-speedy="0.05" data-speedz="0.1" data-distance="800" className="parallax mountain-2-right"/>
      <img src={mountain3Left} alt="" data-speedx="0.035" data-speedy="0.05" data-speedz="0.1" data-distance="800" className="parallax mountain-3-left"/>
      <img src={mountain4Right} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.15" data-distance="800" className="parallax mountain-4-right"/>
      <img src={mountain5Left} alt="" data-speedx="0.01" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="parallax mountain-5-left"/>
      <img src={mountain6Left} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="parallax mountain-6-left"/>
      <img src={overview} alt="" className="overview"/>
      <img src={mountain5Right} alr="" className="mountain-5-right"/>
      <img src={mountain7Left} alr="" className="mountain-7-left"/>
      <img src={text} alt="" className="text" />
      <img src={tree} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="tree"/>
    </div>
    
    </>
  );
};
