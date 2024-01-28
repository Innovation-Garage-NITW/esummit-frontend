import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";
import './Teams.css'
import { eccTeamMembers } from "../../../../data.js";
import "animate.css";
import SpeakerCard from "./SpeakerCard";

export const Teams = () => {
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
										{eccTeamMembers.map((members, index) => {
											return (
												<SpeakerCard members={members} imgUrl={members.imgUrl} sizing={330} key={index}/>
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
