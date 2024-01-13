import React from "react";
import { Col } from "react-bootstrap";
import "animate.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

const MemberCard = (props) => {
  const linkedin=props.props.linkedin
  const email="mailto:"+props.props.email
  return (
      <div className="proj-imgbx animate__animated animate__zoomInUp animate__delay-1s" style={{width:"300px"}} >
        <img src={props.props.imgUrl} style={{ height: "350px",width:"350px" }} alt="" />
        <div className="proj-txtx">
          <h4>{props.props.title}</h4>
          <span>{props.props.description}</span>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <a
            href={linkedin}
          >
            <LinkedInIcon fontSize="large" sx={{color:" #FFEA00"}} />
          </a>
          <a
          href={email}>
          <EmailIcon fontSize="large" sx={{color:" #FFEA00"}}/>
          </a>
          </div>
        </div>
      </div>
  );
};

export default MemberCard;
