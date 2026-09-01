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
          alt="Developer working at a computer"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & Full-Stack Developer</h3>
              <p>
                I build practical AI-powered web applications using Python,
                React, Flask, FastAPI, and modern backend technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Science & Problem Solving</h3>
              <p>
                As a third-year CSE student at Amrita Vishwa Vidyapeetham, I
                enjoy applying data structures, algorithms, and software
                engineering principles to meaningful problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud, Data & Delivery</h3>
              <p>
                I work across Docker, Kubernetes, CI/CD, Linux, Hadoop, and
                database systems to build reliable end-to-end solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
