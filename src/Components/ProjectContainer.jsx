import React from "react";
import ProjectCard from "./ProjectCard";
import twiik from "../Images/twiik.png";
import leadiq from "../Images/leadiq.png";
import ketto from "../Images/ketto.png";
import homeDecore from "../Images/homeDecore.png";
import { Box, Heading } from "@chakra-ui/react";

const data = [
  {
    url: "https://drive.google.com/file/d/1MsS1-kMitpehK4FL2b1S8chQFGfL3-Ex/view?usp=sharing",
    img: twiik,
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
    url: "https://drive.google.com/file/d/1NmMziggDj9QDkg4G97C7fQsk74H8DVu2/view?usp=sharing",
    img: homeDecore,
    name: "homedecore.com",
    type: "Group Project",
    about:
      "Home Decore is a clone of Pepperfry that caters the need furnitures, lamps, carpets, home decore at best price. People who are planning to redefine their home and looking for home items can visit.",
    site: "https://home-interior-capitaln.vercel.app/",
    github: "https://github.com/capitalN/home_interior",
    tech: "Next.js, CSS, Redux",
    duration: "6 days",
  },
  {
    url: "https://drive.google.com/file/d/1m6AudGMMbGQQlKLCcLd72jqlCA38W0dl/view?usp=sharing",
    img: leadiq,
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
    img: ketto,
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
    <Box
      backgroundColor="brand.500"
      padding="20px"
      paddingBottom="100px"
      id="projects"
    >
      <Heading
        backgroundColor="brand.500"
        fontFamily={"cursive"}
        color="#222629"
        fontSize="28px"
        fontWeight="600"
        textTransform="uppercase"
        margin="40px"
        letterSpacing="2px"
      >
        Projects
      </Heading>
      <Box
        width={"80%"}
        m="auto"
        display={"grid"}
        gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.map((el) => (
          <ProjectCard key={el.name} {...el} />
        ))}
      </Box>
    </Box>
  );
};

// className={styles.cardHolder}

export default ProjectContainer;
