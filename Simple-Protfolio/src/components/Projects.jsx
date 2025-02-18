import React, { useState } from "react";
import ProjectModal from './ProjectModal';
import styles from './Projects.module.css';

// Importing images
import img1 from '../assets/images/img 1.png';
import img2 from '../assets/images/img 2.png';
import img3 from '../assets/images/img 3.png';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const projects = [
    {
      title: "BookWise",
      description: "BookWise aims to provide readers with a seamless experience in exploring and engaging with literature. Whether you're a seasoned bookworm or just beginning your reading journey, BookWise offers something for everyone. From classic literature to contemporary bestsellers, from mystery to romance to science fiction, BookWise has a diverse collection to satisfy every reader's taste.",
      imageUrl: img1
    },
    {
      title: "Monitor Server",
      description: "Developed a comprehensive Bash script to monitor the functionality of a domain and ensure the server's optimal performance. The script continuously checks if the domain is accessible on port 80 and takes necessary actions in case of any issues.",
      imageUrl: img2
    },
    {
      title: "OCR Desktop App",
      description: "Developed a desktop application using Python and PyQt5 to streamline the process of extracting text from PDFs and images. The application integrates two of the most accurate OCR technologies: Tesseract 5 and Google Cloud Vision API, allowing users to choose their preferred method for text extraction.",
      imageUrl: img3
    }
  ];

  const openModal = (project) => {
    setShowModal(project);
    setExpandedProject(null); // Close any expanded project
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <section id="projects" className="container mt-5">
      <h2 className={styles['project-title']}>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`col-md-4 mb-4 ${styles.projectItem} ${expandedProject === index ? styles.projectExpanded : ""}`}
            style={{ position: 'relative' }}
          >
            <div
              className={`${styles.card} ${expandedProject === index ? styles.expandedCard : ""}`}
              onClick={() => openModal(project)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.cardImgTop}
              />
              <div className={`${styles.cardOverlay} ${expandedProject === index ? styles.show : ""}`}>
                <h5 className="card-title">{project.title}</h5>
              </div>
              <div className={`${styles.cardBody} ${expandedProject === index ? styles.show : ""}`}>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && <ProjectModal project={showModal} onClose={closeModal} />}
    </section>
  );
};

export default Projects;
