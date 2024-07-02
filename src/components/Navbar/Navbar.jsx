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
                <a href="#about" className="navbar__list-title">
                    <img src={aboutIcon} alt="User icon for about" className="navbar__list-item-icon" /> 
                    <span className="navbar__list-text">About</span>
                </a>
            </li>
            <li className="navbar__list-item">
                <a href="#projects" className="navbar__list-title"> 
                    <img src={projectsIcon} alt="" className="navbar__list-item-icon" />
                    <span className="navbar__list-text">Projects</span>
                </a>
            </li>
            <li className="navbar__list-item">
                <a href="#contact" className="navbar__list-title"> 
                    <img src={contactIcon} alt="" className="navbar__list-item-icon" />
                    <span className="navbar__list-text">Contact</span>
                </a>
            </li>
            <li className="navbar__list-item">
                <a href="" className="navbar__list-title"> 
                    <img src={downloadIcon} alt="" className="navbar__list-item-icon" />
                    <span className="navbar__list-text">Resume</span></a>
            </li>
        </ul>
    </nav>
  )
}
