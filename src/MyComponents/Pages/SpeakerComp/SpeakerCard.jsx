import React from 'react'
import "animate.css";
import LaunchIcon from "@mui/icons-material/Launch";

function SpeakerCard({ members, imgUrl, sizing }) {
    return (
        <div
            className="proj-imgbx animate__animated animate__zoomInUp animate__delay-1s"
            style={{ width: `${sizing}px`,/* borderRadius: "20%" ,*/ borderRadius: '0px', flexShrink: '0' }}
        >
            <img
                src={imgUrl}
                style={{ width: "100%" }}
                // height: "100%",
                alt=""
            />
            <div className="proj-txtx">
                <h4>{members.name}</h4>
                <span>{members.description}</span>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <a href={members.url}>
                        <LaunchIcon
                            fontSize="large"
                            sx={{ color: " #FFEA00" }}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SpeakerCard
