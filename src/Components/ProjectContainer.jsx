import React from 'react'
import ProjectCard from './ProjectCard';
import styles from "./ProjectContainer.module.css"

const data = [
    {
      image: "../Images/twiik.png",
      name: "shapelink.com",
      type: "Solo Project",
      about:
        "Twiik is a website that provides a fitness coach. People who are willing to virtually connect to a fitness coach can be here and fulfill their wish of being fit and healthy.",
      site: "https://lighthearted-horse-c63ac1.netlify.app/",
      github: "https://github.com/arun24hrs/twiik_clone",
      tech: "HTML, CSS"
    },
    {
      image: "../Images/leadiq.png",
      name: "leadiq.com",
      type: "Group Project",
      about:
      "LeadIQ is a platform of B2B sales prospecting tools. Find prospect data, track buying signals, & personalize cold outreach for outbound prospecting.",
      site: "https://verdant-pegasus-7472d3.netlify.app/",
      github: "https://github.com/VivBelwal/LeadiQ",
      tech: "JS, HTML, CSS"
    },
    {
        image: "../Images/leadiq.png",
        name: "leadiq.com",
        type: "Group Project",
        about:
          "LeadIQ is a platform of B2B sales prospecting tools. Find prospect data, track buying signals, & personalize cold outreach for outbound prospecting.",
        site: "https://verdant-pegasus-7472d3.netlify.app/",
        github: "https://github.com/VivBelwal/LeadiQ",
      }
  ];

const ProjectContainer = () => {
  return (
    <section className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>
        <div className={styles.cardHolder}>
        {data.map((el) => (
        <ProjectCard key={el.name} {...el} />
      ))}
        </div>
    </section>
  )
}

export default ProjectContainer