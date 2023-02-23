import React from "react";
import git from "../Images/git.png";
import github from "../Images/github.png";
import { Box, Heading, Image } from "@chakra-ui/react";

const Tools = () => {
  return (
    <Box padding="50px" bgColor={"brand.500"} paddingBottom={"100px"}>
      <Heading
        fontFamily={"cursive"}
        color={"brand.300"}
        m="30px"
        backgroundColor={"brand.500"}
        letterSpacing="2px"
      >
        Tools
      </Heading>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={{ base: "30px", md: "50px" }}
        width={{ base: "90%" }}
        margin={"auto"}
        backgroundColor={"brand.500"}
      >
        <Box
          bgColor="brand.500"
          color="brand.500"
          _hover={{ color: "brand.300", transition: "0.5s" }}
        >
          VS Code
          <Image
            width={"75px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
            alt="logo"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{
              transform: "scale(1.3)",
              translate: "0% 20%",
              transition: "0.3s",
            }}
          />
        </Box>
        <Box
          bgColor="brand.500"
          color="brand.500"
          _hover={{ color: "brand.300", transition: "0.5s" }}
        >
          Git
          <Image
            width={"75px"}
            src={git}
            alt="logo"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{
              transform: "scale(1.3)",
              translate: "0% 20%",
              transition: "0.3s",
            }}
          />
        </Box>
        <Box
          bgColor="brand.500"
          color="brand.500"
          _hover={{ color: "brand.300", transition: "0.5s" }}
        >
          Github
          <Image
            width={"75px"}
            src={github}
            alt="logo"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="10px"
            bgColor="brand.500"
            borderRadius="10px"
            _hover={{
              transform: "scale(1.3)",
              translate: "0% 20%",
              transition: "0.3s",
            }}
          />
        </Box>

        <Box></Box>
      </Box>
    </Box>
  );
};

export default Tools;
