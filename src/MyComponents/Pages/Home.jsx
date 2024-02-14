import React, { useEffect, useState } from "react";
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
import logo from "../Images/logo1.png"						//Main logo
import tree from "../Images/Trees.png"
import mountain5Right from "../Images/ovmountainr.png"
import mountain7Left from "../Images/ovmountainl.png"
import OverViewSection2 from "./OverViewSection2";
import ovstar from '../Images/s.png'
import { eccTeamMembers, EventsData } from "../../../data";
import SpeakerCard from "./SpeakerComp/SpeakerCard";
import ImageCard from "./EventsComp/ImageCard";


export const Home = () => {
	const speakerData = eccTeamMembers.concat(eccTeamMembers);
	const eventData = EventsData.concat(EventsData);
	{/* ------------------------------------------------------------------------------------------------why us section */ }
	
		const [activeSection, setActiveSection] = useState('section1');
	  
		const toggleSection = (sectionId) => {
		  setActiveSection(sectionId);
		  console.log('button was clicked')
		};
 const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
	toggleSection(`section${buttonId}`); 
  };
	{/* ------------------------------------------------------------------------------------------------why us section */ }
	let flag = 0;
	let flag2 = false;
	setTimeout(() => {
		flag2 = true;
	}, 4000);
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
			if (flag === 1) return;

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
			if (!flag2) return;
			xValue = e.clientX - window.innerWidth / 2;
			yValue = e.clientY - window.innerWidth / 2;

			parallax_el.forEach((el) => {
				let speedx = el.dataset.speedx;
				let speedy = el.dataset.speedy;
				let speedz = el.dataset.speedz;

				let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
				let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft;

				el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(calc(${zValue * speedz}px))`;
			});
			document.getElementsByClassName('ovstar')[0].style.transform = `translateX(${-xValue * 0.1}px) translateY(${yValue * 0.1}px) perspective(2300px)`;
		});

		return () => {

		}
	}, [])

	return (
		<>
			<div className="main">
				<img src={bgImg} alt="" data-speedx="0.3" data-speedy="0.3" data-speedz="0" data-distance="-200" className="parallax img-bg" />
				<img src={stars} alt="" data-speedx="0.27" data-speedy="0.27" data-speedz="0" data-distance="-200" className="parallax stars" />
				<img src={sun} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-distance="-200" className="parallax sun" />
				<img src={logo} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0.3" data-distance="-200" className="parallax logo" />
				<img src={waveLeft} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-distance="200" className="parallax wave-left" />
				<img src={mountain0Right} alt="" data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-distance="800" className="parallax mountain-0-right" />
				<img src={mountain1Left} alt="" data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-distance="800" className="parallax mountain-1-left" />
				<img src={mountain2Right} alt="" data-speedx="0.035" data-speedy="0.05" data-speedz="0.1" data-distance="800" className="parallax mountain-2-right" />
				<img src={mountain3Left} alt="" data-speedx="0.035" data-speedy="0.05" data-speedz="0.1" data-distance="800" className="parallax mountain-3-left" />
				<img src={mountain4Right} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.15" data-distance="800" className="parallax mountain-4-right" />
				<img src={mountain5Left} alt="" data-speedx="0.01" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="parallax mountain-5-left" />
				<img src={mountain6Left} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="parallax mountain-6-left" />
				{/* <img src={overview} alt="" className="overview"/> */}
				<img src={mountain5Right} alr="" className="mountain-5-right" />
				<img src={mountain7Left} alr="" className="mountain-7-left" />
				<div className="ovstardiv">
					<img src={ovstar} alr="" className="ovstar" />
					<img src={tree} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="tree" />
					<img src={tree} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="tree1" />
				</div>

				<OverViewSection2 />

				<div className="speakerSection">
					<div className="speakerHeading ">
						<h1>SPEAKERS</h1>
					</div>
					<div className="speaker-slider-container">
						<div className="speaker-slider-scroller">
							{speakerData.map((speaker, index) => {
								return (
									<SpeakerCard members={speaker} key={index} imgUrl={speaker.imgUrl} sizing={(window.innerWidth > 900) ? (300) : (250)} />
								)
							})
							}
						</div>
					</div>
				</div>

				<div className="EventSection">
					<div className="EventHeading ">
						<h1>EVENTS</h1>
					</div>
					<div className="Event-slider-container">
						<div className="Event-slider-scroller">
							{eventData.map((event, index) => {
								return (
									<ImageCard image={event.image} key={index} title={event.title} details={event.details} sizing={(window.innerWidth > 725) ? (300) : (250)} />
								)
							})
							}
						</div>
					</div>
				</div>

				{/* ------------------------------------------------------------------------------------------------why us section */}
				
				<div className="switch-container">
				<div className="EventHeading ">
						<h1>WHY US</h1>
					</div>
					<div className="buttons">
					<button
        className={`button ${activeButton === 1 ? 'active' : ''}`}
        onClick={() => handleClick(1)}
      >
        ENTERPRENEURS
      </button>
      <button
        className={`button ${activeButton === 2 ? 'active' : ''}`}
        onClick={() => handleClick(2)}
      >
        BUSINESS LEADERS
      </button>
      <button
        className={`button ${activeButton === 3 ? 'active' : ''}`}
        onClick={() => handleClick(3)}
      >
     INVESTERS
      </button>
      <button
        className={`button ${activeButton === 4 ? 'active' : ''}`}
        onClick={() => handleClick(4)}
      >
       TECHIES
      </button>
	  </div>
	  <div className="sectionContainer">
      <div id="section1" className={`section ${activeSection === 'section1' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>ENTERPRENEURS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda deleniti quas quasi libero error maxime facilis dolorum a laudantium aperiam vel consectetur animi eligendi nulla sit sint, natus sapiente?</p>
      </div>

      <div id="section2" className={`section ${activeSection === 'section2' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>BUSINESS LEADERS</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nostrum repellat quis non, fugit id repudiandae totam illo! Iure, aspernatur sequi cupiditate fugiat dolorem molestias placeat sint facere assumenda maiores.</p>
      </div>

      <div id="section3" className={`section ${activeSection === 'section3' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>INVESTERS</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aspernatur voluptate neque! Adipisci quaerat harum incidunt, quibusdam nisi eius autem quidem fugiat est aperiam numquam architecto placeat molestiae laudantium minima?</p>
      </div>

      <div id="section4" className={`section ${activeSection === 'section4' ? 'active' : ''}`}>
        <h2 style={{textAlign:"center",color:"white"}}>TECHIES</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus impedit, fuga dicta similique repellendus suscipit aliquam excepturi a cum dolore quis aut facere iure, voluptatem enim, dolores obcaecati reprehenderit?</p>
		</div>
      </div>
    </div>




				{/* ------------------------------------------------------------------------------------------------why us section */}
				{/* <OverviewSection/> */}
			</div>
		</>
	);
};
