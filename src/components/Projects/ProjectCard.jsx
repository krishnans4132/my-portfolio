import React, { useRef } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      // Scroll the card fully into view smoothly if it's cut off
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div
      className={styles.container}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.details}>
        <div className={styles.detailsInner}>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className={styles.links}>
            <a href={demo} className={styles.link}>
              Demo
            </a>
            <a href={source} className={styles.link}>
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};