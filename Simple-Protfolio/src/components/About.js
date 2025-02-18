import React from "react";
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  return (
    <section id="about" className={`${styles['about-section']} container mt-5`}>
      <h2 className={styles['about-title']}>About Me</h2>
      <p className={styles['about-text']}>
        I am a Computer Science student with a passion for programming and web development. Proficient in JavaScript, Node.js, Express.js, and MySQL, I specialize in creating dynamic and responsive web applications. Beyond my academic pursuits, I have a keen interest in IT and cybersecurity.
        I have extensive experience in web hosting and server configuration, including deploying applications and managing servers using Nginx. My skills in server deployment, CI/CD pipelines, and Bash scripting on Linux enhance my ability to deliver high-performance, secure, and efficient web solutions.
        Continuously expanding my knowledge and skills, I am committed to staying abreast of the latest advancements in technology.
      </p>
    </section>
  );
};

export default About;
