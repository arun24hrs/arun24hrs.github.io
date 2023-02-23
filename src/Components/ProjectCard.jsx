import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Button,
  Link
} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons"

const ProjectCard = ({ img, name, type, about, site, github,tech, duration }) => {
    // console.log(url)
  return (
    <Flex py={6} bg="brand.500" class="project-card">
      <Box
        maxW={{base: "280px", sm: "400px",md: "550px", lg: "550px"}}
        w={"full"}
        bg={useColorModeValue("brand.300", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        m={"20px"}
        overflow={"hidden"}
      >
        <Box
          h={{base: "180px", md: "210px"}}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          backgroundColor="blackAlpha.800"
          overflow={"hidden"}
        >
          <Link href={site} isExternal><Image src={img} alt="Hero Image" layout={"fill"}  overflow={"hidden"} opacity={"60%"} _hover={{opacity: "100%", zIndex:"-1"}}/>
          <ExternalLinkIcon opacity={"60%"} position={"absolute"} top="50%" left={"50%"} color={"white"} bg="brand.300"/></Link>
        </Box>
        <Stack>
          <Text
            color={"brand.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={{base: "md", md: "lg"}}
            letterSpacing={1.1}
            className={"project-title"}

          >
            {name}
          </Text>
          <Heading
            bg={"brand.500"}
            color={useColorModeValue("brand.300", "white")}
            p={1}
            fontSize={{base: "md",md:"xl"}}
            fontFamily={"body"}
          >
            {type}
          </Heading>
          <Text color={"gray.300"} className="project-description">{about}</Text>

          <Text><span style={{color: "#86C232"}}>Duration: </span>{duration}</Text>
          <Text className="project-tech-stack"><span style={{color: "#86C232"}}>Tech Stack: </span>{tech}</Text>
        </Stack>
        <Stack
          mt={6}
          direction={"row"}
          spacing={4}
          align={"Flex"}
          justifyContent="space-around"
        >
          <Link class="project-deployed-link" href={site} _hover={{ textDecoration: "none" }} isExternal>
            <Button
              variant="ghost"
              border={"1px solid white"}
              size={{base: "sm", md: "md"}}
              _hover={{ bg: "brand.500", color: "brand.300", borderColor: "brand.500" }}
            >
              Visit Website
            </Button>
          </Link>
          <Link className="project-github-link" href={github} _hover={{ textDecoration: "none" }} isExternal>
            <Button variant="solid" bg="brand.500" color="brand.300" _hover={{ bg: "brand.400", color: "white" }} size={{base: "sm", md: "md"}}>
              Source Code
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
