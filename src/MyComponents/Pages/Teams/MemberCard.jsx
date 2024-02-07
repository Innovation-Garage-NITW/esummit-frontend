import React from 'react';
import './MemberCard.css'

const MemberCard = ({ name }) => {
  return (
    <div className="member-card" style={{ border: '1px solid gray', padding: '10px', margin: '5px', borderRadius: '5px', width: '350px', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {name}
    </div>
  );
};

export default MemberCard;
