import React from 'react';
import aikaIcon from '../../assets/images/aika-icon.png';
import aboutIcon from '../../assets/icons/user.png';
import educationIcon from '../../assets/icons/education.png';
import skillsIcon from '../../assets/icons/skills.png';

import cssIcon from '../../assets/icons/css-3.svg';
import expressIcon from '../../assets/icons/express.svg';
import gitIcon from '../../assets/icons/git-icon.svg';
import htmlIcon from '../../assets/icons/html-5.svg';
import jsIcon from '../../assets/icons/javascript.svg';
import mysqlIcon from '../../assets/icons/mysql.svg';
import nodeIcon from '../../assets/icons/nodejs-icon.svg';
import reactIcon from '../../assets/icons/react.svg';
import sassIcon from '../../assets/icons/sass.svg';

import './About.scss';

export default function About() {
  return (
    <main className="about" id="about">
        <section className="about__me">
        <h1 className="about-title">
        <img src={aboutIcon} alt="User icon for title" className="about-title-logo" />
        About Me
      </h1>
            <img src={aikaIcon} alt="A picture of me (:" className="about__me-icon" />
            <div className="about__me-text">
              <p className="about__me-description">As a biology graduate with a profound curiosity for health sciences, I've embarked on a fulfilling journey as an outreach worker - providing low barrier support and advocacy for individuals with mental health challenges, addiction and disabilities. Through this experience, I've developed a deep understanding of the intersection between healthcare and social services, and a commitment to empowering those in need.</p>
              <p className="about__me-description">Despite my rewarding work in the field, my passion for technology and puzzle solving has remained constant as I've always found joy in deciphering puzzles and finding innovative solutions. Now, I'm eagerly pursuing opportunities to transition my path into software engineering. Given the skills I've gained during my time as a mental health/outreach worker, I am ready to harness these skills and utilize them into enable me to transition into the tech industry.</p>
            </div>
        </section>

        
        <section className="education">
        <h1 className="education-title">
            <img src={educationIcon} alt="Education icon for title" className="education-title-logo" />
            Education
        </h1>
          <div className="education__card">
            <h2 className="education__school">BrainStation</h2>
            <p className="education__degree">Diploma in Software Engineering</p>
            <p className="education__year">MAR 2024 - JUN 2024</p>
          </div>
          <div className="education__card">
            <h2 className="education__school">University of British Columbia</h2>
            <p className="education__degree">BSc. Biology</p>
            <p className="education__year">SEP 2018 - DEC 2023</p>
          </div>
        </section>

        
        <section className="skills">
        <h1 className="skills-title">
          <img src={skillsIcon} alt="Skills icon for title" className="skills-title-logo" />
          Skills
        </h1>
          <div className="skills-container">
            <img src={htmlIcon} alt="HTML icon" className="skills-icon" />
            <img src={cssIcon} alt="CSS icon" className="skills-icon" />
            <img src={sassIcon} alt="SASS icon" className="skills-icon" />
          </div>
          <div className="skills-container">
            <img src={jsIcon} alt="Javascript icon" className="skills-icon" />
            <img src={reactIcon} alt="React icon" className="skills-icon" />
            <img src={nodeIcon} alt="Node.js icon" className="skills-icon" />
          </div>
          <div className="skills-container">
            <img src={expressIcon} alt="Express.js icon" className="skills-icon" />
            <img src={mysqlIcon} alt="MySQL icon" className="skills-icon" />
            <img src={gitIcon} alt="Git icon" className="skills-icon" />
          </div>
        </section>


    </main>
  )
}
