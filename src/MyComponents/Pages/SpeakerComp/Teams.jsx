import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import LaunchIcon from "@mui/icons-material/Launch";
import './Teams.css'
import MemberCard from "./MemberCard";
import img from '../../Images/Trees.png'
import { eccTeamMembers } from "./SpeakerID";
import "animate.css";


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
												<div
													className="proj-imgbx animate__animated animate__zoomInUp animate__delay-1s"
													style={{ width: "330px", borderRadius: "70px" }}
												>
													<img
														src={members.imgUrl}
														style={{ height: "350px", width: "350px" }}
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
