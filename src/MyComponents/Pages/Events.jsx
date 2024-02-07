import imgUrl from '../Images/Event3.jpg'
import Banner from './Banner'
import ImageCard from './EventsComp/ImageCard'
import { Container } from 'react-bootstrap';
import { EventsData } from '../../../data';

export const Events = () => {
	return (
		<>
			<Banner heading="EVENTS" imgUrl={imgUrl} />
			<div className="Content" style={{}}>
				<Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '5%' }}>
					{
						EventsData.map((event, index) => (
							<ImageCard
								key={index}
								image={event.image}
								title={event.title}
								details={event.details}
								sizing={350}
							/>
						))
					}
				</Container>
			</div>
		</>
	)
}
