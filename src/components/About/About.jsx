import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/browsing.png")}
          alt="my other picture"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm currently diving into full-stack development,
                building real-world web applications using tools like React, Node.js, and Express.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Passionate Learner & Collaborator</h3>
              <p>
                As a third-year CSE student at Amrita Vishwa Vidyapeetham, 
                I'm a fast learner who loves working with others on meaningful, challenging projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skilled in Multiple Languages & Tools</h3>
              <p>
                 I work with Python, C++, C, Haskell, Java, HTML, CSS, 
                 JavaScript, and tools like GitHub, VS Code, Vite, and 
                 Figma to build and design optimized solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};