import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";
import './Teams.css'
// import { eccTeamMembers } from "../../../../data.js";
import "animate.css";
import SpeakerCard from "./SpeakerCard";
import { getSpeakers } from "../../../../backend_functions.js";

export const Teams = () => {

	// for speakers
	const [speakersData, setSpeakersData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			let data = await getSpeakers();
			data = data.concat(data);
			// console.log(data);
			setSpeakersData(data);
		}
		fetchData();
	}, [])

	return (
		<>
			<section className="project" id="teams">
				<Container>
					<Row mt={3}>
						<Col size={12}>
							<div>
								<h2 style={{ color: "white", marginBottom: "50px" }}>Meet Our Speakers</h2>
								<Tab.Container id="projects-tabs" defaultActiveKey="first">
									<Row
										style={{
											display: "flex",
											justifyContent: "center",
											flexWrap: "wrap",
											gap: 30,
										}}
									>
										{speakersData.map((members, index) => {
											return (
												<SpeakerCard members={members} imgUrl={members.imgUrl} sizing={330} key={index} />
											);
										})}
									</Row>
								</Tab.Container>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
