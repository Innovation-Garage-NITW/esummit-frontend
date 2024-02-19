import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import "./Teams.css";
import { getTeams } from "../../../../backend_functions";

export const Teams = () => {

	const initialSelectedTeam = "CII HOD";

	const [selectedTeam, setSelectedTeam] = useState(initialSelectedTeam);
	const [teamsData, setTeamsData] = useState([]);
	const [team, setTeam] = useState([]);

	const updateMembers = () => {
		const selectedTeamObject = teamsData.find(team => team.name === selectedTeam);

		// Check if the selected team exists and has a 'members' property
		if (selectedTeamObject && selectedTeamObject.members) {
			// If 'members' property exists, update the state
			setTeam(selectedTeamObject.members);
		}
	}

	useEffect(() => {
		const selectedTeamObject = teamsData.find(team => team.name === selectedTeam);

		// Check if the selected team exists and has a 'members' property
		if (selectedTeamObject && selectedTeamObject.members) {
			// If 'members' property exists, update the state
			setTeam(selectedTeamObject.members);
		}
	}, [selectedTeam, teamsData])

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getTeams();
				setTeamsData(data);
				setTeam(data[0].members)
				updateMembers();
			}
			catch (error) {
				console.log("Error fetching the timeline events ", error);
			}
		}
		fetchData();
	}, [])

	const handleTeamClick = (teamName) => {
		setSelectedTeam(teamName);
	};

	return (
		<div className="teams-container">
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


			<div className="selected-team">
				<h2>{selectedTeam}</h2>
				<div className="team-members-container">
					{
						team && team.length > 0 && team.map((member) => <MemberCard name={member.name} key={member.name} imgUrl={member.photo} />)
					}
				</div>
			</div>
		</div>
	);
};

export default Teams;
