import React from 'react';
import './Navbar.scss';
import navbarLogo from '../../assets/logos/aika-logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={navbarLogo} alt="Aika logo for the navbar that links to home" className="navbar__logo" />
        <ul className="navbar__list">
            <li className="navbar__list-item">About</li>
            <li className="navbar__list-item">Projects</li>
            <li className="navbar__list-item">Contact</li>
            <li className="navbar__list-item">Resume</li>
        </ul>
    </nav>
  )
}
