import React from 'react'
import imgUrl from '../Images/Events.jpg'
import Banner from './Banner'


export const Events = () => {
  return (
    <>
    <Banner heading="EVENTS" imgUrl={imgUrl}/>
    <div className='Content'>
      SPEAKERS
    </div>
    </>
  )
}

