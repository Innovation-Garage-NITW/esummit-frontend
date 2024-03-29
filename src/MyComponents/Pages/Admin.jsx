import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IG_logo from "../../assets/IG logo.png";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";
import { useUserAuth } from "../../context/userAuthContext";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

// Custom Components
function CreateEvents() {
	const [formData, setFormData] = useState({
		name: "",
		shortDescription: "",
		description: "",
		priority: "",
		day: "",
		venue: "",
		time: "",
		cateogry: "",
		imageUrl: "",
		unstopLink: "",
		prizes: "",
	});
	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Box style={{ maxHeight: "90vh" }}>
			<Typography variant="h5">Create Events</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Name"
					variant="outlined"
					fullWidth
					name="name"
					value={formData.name}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Description"
					variant="outlined"
					fullWidth
					name="description"
					value={formData.description}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Photo URL"
					variant="outlined"
					fullWidth
					name="photo"
					value={formData.photo}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Date"
					variant="outlined"
					fullWidth
					name="date"
					type="date"
					value={formData.date}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Time"
					variant="outlined"
					fullWidth
					name="time"
					type="time"
					value={formData.time}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Venue"
					variant="outlined"
					fullWidth
					name="venue"
					value={formData.venue}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Category"
					variant="outlined"
					fullWidth
					name="category"
					value={formData.category}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Priority"
					variant="outlined"
					fullWidth
					name="priority"
					value={formData.priority}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="UnStop Link"
					variant="outlined"
					fullWidth
					name="unstopLink"
					value={formData.unstopLink}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<TextField
					label="Prizes"
					variant="outlined"
					fullWidth
					name="prizes"
					value={formData.prizes}
					onChange={handleFormChange}
					sx={{ mb: 2 }}
				/>
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
		</Box>
	);
}

function ManageEvents() {
	const [events, setEvents] = useState([]);
	const { user } = useUserAuth();

	useEffect(() => {
		// console.log("admin", { user });
		(async () => {
			// const idToken = await user.getIdToken()
			const idToken = localStorage.getItem("token");
			// console.log({ idToken });
			const response = await fetch(
				"http://127.0.0.1:5001/esummit-ig/us-central1/admin-getEvents",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + idToken,
					},
				}
			)
				.then((x) => x.json())
				.then((x) => x.events).catch(reason => alert(reason));
			setEvents(response || []);
			// console.log({ response });
		})();
	}, [user]);
	return (
		<div>
			<Typography variant="h5">Manage Events</Typography>
			<List>
				{events.map((event) => (
					<ListItem key={event.id}>
						<ListItemText primary={event.name} secondary={event.date} />
						<img
							// src={event.photo}
							src={DOMPurify.sanitize(event.photo)}
							alt={event.name}
							style={{ width: 100, height: 100, marginRight: 16 }}
						/>
						<Button
							variant="contained"
							color="primary"
							onClick={async () => {
								const idToken = localStorage.getItem("token");
								const response = await fetch(
									"http://127.0.0.1:5001/esummit-ig/us-central1/admin-sendMail",
									{
										method: "POST",
										body: JSON.stringify({ eventId: event.id }),
										headers: {
											"Content-Type": "application/json",
											Authorization: "Bearer " + idToken,
										},
									}
								).then((x) => x.json()).catch(reason => alert(reason));
								// console.log({ response });
							}}
						>
							Notify
						</Button>
					</ListItem>
				))}
			</List>
		</div>
	);
}

function ManageUsers() {
	return (
		<div>
			<Typography variant="h5">Manage Users</Typography>
			{/* Add your manage users functionality or content here */}
		</div>
	);
}

// Main AdminPage Component
export const Admin = () => {
	const [value, setValue] = React.useState(0);
	const { user } = useUserAuth();
	const navigate = useNavigate();
	useEffect(() => {
		if (!user) {
			// Redirect to login page
			// navigate("/");
		}
	});
	const [currentEvent, setCurrentEvent] = useState();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const tabComponents = [CreateEvents, ManageEvents, ManageUsers];

	return (
		<Box sx={{ display: "flex" }}>
			<TabContext value={value}>
				<AppBar
					position="fixed"
					style={{ height: "calc(70px + 4vw)", backgroundColor: "#fff" }}
				>
					<Toolbar>
						<Typography
							variant="h6"
							noWrap
							sx={{ flexGrow: 1 }}
							style={{
								color: "#121",
							}}
						>
							Admin Panel
						</Typography>
						<TabList
							value={value}
							onChange={handleChange}
							aria-label="admin tabs"
							orientation="horizontal"
							style={{
								flexGrow: "1",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Tab label="Create Events" value={0} />
							<Tab label="Manage Events" value={1} />
							<Tab label="Manage Users" value={2} />
						</TabList>
						<Box style={{ flexGrow: "0" }}>
							<img src={IG_logo} alt="logo1" style={{ width: "5vw" }} />
						</Box>
					</Toolbar>
				</AppBar>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						bgcolor: "background.default",
						p: 3,
						marginTop: "8vh",
						maxHeight: "90vh",
						overflow: "auto",
						marginRight: "2vw",
					}}
				>
					<Toolbar />
					<TabPanel value={0}>
						<CreateEvents />
					</TabPanel>
					<TabPanel value={1}>
						<ManageEvents />
					</TabPanel>
					<TabPanel value={2}>
						<ManageUsers />
					</TabPanel>
				</Box>
			</TabContext>
		</Box>
	);
};
