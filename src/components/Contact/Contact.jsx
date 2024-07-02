import React from 'react';
import contactIcon from '../../assets/icons/communication.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github-sign.png';
import emailIcon from '../../assets/icons/apple.png';
import './Contact.scss';

export default function Contact() {
  return (
    <article className="contact" id="contact">
        <h1 className="contact-title">
            <img src={contactIcon} alt="" className="contact-title-logo" />
            Contact
        </h1>
        <section className="contact__container">
            <p1 className="contact__message">If you would like to work together, discuss an opportunity for work, or even just want to chat, feel free to reach out to me at any of the links below! </p1>
            <div className="contact__socials">
                <a href="https://www.linkedin.com/in/aika-manalo/" className="contact__links"><img src={linkedinIcon} alt="" className="contact__links-img" />LinkedIn </a>
                <a href="https://github.com/notaika" className="contact__links"><img src={githubIcon} alt="" className="contact__links-img" />GitHub</a>
                <a href="mailto:aikamnlo@gmail.com" className="contact__links"><img src={emailIcon} alt="" className="contact__links-img" />Email</a>
            </div>
        </section>
    </article>
  )
}
