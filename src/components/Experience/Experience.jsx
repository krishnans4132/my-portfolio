import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const individualSkills = skills.flatMap((category) => category.skills);
  const technologies = individualSkills.filter((skill) => skill.type !== "skill");
  const generalSkills = individualSkills.filter((skill) => skill.type === "skill");

  const renderSkill = (skill) => (
    <div key={skill.name} className={styles.skill}>
      <div className={styles.skillImageContainer}>
        <img
          src={getImageUrl(skill.imageSrc)}
          alt=""
          className={skill.monochrome ? styles.skillIconMonochrome : ""}
          aria-hidden="true"
        />
      </div>
      <div className={styles.skillNameExtra}>
        <div className={styles.skillNameExtraInner}>
          <p>{skill.name}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem) => {
            return (
              <li key={historyItem.organisation} className={styles.historyItem}>
                {historyItem.imageSrc ? (
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} logo`}
                  />
                ) : (
                  <div className={styles.historyLogo} aria-hidden="true">
                    {historyItem.initials}
                  </div>
                )}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <div className={styles.historyItemExtra}>
                    <div className={styles.historyItemExtraInner}>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul>
                        {historyItem.experiences.map((experience) => {
                          return <li key={experience}>{experience}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.skills}>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>Technologies</h3>
            <div className={styles.skillList}>
              {technologies.map(renderSkill)}
            </div>
          </div>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>Skills</h3>
            <div className={styles.skillList}>
              {generalSkills.map(renderSkill)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
