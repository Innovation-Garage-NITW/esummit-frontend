import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { eventRegister } from '../../../../backend_functions';


const ImageCard = ({ image, title, details, sizing, setCurrEventsData, setEventsOverLay, data }) => {
	const [hover, setHover] = React.useState(false);
	function toggleHover() {
		setHover(!hover);
		document.body.style.cursor = hover ? 'default' : 'pointer';					//cursor change functionality
	}


	// async function handleClick() {
	// 	await eventRegister(user, event_id);

	// }

	const handleEvents = () => {
		setCurrEventsData(data);
		setEventsOverLay(true);
		// console.log("clicked");

	}


	return (
		<motion.div
			onClick={handleEvents}
			whileHover={{ scale: 1.05 }}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			style={{ display: 'inline-block', margin: 16, }}
		>
			<Card style={{ width: `${sizing}px`, borderRadius: '1em',border:'0px' }}>
				<Card.Img variant="bottom" src={image} alt={title} width={`${sizing}px`} style={{
					// filter: hover ? 'blur(2px)' : '',
					borderRadius:'1em'
				}} />
				<Card.ImgOverlay style={{ padding: 0 }}>
					{hover &&
						<motion.div
							initial={{ height: 0, overflow: 'hidden', opacity: 0 }}
							animate={{ height: "100%", opacity: 1 }}
							transition={{ duration: 0.3 }}
							style={{
								backgroundColor: 'rgba(0,0,0,0.9)',
								height: "100%",
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize:"18px",
							}}
						>

							<Card.Title style={{color:"white"}}>{title}</Card.Title>
							<Card.Text>{details}</Card.Text>
							<button className="register" style={{
								color: '#fff',
								background: 'transparent',
								padding: '8px 20px',
								borderRadius: '8px',
								border: '1px solid #1c75d5',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								cursor: 'pointer'
							}}>
								<a href='#' style={{
									color: 'white'
								}}>Register</a>
							</button>
						</motion.div>
					}
				</Card.ImgOverlay>

			</Card>
		</motion.div>
	);
};

ImageCard.defualtProps = {
	sizing: '350px',
}

export default ImageCard;
