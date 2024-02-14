import React, { useState, useContext } from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import IG_logo from "../../assets/IG logo.png";

// import { UserContext } from "../../context/userContext";

const menuItemsData = [
	{ label: "TimeLine", link: "/TimeLine" },
	{ label: "Events", link: "/Events" },
	{ label: "Sponsors", link: "/Sponsors" },
	{ label: "Speakers", link: "/Speakers" },
	{ label: "Teams", link: "/Contact-Us" },
	{ label: "Register/Login", link: "/Register-Login" },			//index = 5
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);				//for hamburger menu
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	// const { user, logOut } = useContext(UserContext);			//for backend integration

	async function handleLogOut() {
		// await logOut();
		setIsLoggedIn(false);
	}

	const listItems = menuItemsData.map((menuItem, index) => (
		<li key={index}>
			{index === 5 ? ( 						// Check if the index is 5 for login/logout
				isLoggedIn ? (
					<button
						onClick={() => {
							handleLogOut();
						}}
					>
						Log Out
					</button>
				) : (
					<NavLink to="/Register-Login">Register/Login</NavLink>
				)
			) : (
				// Render regular NavLink for other menu items
				<NavLink to={menuItem.link}>{menuItem.label}</NavLink>
			)}
		</li>
	));

	return (
		<>
			<nav>
				<div className="title">
					<Link to="./">
						<img src={IG_logo} alt="logo1" />
					</Link>
				</div>

				<div
					className="menu"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className={menuOpen ? "open" : ""}>{listItems}</ul>
			</nav>
		</>
	);
};

export default Header;
