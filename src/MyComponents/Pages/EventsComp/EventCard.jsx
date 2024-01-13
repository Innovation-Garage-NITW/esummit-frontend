import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ImageCard = ({ image, title, details }) => {
	const [hover, setHover] = React.useState(false);
	function toggleHover() { 
		setHover(!hover);
	}
	return (
    <motion.div
			whileHover={{ scale: 1.05 }}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
      style={{ display: 'inline-block', margin: 16,}}
    >
      <Card style={{ width: '350px', borderRadius: '1em' }}>
				<Card.Img variant="bottom" src={image} alt={title} width='350px' style={{
					// filter: hover ? 'blur(2px)' : '',
				}} />
				<Card.ImgOverlay style={{ padding: 0}}>
				{hover &&
					<motion.div
          initial={{ height: 0, overflow: 'hidden', opacity: 0 }}
          animate={{ height: '350px', opacity: 1}}
							transition={{ duration: 0.3 }}
							style={{
								backgroundColor: 'rgba(0,0,0,0.9)',
								height: '350px',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center'
							}}
					>
          
						<Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
							</motion.div>
						}
        </Card.ImgOverlay>
				
      </Card>
    </motion.div>
  );
};


export default ImageCard;
