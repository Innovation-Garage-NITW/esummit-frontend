import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ScrollContainer } from "react-scroll-motion";
import Header from "./MyComponents/Header/header";

import {
	Home,
	Events,
	Sponsors,
	Speakers,
	RegisterLogin,
	Teams,
  Admin,
} from "./MyComponents/Pages";
import { UserAuthContextProvider } from "./context/userAuthContext";

const menuItemsData = [

	{ label: "Events", link: "/Events", component: <Events /> },
	{ label: "Sponsors", link: "/Sponsors", component: <Sponsors /> },
	{ label: "Speakers", link: "/Speakers", component: <Speakers /> },
	{ label: "Teams", link: "/Contact-Us", component: <Teams /> },
	{ label: "RegisterLogin", link: "/Register-Login", component: <RegisterLogin />, },
  { label: "admin", link: "/admin", component: <Admin />, },

];

function App() {

	return (
		<ScrollContainer>
			<div className="App" >
				<Header />

				<UserAuthContextProvider>
					<Routes>
						<Route path="/" element={<Home />} />

						{/*mapping all the routes*/}
						{menuItemsData.map((menuItem) => (
							<Route
								key={menuItem.link}
								path={menuItem.link}
								element={menuItem.component}
							/>
						))}
					</Routes>
				</UserAuthContextProvider>

				<Footer />
			</div>
		</ScrollContainer>
	);
}

export default App;
