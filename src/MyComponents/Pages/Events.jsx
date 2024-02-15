import imgUrl from '../Images/Event3.jpg'
import Banner from './Banner'
import ImageCard from './EventsComp/ImageCard'
// import posterUrl from "../../assets/poster_innovate_sphere.jpeg";
import { Container } from 'react-bootstrap';
import './Events.css'

import { useEffect, useState } from 'react';
import { useUserAuth } from '../../context/userAuthContext';
import { getEvents } from '../../../backend_functions';



export const Events = ({ setEventsOverLay, setCurrEventsData }) => {

	const [eventsData, setEventsData] = useState([]);

	useEffect(() => {
		// setEventsData(EventsData);
		async function fetchData() {

			try {
				const data = await getEvents();
				setEventsData(data);
			} catch (error) {
				console.error('Error fetching events:', error);
			}

		}
		fetchData();
	}, [])

	return (
		<div className="Events">

			<Banner heading="EVENTS" imgUrl={imgUrl} />
			<div className="Content">
				<Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '5%' }}>
					{
						eventsData.map((event, index) => (
							<ImageCard
								key={index}
								id={event['id']}
								image={event['photo']}
								title={event['name']}
								details={event['description']}
								sizing={350}
								setCurrEventsData={setCurrEventsData}
								setEventsOverLay={setEventsData}
								data={eventsData[index]}
							/>
						))
					}
				</Container>
			</div>
		</div>
	)
}
