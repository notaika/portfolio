import React from 'react';
import './Navbar.scss';
import navbarLogo from '../../assets/logos/aika-logo.png';
import aboutIcon from '../../assets/icons/user.png';
import projectsIcon from '../../assets/icons/folder.png';
import contactIcon from '../../assets/icons/communication.png';
import downloadIcon from '../../assets/icons/download.png';

export default function Navbar() {
  return (
    <nav className="navbar">
        <a href="#header" className="navbar__logo-link"><img src={navbarLogo} alt="Aika logo for the navbar that links to home" className="navbar__logo" /></a>
        <ul className="navbar__list">
            <li className="navbar__list-item">
                <img src={aboutIcon} alt="" className="navbar__list-item-icon" />
                <a href="" className="navbar__list-text">About</a>
                </li>
            <li className="navbar__list-item">
                <img src={projectsIcon} alt="" className="navbar__list-item-icon" />
                <a href="" className="navbar__list-text">Projects</a></li>
            <li className="navbar__list-item">
                <img src={contactIcon} alt="" className="navbar__list-item-icon" />
                <a href="" className="navbar__list-text">Contact</a>
            </li>
            <li className="navbar__list-item">
                <img src={downloadIcon} alt="" className="navbar__list-item-icon" />
                <a href="" className="navbar__list-text">Resume</a>
                </li>
        </ul>
    </nav>
  )
}
