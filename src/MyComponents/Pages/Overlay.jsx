import React from 'react'
import './Overlay.css'
import { ImCross } from "react-icons/im";
import poster from '../../assets/poster_innovate_sphere.jpeg'


function Overlay({ setEventsOverLay, currEventsData }) {

    return (
        <div className='overlaysection'>
            <div className="overlaydiv">
                <ImCross className='CrossIcon' onClick={() => (setEventsOverLay(false))} />
                <div className="postercontainer">
                    <img className='posterpic' src={poster} alt="idk man" />
                </div>
                <div className="contentcontainer">
                    <div className="titlecontentdiv">
                        {currEventsData.title}
                    </div>
                    <div className="eventcontent">
                        <div className="descontentdiv">
                            <p>Showcase your groundbreaking technical project at Technozion '23's Shark Tank InnovateSphere, hosted by ECE Society in collaboration with Innovation Garage NITW. Whether it's cutting-edge software, hardware, or a unique tech integration, we want your ideas!
                                Present your project at our college-wide event during Technozion, where industry experts and peers will decide which projects stand out. The most promising ones will have the opportunity to pitch directly to THUB for potential development and investment.
                            </p>
                        </div>
                        <div><span>VENUE : </span> {currEventsData.venue}</div>
                        <div><span>TIME : </span> {currEventsData.time}</div>
                        <div><span>CATEGORY : </span> {currEventsData.category}</div>
                        <div><span>PRICE POOL : </span> {currEventsData.prizes}</div>
                        <div style={{textAlign:'center',marginTop:'5%'}}><button className='eventregisterbtn' onClick={()=>{

                        }}>Register</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay
