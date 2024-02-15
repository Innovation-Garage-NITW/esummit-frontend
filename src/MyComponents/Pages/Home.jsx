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
import { eccTeamMembers, EventsData, HotTopics, dummyData } from "../../../data";
import SpeakerCard from "./SpeakerComp/SpeakerCard";
import ImageCard from "./EventsComp/ImageCard";

import { useUserAuth } from "../../context/userAuthContext";
import { getEvents, getSpeakers } from "../../../backend_functions";


export const Home = () => {
	// <<<<<<< Ishtiyaque_
	// 	const speakerData = eccTeamMembers.concat(eccTeamMembers);
	// 	const eventData = EventsData.concat(EventsData);
	// 	{/* ------------------------------------------------------------------------------------------------why us section */ }

	// 		const [activeSection, setActiveSection] = useState('section1');

	// 		const toggleSection = (sectionId) => {
	// 		  setActiveSection(sectionId);
	// 		  console.log('button was clicked')
	// 		};
	//  const [activeButton, setActiveButton] = useState(null);

	//   const handleClick = (buttonId) => {
	//     setActiveButton(buttonId);
	// 	toggleSection(`section${buttonId}`); 
	//   };
	// 	{/* ------------------------------------------------------------------------------------------------why us section */ }
	// 	let flag = 0;
	// 	let flag2 = false;
	// 	setTimeout(() => {
	// 		flag2 = true;
	// 	}, 4000);
	// 	useEffect(() => {
	// 		const parallax_el = document.querySelectorAll(".parallax")
	// 		let xValue = 0, yValue = 0;
	// 		const main = document.querySelector(".main");

	// 		if (window.innerWidth >= 725) {
	// 			main.style.maxHeight = `${window.innerWidth * 0.6}px`;
	// 		} else {
	// 			main.style.maxHeight = `${window.innerWidth * 1.6}px`;
	// 		}

	// 		function logoAnimationFunction() {
	// 			let timeline = gsap.timeline();

	// 			timeline.from(".logo",
	// 				{
	// 					y: window.innerHeight - document.querySelector(".logo").getBoundingClientRect().top - 300,
	// 					opacity: 0,
	// 					duration: 3,
	// 				}
	// 			);
	// 		}

	// 		function moonAnimationFunction() {
	// 			let timeline = gsap.timeline();

	// 			timeline.from(".sun",
	// 				{
	// 					top: `${document.querySelector(".sun").offsetHeight / 2}px`,
	// 					left: `${document.querySelector(".sun").offsetWidth / 2 + 200}px`,
	// 					duration: 3.5,
	// 				}
	// 			);

	// 			logoAnimationFunction();
	// 		}

	// 		function bgAnimationFunction() {
	// 			if (flag === 1) return;

	// 			let timeline = gsap.timeline();

	// 			timeline.from(".img-bg",
	// 				{
	// 					top: `${document.querySelector(".img-bg").offsetHeight / 2 + 90}px`,
	// 					duration: 3.5,
	// 					ease: "power1.in"
	// 				}
	// 			);

	// 			moonAnimationFunction();

	// 			flag = 1;
	// 		}

	// 		bgAnimationFunction();

	// 		window.addEventListener("mousemove", (e) => {
	// 			if (!flag2) return;
	// 			xValue = e.clientX - window.innerWidth / 2;
	// 			yValue = e.clientY - window.innerWidth / 2;

	// 			parallax_el.forEach((el) => {
	// 				let speedx = el.dataset.speedx;
	// 				let speedy = el.dataset.speedy;
	// 				let speedz = el.dataset.speedz;

	// 				let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
	// 				let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft;

	// 				el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(calc(${zValue * speedz}px))`;
	// 			});
	// 			document.getElementsByClassName('ovstar')[0].style.transform = `translateX(${-xValue * 0.1}px) translateY(${yValue * 0.1}px) perspective(2300px)`;
	// 		});

	// 		return () => {

	// 		}
	// 	}, [])

	// 	return (
	// 		<>
	// 			<div className="main">
	// 				<img src={bgImg} alt="" data-speedx="0.3" data-speedy="0.3" data-speedz="0" data-distance="-200" className="parallax img-bg" />
	// 				<img src={stars} alt="" data-speedx="0.27" data-speedy="0.27" data-speedz="0" data-distance="-200" className="parallax stars" />
	// 				<img src={sun} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-distance="-200" className="parallax sun" />
	// 				<img src={logo} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0.3" data-distance="-200" className="parallax logo" />
	// 				<img src={waveLeft} alt="" data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-distance="200" className="parallax wave-left" />
	// 				<img src={mountain0Right} alt="" data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-distance="800" className="parallax mountain-0-right" />
	// 				<img src={mountain1Left} alt="" data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-distance="800" className="parallax mountain-1-left" />
	// 				<img src={mountain2Right} alt="" data-speedx="0.035" data-speedy="0.05" data-speedz="0.1" data-distance="800" className="parallax mountain-2-right" />
	// 				<img src={mountain3Left} alt="" data-speedx="0.035" data-speedy="0.05" data-speedz="0.1" data-distance="800" className="parallax mountain-3-left" />
	// 				<img src={mountain4Right} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.15" data-distance="800" className="parallax mountain-4-right" />
	// 				<img src={mountain5Left} alt="" data-speedx="0.01" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="parallax mountain-5-left" />
	// 				<img src={mountain6Left} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="parallax mountain-6-left" />
	// 				{/* <img src={overview} alt="" className="overview"/> */}
	// 				<img src={mountain5Right} alr="" className="mountain-5-right" />
	// 				<img src={mountain7Left} alr="" className="mountain-7-left" />
	// 				<div className="ovstardiv">
	// 					<img src={ovstar} alr="" className="ovstar" />
	// 					<img src={tree} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="tree" />
	// 					<img src={tree} alt="" data-speedx="0.02" data-speedy="0.05" data-speedz="0.2" data-distance="800" className="tree1" />
	// 				</div>

	// 				<OverViewSection2 />

	// 				<div className="speakerSection">
	// 					<div className="speakerHeading ">
	// 						<h1>SPEAKERS</h1>
	// 					</div>
	// 					<div className="speaker-slider-container">
	// 						<div className="speaker-slider-scroller">
	// 							{speakerData.map((speaker, index) => {
	// 								return (
	// 									<SpeakerCard members={speaker} key={index} imgUrl={speaker.imgUrl} sizing={(window.innerWidth > 900) ? (300) : (250)} />
	// 								)
	// 							})
	// 							}
	// 						</div>
	// 					</div>
	// 				</div>

	// 				<div className="EventSection">
	// 					<div className="EventHeading ">
	// 						<h1>EVENTS</h1>
	// 					</div>
	// 					<div className="Event-slider-container">
	// 						<div className="Event-slider-scroller">
	// 							{eventData.map((event, index) => {
	// 								return (
	// 									<ImageCard image={event.image} key={index} title={event.title} details={event.details} sizing={(window.innerWidth > 725) ? (300) : (250)} />
	// 								)
	// 							})
	// 							}
	// 						</div>
	// 					</div>
	// 				</div>


	// 				{/* <OverviewSection/> */}
	// 			</div>
	// 		</>
	// 	);
	// =======

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
			if (document.timeline.currentTime < 4000) return;
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
			// document.getElementsByClassName('ovstar').style.transform = `translateX(${-xValue * 0.1}px) translateY(${yValue * 0.1}px) perspective(2300px)`;
		});

		return () => {

		}
	}, [])

	// for events

	const [eventsData, setEventsData] = useState([]);

	useEffect(() => {
		// setEventsData(EventsData);
		async function fetchData() {
			let data = await getEvents();
			// console.log(data)
			data = data.concat(data);
			setEventsData(data);
		}
		fetchData();
	}, [])

	// for speakers
	const [speakersData, setSpeakersData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			let data = await getSpeakers();
			data = data.concat(data);
			data = data.concat(data);
			console.log(data);
			setSpeakersData(data);
		}
		fetchData();
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
				<img src={mountain5Right} alt="" className="mountain-5-right" />
				<img src={mountain7Left} alt="" className="mountain-7-left" />
				<div className="ovstar div">
					<img src={ovstar} alt="" className="ovstar" />
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
							{speakersData.map((speaker, index) => {
								return (
									<SpeakerCard
										key={index}
										members={speaker}
										imgUrl={speaker.imgUrl}
										sizing={(window.innerWidth > 725) ? (200) : (175)}
									/>
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
							{eventsData.map((event, index) => {
								return (
									<ImageCard
										key={index}
										image={event['photo']}
										title={event['name']}
										details={event['description']}
										sizing={(window.innerWidth > 725) ? (300) : (250)}
									/>
								)
							})
							}
						</div>
					</div>
				</div>

				{/* Trees  */}



				{/* <OverviewSection/> */}
			</div>
		</>
	);


};
