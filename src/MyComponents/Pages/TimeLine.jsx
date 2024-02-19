import React, { useEffect, useState } from 'react'
import './TimeLine.css';
import { Chrono } from 'react-chrono';
import { getEvents } from '../../../backend_functions';


function TimeLine() {

    const [day, setDay] = useState(1);
    const [timeLineData, setTimeLineData] = useState([]);
    const [gotData, setGotData] = useState(false);

    const [dummyData, setDummyData] = useState([]);

    // const url = 'https://learn.trybooking.com/hc/article_attachments/360004770073/Booking_URL_Information_Page.png';

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getEvents();
                setDummyData(data);
            }
            catch (error) {
                // console.log("Error fetching the timeline events ", error);
            }
        }
        fetchData().then(() => {
            setGotData(true);
        }
        )

    }, []);

    useEffect(() => {
        updateEvents();
    }, [day, gotData]);

    const updateEvents = () => {
        let temp = [];
        for (var i = 0; i < dummyData.length; i++) {
            if (dummyData[i].priority == '1' && dummyData[i].day == day.toString()) {
                var t = {
                    title: dummyData[i].time,
                    cardTitle: dummyData[i].title,
                    cardSubtitle: dummyData[i].shortdes,
                    cardDetailedText: dummyData[i].description,
                    media: {
                        type: "IMAGE",
                        source: {
                            url: dummyData[i].imageUrl,
                        }
                    }
                }
                temp.push(t);
            }
        }
        setTimeLineData(temp);
    }


    return (
        <>
            <div className="timeline-container">
                <h1>NITW's E-SUMMIT TIMELINE</h1>
                <div className='btn-container'>
                    <button className={`timeLine-btn ${(day == 1) ? 'active-btn' : ''} `} onClick={() => { setDay(1) }}>DAY 1</button>
                    <button className={`timeLine-btn ${(day == 2) ? 'active-btn' : ''} `} onClick={() => { setDay(2) }}>DAY 2</button>
                </div>
                <div style={{ width: '100%', height: 'fit-content' }}>
                    <Chrono items={timeLineData} mode="VERTICAL_ALTERNATING"
                        allowDynamicUpdate={true}
                        focusActiveItemOnLoad={true}
                        hideControls={true}
                        itemWidth={300}
                        mediaHeight={300}
                        useReadMore
                        theme={
                            {
                                primary: 'gray',
                                secondary: 'black',
                                titleColor: 'gray',
                                titleColorActive: 'white'
                            }
                        }
                        slideShow
                        slideItemDuration={4500}
                        slideShowType="reveal"
                        className={{
                            title: 'title_glow',
                        }}
                    />
                </div>
            </div>
        </>
    )
};

export default TimeLine