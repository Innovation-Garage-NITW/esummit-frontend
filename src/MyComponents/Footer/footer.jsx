import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import CII_logo from "../../assets/CII.png";

const Footer = () => {
	const footerColsData = [
		{
			title: "CII Logo",
			image: CII_logo,
		},
		{
			title: "Contact us",
			links: [
				{ label: "hod_cii@nitw.ac.in", href: "mailto:hod_cii@nitw.ac.in" },
				{
					label: "ig-nitw@student.nitw.ac.in",
					href: "mailto:ig-nitw@student.nitw.ac.in",
				},
				{ label: "+91 70321 60133", href: "tel:+91 70321 60133" },
				{ label: "+91 93955 33228", href: "tel:+91 93955 33228" },
				{
					label:
						"CII, National Institute of Technology Campus, Hanamkonda, Telangana 506004",
					href: "https://maps.app.goo.gl/5KsnUfRfcAgw4uSr5",
				}, //link to google maps
			],
		},
		{
			title: "Help",
			links: [
				{
					label: "Registration",
					href: "/Register-Login"
				},
				{
					label: "Hostel Accommodation",
					href: "https://docs.google.com/forms/d/e/1FAIpQLSd41NHpFgVpg-QHcmAMAcUTK_49A7bL4i6uc14xUL7_GSfb8w/viewform?usp=sf_link",
					target: "_blank",
					rel: "noopener noreferrer",
				},
			],
		},
		{
			title: "Follow us",
			socialLinks: [
				{
					icon: "fab fa-facebook-f",
					href: "https://www.facebook.com/TheInnovationGarage/",
				},
				{
					icon: "fab fa-instagram",
					href: "https://www.instagram.com/ig.nitw/",
				},
				{
					icon: "fab fa-linkedin-in",
					href: "https://www.linkedin.com/company/ignitw/mycompany/",
				},
			],
		},
	];

	const footerCols = footerColsData.map((col, index) => (
		<div className="footer-col" key={index}>
			{col.image ? (
				<img src={col.image} alt={col.title} />
			) : (
				<>
					<h4>{col.title}</h4>
					{col.links && (
						<ul>
							{col.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<a href={link.href} target={link.target} rel={link.rel}>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					)}
					{col.socialLinks && (
						<div className="social-links">
							{col.socialLinks.map((socialLink, socialIndex) => (
								<a href={socialLink.href} key={socialIndex}>
									<i className={socialLink.icon}></i>
								</a>
							))}
						</div>
					)}
				</>
			)}
		</div>
	));

	return (
		<footer className="footer">
			<div className="container">
				<div className="row">{footerCols}</div>
			</div>
		</footer>
	);
};

export default Footer;
