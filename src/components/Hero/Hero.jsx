import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Krishnan</h1>
        <p className={styles.description}>
          I'm a third-year CSE student at Amrita Vishwa Vidyapeetham, exploring full-stack development with
           React and Node.js. Always eager to learn and open to collaborations
           —let's build something together!
        </p>
        <a href="mailto:kris2005f24@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <hr></hr>
        <a href="/resume.pdf"className={styles.resume} > 
        View My Resume (PDF)
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};