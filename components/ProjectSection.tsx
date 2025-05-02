import React from "react";
import styles from "./Projects.module.css";


const ProjectCard = ({
  title,
  description,
  imageUrl,
  linkUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}) => {
  return (
    <div className={styles.projectCard}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className={styles.projectImage}
          style={{ objectFit: "cover" }}
        />
      </a>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.projectLinkContainer}>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Advocate Health Care",
      description:
        "​Advocate Health Care, now part of Advocate Health, is the largest health system in Illinois, offering comprehensive services across 10 hospitals and over 400 care sites, with a network of 6,300 physicians.",
      imageUrl: "/images/advocate_health_care.jpg",
      linkUrl: "https://www.advocatehealth.com/",
    },
    {
      title: "GeItAI",
      description:
        "getitAI is pioneering a new era of human-centric commerce, bridging the gap between the convenience of buying online and the personal engagement experienced in-store. ",
      imageUrl:
        "https://cdn.prod.website-files.com/60c689ba9e78889f30709db3/65a436e1987628aaaba5aecb_getitAI%20300.jpg",
      linkUrl: "https://www.getit.ai/",
    },
    {
      title: "Deep Sea Gutsby",
      description:
        "Deep Sea Gypsy is a Florida-based boutique offering handcrafted spiritual jewelry infused with healing energies, designed to support personal transformation and well-being.",
      imageUrl: "/images/deepseagypsy.jpeg",
      linkUrl: "https://deepseagypsy.com/",
    },
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            linkUrl={project.linkUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
