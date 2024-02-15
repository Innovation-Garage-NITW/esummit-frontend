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
import { FaRocket } from "react-icons/fa";
import { BiSolidBusiness } from "react-icons/bi";
import { RiGovernmentFill } from "react-icons/ri";
import { GiIndianPalace } from "react-icons/gi";
import Whyus from "./Whyus.jsx"
import eventposter from '../../assets/poster_innovate_sphere.jpeg'
import { getEvents, getSpeakers } from "../../../backend_functions.js"


const iconList = [<FaRocket className="topic-icon" />, <RiGovernmentFill className="topic-icon" />, <BiSolidBusiness className="topic-icon" />, <GiIndianPalace className="topic-icon" />]

import { useUserAuth } from "../../context/userAuthContext";
import { getEvents, getSpeakers } from "../../../backend_functions";


export const Home = () => {

	const speakerData = eccTeamMembers.concat(eccTeamMembers);
	const eventData = EventsData.concat(EventsData);

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


export const Home = ({ setEventsOverLay, setCurrEventsData }) => {


    const [speakerData,setSpeakersData] = useState([]);
    const [eventData,setEventData] = useState([]);

    useEffect(()=>{
        async function fetchEData() {

			try {
				const data = await getEvents();
                const temp = data.concat(data);
                console.log("Number of events : ",temp.length);
				setEventData(data);
			} catch (error) {
				console.error('Error fetching events:', error);
			}

		}


        async function fetchSData(){
            try{
                const data = await getSpeakers();
                const temp = data.concat(data);
                console.log("Number of speaker : ",temp.length);
                setSpeakersData(temp);
            }
            catch(error){
                console.log('Error fetching speakers ',error);
            }
        }

		fetchEData();
        fetchSData();
    },[]);


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
            if (document.getElementsByClassName('ovstar').length) {
                document.getElementsByClassName('ovstar')[0].style.transform = `translateX(${-xValue * 0.1}px) translateY(${yValue * 0.1}px) perspective(2300px)`;
            }
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


                <div className="EventSection">
                    <div className="EventHeading ">
                        <h1>EVENTS</h1>
                    </div>
                    <div className="Event-slider-container">
                        <div className="Event-slider-scroller">
                            {eventData.map((event, index) => {
                                return (
                                    <ImageCard setEventsOverLay={setEventsOverLay} setCurrEventsData={setCurrEventsData} data={eventData[index]} image={eventposter} key={index} title={event.title} details={event.shortdes} sizing={(window.innerWidth > 725) ? (300) : (250)} />
                                )
                            })
                            }
                        </div>
                    </div>
                </div>

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

                <div className="topicsSection">
                    <h1>HOT TOPICS</h1>
                    <div className="topicsdiv">
                        {HotTopics.map((topic, index) => (
                            < div className="topic" key={index}>
                                <div className="topicTitle">{topic.title}</div>
                                <div className="topicdesbox">
                                    {iconList[index]}

                                    <div className="topicdes">
                                        {
                                            topic.description.map((des, index) => (
                                                <p className="topicdesp" key={index}>{des}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>


                {/* <OverviewSection/> */}
            </div >
        </>
    );
};

