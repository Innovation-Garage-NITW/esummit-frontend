import imgUrl from '../Images/Event3.jpg'
import Banner from './Banner'
import ImageCard from './EventsComp/ImageCard'
// import posterUrl from "../../assets/poster_innovate_sphere.jpeg";
import { Container } from 'react-bootstrap';
import './Events.css'

import { useEffect, useState } from 'react';
import { useUserAuth } from '../../context/userAuthContext';



export const Events = () => {

	const [eventsData, setEventsData] = useState([]);
	const { getEvents } = useUserAuth();

	useEffect(() => {
		// setEventsData(EventsData);
		async function fetchData() {
			const data = await getEvents();
			// console.log(data)
			setEventsData(data);
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
								image={event['photo']}
								title={event['name']}
								details={event['description']}
								sizing={350}
							/>
						))
					}
				</Container>
			</div>
		</div>
	)
}
