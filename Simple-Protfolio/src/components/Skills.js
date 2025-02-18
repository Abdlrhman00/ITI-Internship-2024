import React, { useState } from "react";
import styles from "./Skills.module.css"; // Import the CSS module

const Skills = () => {
  // Initialize state to keep track of which skill description is visible
  const [visibleSkill, setVisibleSkill] = useState(null);

  // Function to toggle the visibility of skill descriptions
  const toggleSkillDescription = (index) => {
    setVisibleSkill(visibleSkill === index ? null : index);
  };

  const skills = [
    {
      title: "JavaScript",
      description: "Proficient in JavaScript for building dynamic and interactive web applications."
    },
    {
      title: "Node.js",
      description: "Experienced in building scalable and high-performance server-side applications using Node.js."
    },
    {
      title: "Express.js",
      description: "Specialized in developing RESTful APIs and web applications using the Express.js framework."
    },
    {
      title: "MySQL",
      description: "Proficient in managing and querying relational databases using MySQL."
    },
    {
      title: "MongoDB",
      description: "Experienced in working with MongoDB for efficient data storage and retrieval in NoSQL databases."
    },
    {
      title: "Server Deployment",
      description: "Skilled in deploying and managing servers, particularly using Nginx for web hosting."
    },
    {
      title: "CI/CD Pipelines",
      description: "Experienced in setting up CI/CD pipelines to automate and streamline development processes."
    },
    {
      title: "Bash Scripting",
      description: "Proficient in writing Bash scripts on Linux to automate tasks and enhance system management."
    },
    {
      title: "IT and Cybersecurity",
      description: "Keen interest in IT and cybersecurity, continuously expanding knowledge and skills in these areas."
    }
  ];

  return (
    <section id="skills" className={`${styles.container} mt-5`}>
      <h2 className={styles.heading}>My Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6 mb-4" key={index} style={{ position: 'relative' }}>
            <div 
              className={styles.card} 
              onClick={() => toggleSkillDescription(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{skill.title}</h5>
                {visibleSkill === index && (
                  <div className={styles.descriptionOverlay}>
                    <p className={styles.cardText}>{skill.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
