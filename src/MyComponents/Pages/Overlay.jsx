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
                    <img className='posterpic' src={currEventsData['imageUrl']} alt="idk man" />
                </div>
                <div className="contentcontainer">
                    <div className="titlecontentdiv">
                        {currEventsData.title}
                    </div>
                    <div className="eventcontent">
                        <div className="descontentdiv">
                            <p>{currEventsData.description}
                            </p>
                        </div>
                        <div><span>VENUE : </span> {currEventsData.venue}</div>
                        <div><span>TIME : </span> {currEventsData.time}</div>
                        <div><span>CATEGORY : </span> {currEventsData.category}</div>
                        <div><span>PRICE POOL : </span> {currEventsData.prizes}</div>
                        <a href={currEventsData.redirect_url} target="_blank" rel="noreferrer">
                            <div style={{ textAlign: 'center', marginTop: '5%' }}><button className='eventregisterbtn' onClick={() => {
                                // console.log('Register button clicked');
                            }}>Register</button></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay
