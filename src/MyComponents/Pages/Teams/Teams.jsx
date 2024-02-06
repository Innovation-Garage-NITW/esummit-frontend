import React, { useState } from "react";
import MemberCard from "./MemberCard";
import "./Teams.css";

//Experiments
// import Banner from '../Banner'

//---------------


export const Teams = () => {

	const [selectedTeam, setSelectedTeam] = useState(null);

	// Define teams data
	const teamsData = [
		{ name: "Design Team", members: ["John Doe", "Jane Smith", "Alex Johnson"] },
		{ name: "Decor Team", members: ["Emily Brown", "Michael Davis", "Sophia Wilson"] },
		{ name: "Tech Team", members: ["David Lee", "Emma Garcia", "James Martinez", "Mubashir", "Jitesh", "Manav"] },
		{ name: "Media Team", members: ["Olivia Taylor", "William Anderson", "Ella Thomas"] },
	];


	const handleTeamClick = (teamName) => {
		setSelectedTeam(teamName);
	};

	return (

		<div className="teams-container">
			<h1>Teams</h1>
			{/* Render list of teams */}
			<div className="team-selection-container">
				<div className="team-selection">
					{teamsData.map((team, index) => (
						<div
							key={index}
							onClick={() => handleTeamClick(team.name)}
							className={`team-item ${selectedTeam === team.name ? 'selected' : ''}`}
						>
							{team.name}
						</div>
					))}
				</div>
			</div>

			{/* Render team members if a team is selected */}
			{selectedTeam && (
				<div className="selected-team">
					<h2>{selectedTeam}</h2>
					<div className="team-members-container">
						{/* Render team members */}
						{teamsData.find((team) => team.name === selectedTeam).members.map((member, index) => (
							<MemberCard key={index} name={member} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Teams;
