import React, { useEffect, useState } from 'react'
import './TimeLine.css';
import { Chrono } from 'react-chrono';

// import {Chrono} from ''

function TimeLine() {

    const [day, setDay] = useState(1);
    const [timeLineData, setTimeLineData] = useState([]);


    const dummyData = [
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 1,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1-Not imp",
            priority: 2,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 1,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 2",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 2,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 2,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 1,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 1,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 2,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 1,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 2,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
        {
            title: "Title 1",
            priority: 1,
            shortdes: "something",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci sed nisi hendrerit condimentum. Fusce ultricies velit ut ultrices auctor. Donec dictum ante nec neque blandit, et maximus massa tempus. Mauris eros velit, scelerisque nec tortor id, faucibus posuere lorem. Cras vel urna a magna euismod vulputate a ac eros. Morbi rutrum faucibus justo, suscipit aliquam dui commodo in. Mauris ut magna ac risus scelerisque vulputate sit amet nec orci.",
            day: 1,
            venue: "ALC",
            time: "5:00 PM",
            category: 'Competition',
            imagUrl: 'https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-using-black-laptop-computer-b9-odQi5oDo'
        },
    ]

    useEffect(() => {
        let temp = [];
        for (var i = 0; i < dummyData.length; i++) {
            if (dummyData[i].priority === 1 && dummyData[i].day === day) {
                var t = {
                    title: dummyData[i].time,
                    cardTitle: dummyData[i].title,
                    cardSubtitle: dummyData[i].shortdes,
                    cardDetailedText: dummyData[i].description,
                    media: {
                        type: "IMAGE",
                        source: {
                            url: dummyData[i].imagUrl,
                        }
                    }
                }
                temp.push(t);
            }
        }
        setTimeLineData(temp);
    }, [day]);


    return (
        <>
            <div className="timeline-container">
                <h1>NITW's E-SUMMIT TIMELINE</h1>
                <div className='btn-container'>
                    <button className={`timeLine-btn ${(day == 1) ? 'active-btn' : ''} `} onClick={() => { setDay(1) }}>DAY 1</button>
                    <button className={`timeLine-btn ${(day == 2) ? 'active-btn' : ''} `} onClick={() => { setDay(2) }}>DAY 2</button>
                </div>
                <div style={{width:'100%',height:'fit-content'}}>
                <Chrono items={timeLineData} mode="VERTICAL_ALTERNATING" 
                allowDynamicUpdate={true} 
                focusActiveItemOnLoad={true}
                hideControls={true} 
                itemWidth={150} 
                mediaHeight={100}
                theme={
                    {
                        primary:'white',
                        secondary:'black',
                        titleColor:'gray',
                        titleColorActive:'white'
                    }
                }
                slideShow
                slideItemDuration={4500}
                slideShowType="reveal" 
                className={{
                    title:'title_glow',
                }}             
                />
                </div>
            </div>
        </>
    )
};

export default TimeLine
