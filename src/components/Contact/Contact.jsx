import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach out anytime!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
           <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kris2005f24@gmail.com&su=Hello&body=Hi%20Krishnan,"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
            >gmail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/krishnan-s-7ab8b22b4">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/krishnans4132">github</a>
        </li>
      </ul>
    </footer>
  );
};