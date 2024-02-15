import { useEffect, useState } from 'react'
import Banner from './Banner.jsx'
import imgUrl from '../Images/sp.jpg'

import { Teams } from './SpeakerComp/Teams'
import { getSpeakers } from '../../../backend_functions.js'

export const Speakers = () => {

	return (
		<div>
			<Banner heading="SPEAKERS" imgUrl={imgUrl} />
			<div className='Content'>
				<Teams />
			</div>
		</div>
	)
}
