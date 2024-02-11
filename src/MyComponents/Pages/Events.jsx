import imgUrl from '../Images/Event3.jpg'
import Banner from './Banner'
import ImageCard from './EventsComp/ImageCard'
// import posterUrl from "../../assets/poster_innovate_sphere.jpeg";
import { Container } from 'react-bootstrap';
// import { EventsData } from '../../../data';
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
		<>
			<Banner heading="EVENTS" imgUrl={imgUrl} />
			<div className="Content" style={{}}>
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
		</>
	)
}
