import React from 'react'
import Background from '../Images/img-bg-2.png';
import { Teams } from './SpeakerComponents/Teams';

export const Speakers = () => {
  return (
    <>
      <div style={{backgroundImage: `url(${Background})`,width:"100vw",height:"100%"}}>
      <Teams/>
      </div>
    </>
  )
}

