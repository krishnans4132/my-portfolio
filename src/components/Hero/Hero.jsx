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
          I'm a third-year CSE student at Amrita Vishwa Vidyapeetham, exploring full-stack development . Always eager to learn and open to collaborations
          —let's build something together!
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kris2005f24@gmail.com&su=Hello&body=Hi%20Krishnan,"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
        <hr></hr>
        <a href={resume} download className={styles.resume} >
          Download resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/unnamed.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};