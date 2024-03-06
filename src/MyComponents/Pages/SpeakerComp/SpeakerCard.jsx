import React from 'react'
import "animate.css";
import LaunchIcon from "@mui/icons-material/Launch";

function SpeakerCard({ members, imgUrl, sizing, n, customKey }) {
    return (
        <div
            className="proj-imgbx animate__animated animate__zoomInUp animate__delay-1s"
            style={{
                width: `${sizing}px`,/* borderRadius: "20%" ,*/ borderRadius: '0px',
                flexShrink: '0'
            }}
        >
            <img
                src={imgUrl}
                className={customKey === n - 1 ? "last-image" : ""}
                style={{ width: '100%' }}
                alt=""
            />
            <style>
                {`
                     @media (max-width: 767px) {
                        .last-image {
                            margin-bottom: 55%;
                        }
                    }

                    @media (max-width: 425px) {
                        .last-image {
                            margin-bottom: 70%;
                        }
                    }
                `}
            </style>

            <div className="proj-txtx">
                <h4>{members.title}</h4>
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
