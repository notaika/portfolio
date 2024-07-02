import React from 'react';
import linkedinIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github-sign.png';
import emailIcon from '../../assets/icons/apple.png';
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
        <div className="footer__info">
          <p>&copy; 2024 Aika Manalo</p>
          <p>aikamnlo@gmail.com</p>
        </div>
        <div className="footer__links">
          <p className="footer__message">Made with &#x2764;</p>
        </div>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/aika-manalo/" className="footer__social-link">
            <img src={linkedinIcon} alt="LinkedIn" className="footer__social-icon" />
          </a>
          <a href="https://github.com/notaika" className="footer__social-link">
            <img src={githubIcon} alt="GitHub" className="footer__social-icon" />
          </a>
          <a href="mailto:aikamnlo@gmail.com" className="footer__social-link">
            <img src={emailIcon} alt="Twitter" className="footer__social-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}
