import React from 'react';
import './MemberCard.css'

const MemberCard = ({ name, imgUrl }) => {
  return (
    <div>
      <div
        className="member-card"
        style={{
          border: '1px solid gray',
          padding: '10px',
          margin: '5px',
          borderRadius: '5px',
          width: '350px',
          height: '350px',
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover'
        }}>
      </div>
      <div style={{ padding: '10px 0px', fontSize: '20px' }}>{name}</div>
    </div>
  );
};

export default MemberCard;
