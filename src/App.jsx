import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ScrollContainer } from "react-scroll-motion";
import Header from "./MyComponents/Header/header";
import Footer from "./MyComponents/Footer/footer";

import {
	Home,
	Events,
	Sponsors,
	Speakers,
	RegisterLogin,
	Teams,
	Admin,
} from "./MyComponents/Pages";

import TimeLine from "./MyComponents/Pages/TimeLine";
import Overlay from "./MyComponents/Pages/Overlay";
import { useState } from "react";
import { UserAuthContextProvider } from "./context/userAuthContext";


function App() {
	const [EventsOverLay, setEventsOverLay] = useState(false);
	const [currEventsData, setCurrEventsData] = useState({
		title: "innovateSphere",
		description: "Showcase your groundbreaking technical project at Technozion '23's Shark Tank InnovateSphere, hosted by ECE Society in collaboration with Innovation Garage NITW. Whether it's cutting-edge software, hardware, or a unique tech integration, we want your ideas!,Present your project at our college-wide event during Technozion, where industry experts and peers will decide which projects stand out. The most promising ones will have the opportunity to pitch directly to THUB for potential development and investment.",
		venue: 'ALC',
		time: "16th March 2024, 5:00PM",
		category: "Competition",
		prizes: "20,000$"
	});

	const menuItemsData = [

		{ label: "Events", link: "/Events", component: <Events EventsOverLay={EventsOverLay} setEventsOverLay={setEventsOverLay} currEventsData={currEventsData} setCurrEventsData={setCurrEventsData} /> },
		{ label: "Sponsors", link: "/Sponsors", component: <Sponsors /> },
		{ label: "Speakers", link: "/Speakers", component: <Speakers /> },
		{ label: "Teams", link: "/Teams", component: <Teams /> },
		{ label: "RegisterLogin", link: "/Register-Login", component: <RegisterLogin />, },
		{ label: "admin", link: "/admin", component: <Admin />, },
		{ label: "TimeLine", link: '/TimeLine', component: <TimeLine /> }
	];

	return (
		<ScrollContainer>
			<UserAuthContextProvider>
				{EventsOverLay && <Overlay setEventsOverLay={setEventsOverLay} currEventsData={currEventsData}></Overlay>}
				<div className="App" >
					<Header />
					<Routes>
						<Route exact path="/" element={<Home EventsOverLay={EventsOverLay} setEventsOverLay={setEventsOverLay} currEventsData={currEventsData} setCurrEventsData={setCurrEventsData} />} />

						{/*mapping all the routes*/}
						{menuItemsData.map((menuItem) => (
							<Route
								key={menuItem.link}
								path={menuItem.link}
								element={menuItem.component}
							/>
						))}
					</Routes>

					<Footer />
				</div>
			</UserAuthContextProvider>
		</ScrollContainer>
	);
}

export default App;
