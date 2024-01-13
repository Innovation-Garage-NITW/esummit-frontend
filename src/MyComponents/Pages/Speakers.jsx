import React from 'react'
import Banner from './Banner.jsx'
import imgUrl from '../Images/Sp_temp.jpeg'

import { Teams } from './SpeakerComp/Teams'

export const Speakers = () => {
  return (
    <>
    <Banner heading="SPEAKERS" imgUrl={imgUrl}/>
    <div className='Content'>
      <Teams/>
    </div>
    </>
  )
}

