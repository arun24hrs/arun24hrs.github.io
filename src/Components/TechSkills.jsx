import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const TechSkills = () => {
  return (
    <Box pt={"10px"} backgroundColor={"brand.500"} id="skills">
      <Heading
        letterSpacing="2px"
        fontFamily={"cursive"}
        color={"brand.300"}
        m={{base: "40px", md: "80px"}}
        backgroundColor={"brand.500"}
      >
        Technical Skills
      </Heading>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={{base: "30px", md: "50px"}}
        width={{ base: "90%"}}
        margin={"auto"}
        backgroundColor={"brand.500"}
      >
        <Box class="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          CSS3
          <Image
          
            width={"75px"}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="logo"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box class="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          HTML5
          <Image
            width={"75px"}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box class="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          JavaScript
          <Image
          
            width={"75px"}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box class="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          React.JS
          <Image
          
            width={"75px"}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box class="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          Redux
          <Image
          
            width={"75px"}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box class="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          TypeScript
          <Image
          
            width={"75px"}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TechSkills;
