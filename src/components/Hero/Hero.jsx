import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  const resume = "assets/hero/resume.pdf";
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Krishnan</h1>
        <p className={styles.description}>
          I'm a third-year Computer Science student at Amrita Vishwa
          Vidyapeetham building AI-powered, full-stack products across computer
          vision, analytics, and web systems.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kris2005f24@gmail.com&su=Hello&body=Hi%20Krishnan,"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
        <a href={resume} download className={styles.resume}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/unnamed.jpg")}
        alt="Portrait of Krishnan S"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
