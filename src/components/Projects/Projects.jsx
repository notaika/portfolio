import React from "react";
import projectsIcon from "../../assets/icons/folder.png";
import cssIcon from "../../assets/icons/css-3.svg";
import expressIcon from "../../assets/icons/express.svg";
import gitIcon from "../../assets/icons/git-icon.svg";
import htmlIcon from "../../assets/icons/html-5.svg";
import jsIcon from "../../assets/icons/javascript.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import nodeIcon from "../../assets/icons/nodejs-icon.svg";
import reactIcon from "../../assets/icons/react.svg";
import sassIcon from "../../assets/icons/sass.svg";
import habitScreenshots from "../../data/habitScreenshots";
import instockScreenshots from "../../data/instockScreenshots";
import "./Projects.scss";

export default function Projects() {
  const habitScreenshotsList = [
    "habitDashboard",
    "habitLanding",
    "habitTracker",
    "habitTimer",
    "habitShop",
  ];

  const instockScreenshotsList = [
    "warehousePage",
    "inventoryPage",
    "warehouseInfo",
    "inventoryInfo",
    "addWarehouse",
    "editWarehouse",
    "deleteWarehouse"
  ]

  return (
    <article className="projects" id="projects">
      <h1 className="projects-title">
        <img
          src={projectsIcon}
          alt="Folder icon for projects title"
          className="projects-title-logo"
        />
        Projects
      </h1>
      <section className="projects__completed">
        <div className="projects__item">
          <div className="projects__item-screenshots">
            <div className="projects__item-marquee">
              {habitScreenshotsList.map((screenshot, key) => (
                <img
                  src={habitScreenshots[screenshot]}
                  alt=""
                  className="projects__item-img"
                  key={key}
                />
              ))}

              {/* images are duplicated to create a seamless look on the marquee */}
              {habitScreenshotsList.map((screenshot, key) => (
                <img
                  src={habitScreenshots[screenshot]}
                  alt=""
                  className="projects__item-img"
                  key={`dup-${key}`}
                />
              ))}
            </div>
          </div>
          <div className="projects__item-text">
            <h1 className="projects__item-title">
              Ha.BIT - A Gamified Productivity App
            </h1>
            <p className="projects__item-description">
              Ha.BIT is a full-stack gamified productivity application designed to enhance
              user productivity by transforming task management into an engaging
              experience. Users can create and manage tasks, set timers, and
              track progress while earning rewards and leveling up. The app
              features comprehensive task management, gamification elements,
              habit tracking, and visual progress dashboards.
            </p>

            <h1 className="projects__item-title">Tech Stack</h1>
            <div className="projects__stack">
              <img src={sassIcon} alt="" className="projects__stack-img" />
              <img src={jsIcon} alt="" className="projects__stack-img" />
              <img src={reactIcon} alt="" className="projects__stack-img" />
              <img src={nodeIcon} alt="" className="projects__stack-img" />
              <img src={expressIcon} alt="" className="projects__stack-img" />
              <img src={mysqlIcon} alt="" className="projects__stack-img" />
            </div>

            <div className="projects__item-links">
              <h1 className="projects__item-title">Links</h1>
              <div className="projects__item-links-container">
                <a
                  href="https://github.com/notaika/Ha.BIT"
                  className="projects__item-link"
                >
                  Front-end{" "}
                </a>
                +
                <a
                  href="https://github.com/notaika/Ha.BIT-API"
                  className="projects__item-link"
                >
                  {" "}
                  Back-end
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__item">
          <div className="projects__item-screenshots">
            <div className="projects__item-marquee instock-marquee">
              {instockScreenshotsList.map((screenshot, key) => (
                <img
                  src={instockScreenshots[screenshot]}
                  alt=""
                  className="projects__item-img"
                  key={key}
                />
              ))}

              {/* images are duplicated to create a seamless look on the marquee */}
              {instockScreenshotsList.map((screenshot, key) => (
                <img
                  src={instockScreenshots[screenshot]}
                  alt=""
                  className="projects__item-img"
                  key={`dup-${key}`}
                />
              ))}
            </div>
          </div>
          <div className="projects__item-text">
            <h1 className="projects__item-title">
              InStock - Inventory Management
            </h1>
            <p className="projects__item-description">
              InStock is a full-stack inventory management system developed to
              enhance scalability and performance for a Fortune 500 client. The
              existing system was struggling under heavy traffic, and my team (5 people) was
              tasked to address these challenges. This project was developed by
              an Agile team using a modern tech stack.
            </p>

            <h1 className="projects__item-title">Tech Stack</h1>
            <div className="projects__stack">
              <img src={sassIcon} alt="" className="projects__stack-img" />
              <img src={jsIcon} alt="" className="projects__stack-img" />
              <img src={reactIcon} alt="" className="projects__stack-img" />
              <img src={nodeIcon} alt="" className="projects__stack-img" />
              <img src={expressIcon} alt="" className="projects__stack-img" />
              <img src={mysqlIcon} alt="" className="projects__stack-img" />
            </div>

            <div className="projects__item-links">
              <h1 className="projects__item-title">Links</h1>
              <div className="projects__item-links-container">
                <a
                  href="https://github.com/notaika/InStock"
                  className="projects__item-link"
                >
                  Front-end{" "}
                </a>
                +
                <a
                  href="https://github.com/notaika/InStock-API"
                  className="projects__item-link"
                >
                  {" "}
                  Back-end
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
