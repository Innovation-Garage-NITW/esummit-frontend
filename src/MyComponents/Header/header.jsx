import React, { useState } from "react";
import "./header.css";

import { NavLink, Link } from "react-router-dom";

import ECell from "../../assets/ecell_logo.png";
import IG_logo from "../../assets/IG logo.png";

const menuItemsData = [
	{ label: "Events", link: "/Events" },
	{ label: "Sponsors", link: "/Sponsors" },
	{ label: "Speakers", link: "/Speakers" },
	{ label: "Contact Us", link: "/Contact-Us" },
	{ label: "Register/Login", link: "/Register-Login" },
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const listItems = menuItemsData.map((menuItem, index) => (
		<li key={index}>
			<NavLink to={menuItem.link}>{menuItem.label}</NavLink>
		</li>
	));

	return (
		<>
			<nav>
				<Link to="./" className="title">
					<img src={IG_logo} alt="logo1" />
				</Link>
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
