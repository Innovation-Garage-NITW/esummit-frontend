import imgUrl from '../Images/Event3.jpg'
import Banner from './Banner'
import EventCard from './EventsComp/EventCard'
import posterUrl from "../../assets/poster_innovate_sphere.jpeg";
import { Container } from 'react-bootstrap';

const events = [
  {
    image: posterUrl,
    title: "Innovate Sphere",
    details: "lot of details",
  },
  {
    image: posterUrl,
    title: "Innovate Sphere",
    details: "lot of details",
  },
  {
    image: posterUrl,
    title: "Innovate Sphere",
    details: "lot of details",
  },
  {
    image: posterUrl,
    title: "Innovate Sphere",
    details: "lot of details",
  },
  {
    image: posterUrl,
    title: "Innovate Sphere",
    details: "lot of details",
  },
  {
    image: posterUrl,
    title: "Innovate Sphere",
    details: "lot of details",
  },
]
export const Events = () => {
  return (
    <>
    <Banner heading="EVENTS" imgUrl={imgUrl}/>
      <div className="Content">
        <Container>
          {
            events.map((event, index) => (
              <EventCard
                key={index}
                image={event.image}
                title={event.title}
                details={event.details}
              />
            ))
        }
        
            </Container>
      </div>
    </>
  )
}

