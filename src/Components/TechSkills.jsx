import React from "react";
import css from '../Images/css3.svg'
import html from '../Images/html5.svg'
import js from '../Images/javascript.svg'
import react from '../Images/react.svg'
import redux from '../Images/redux.svg'
import ts from '../Images/typescript.svg'
import mongo from '../Images/mongodb.png'
import scss from '../Images/sass.png'
import tailwind from "../Images/tailwind.svg"
import jquery from "../Images/jquery.svg"
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const TechSkills = () => {
  return (
    <Box pt={"10px"} backgroundColor={"brand.500"} id="skills" >
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
        className="skills-card"
      >
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}} >
        CSS3
          <Text className="skills-card-name"></Text>
          <Image
            className="skills-card-img"
            width={"75px"}
            src={css}
            alt="logo"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
        HTML5
        <Text className="skills-card-name"></Text>
          <Image
            width className="skills-card-img" h={"75px"}
            src={html}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
        JavaScript
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={js}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
        React.js
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={react}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
        Redux
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={redux}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          TypeScript
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={ts}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          Next.js
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          jQuery
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={jquery}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          Node.js
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          Express.js
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          MongoDB
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={mongo}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          Tailwind
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={tailwind}
            alt="logo"
             boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{transform:"scale(1.3)", translate:"0% 20%", transition:"0.3s"}}
          />
        </Box>
        <Box className="skills-card" bgColor="brand.500" color="brand.500"  _hover={{color: "brand.300", transition:"0.5s"}}>
          SCSS
        <Text className="skills-card-name"></Text>
          <Image
          className="skills-card-img"
            width={"75px"}
            src={scss}
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
