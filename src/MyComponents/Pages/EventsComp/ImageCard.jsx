import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ImageCard = ({ image, title, details, sizing }) => {
  // console.log(sizing);
  const [hover, setHover] = React.useState(false);
  function toggleHover() {
    setHover(!hover);
  }
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{ display: 'inline-block', margin: 16, }}
    >
      <Card style={{ width: `${sizing}px`, borderRadius: '1em' }}>
        <Card.Img variant="bottom" src={image} alt={title} width={`${sizing}px`} style={{
          // filter: hover ? 'blur(2px)' : '',
        }} />
        <Card.ImgOverlay style={{ padding: 0 }}>
          {hover &&
            <motion.div
              initial={{ height: 0, overflow: 'hidden', opacity: 0 }}
              animate={{ height: `${sizing}px`, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: 'rgba(0,0,0,0.9)',
                height: `${sizing}px`,
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

ImageCard.defualtProps = {
  sizing: '350px',
}

export default ImageCard;
