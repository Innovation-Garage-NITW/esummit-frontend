import React from 'react'
import './Banner.css'

function Banner({heading , imgUrl}) {
  return (
    <div className="banner-body">
        <div className='content'>
            <h1 className='banner-heading'>
                {heading}
            </h1>
        </div>
        <div className="circle" style={{background:`radial-gradient(farthest-side circle at right center , rgba(245, 243, 243, 0),10%,rgba(0,0,0,1)),url(${imgUrl})`,backgroundSize:'cover'
}}>
            <h1>{heading}</h1>
        </div>
    </div>
  )
}

export default Banner
