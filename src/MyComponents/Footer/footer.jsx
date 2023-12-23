import React from "react";
import "./footer.css";

const Footer = () => {
  const footerColsData = [
    {
      title: "About us",
      links: [
        { label: "somehting", href: "#" },
        { label: "our services", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Registration", href: "#" },
      ],
    },
    {
      title: "Something",
      links: [
        { label: "aaaa", href: "#" },
        { label: "bbbb", href: "#" },
      ],
    },
    {
      title: "follow us",
      socialLinks: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
        { icon: "fab fa-linkedin-in", href: "#" },
      ],
    },
  ];

  const footerCols = footerColsData.map((col, index) => (
    <div className="footer-col" key={index}>
      <h4>{col.title}</h4>
      <ul>
        {col.links &&
          col.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
      </ul>
      {col.socialLinks && (
        <div className="social-links">
          {col.socialLinks.map((socialLink, socialIndex) => (
            <a href={socialLink.href} key={socialIndex}>
              <i className={socialLink.icon}></i>
            </a>
          ))}
        </div>
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
