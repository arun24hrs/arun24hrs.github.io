import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectContainer.module.css";

const data = [
  {
    url: "https://drive.google.com/file/d/1MsS1-kMitpehK4FL2b1S8chQFGfL3-Ex/view?usp=sharing",
    img: "../Images/twiik.png",
    name: "shapelink.com",
    type: "Solo Project",
    about:
      "Twiik is a website that provides a fitness coach. People who are willing to virtually connect to a fitness coach can be here and fulfill their wish of being fit and healthy.",
    site: "https://lighthearted-horse-c63ac1.netlify.app/",
    github: "https://github.com/arun24hrs/twiik_clone",
    tech: "HTML, CSS",
    duration: "5 days",
  },
  {
    url: "https://drive.google.com/file/d/1m6AudGMMbGQQlKLCcLd72jqlCA38W0dl/view?usp=sharing",
    img: "../Images/leadiq.png",
    name: "leadiq.com",
    type: "Group Project",
    about:
      "LeadIQ is a platform of B2B sales prospecting tools. Find prospect data, track buying signals, & personalize cold outreach for outbound prospecting.",
    site: "https://verdant-pegasus-7472d3.netlify.app/",
    github: "https://github.com/VivBelwal/LeadiQ",
    tech: "JS, HTML, CSS",
    duration: "5 days",
  },
  {
    url: "https://drive.google.com/file/d/1Jf2I5kaFwLIJUV6cPTOrPyz05Keddb0z/view?usp=sharing",
    img: "../Images/ketto.png",
    name: "ketto.com",
    type: "Group Project",
    about:
      "Ketto is an Online Crowdfunding Platform and Website in India for fundraising of Social, Charity, Movies, Music, Personal and Creative causes.",
    site: "https://spontaneous-sprinkles-b69320.netlify.app/",
    github: "https://github.com/sofiyanshaikh008/versed-substance-8213",
    tech: "JS, HTML, CSS",
    duration: "5 days",
  },
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
  );
};

export default ProjectContainer;
