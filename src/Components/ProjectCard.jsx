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
    <Flex py={6} bg="brand.500" direction="row">
      <Box
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("brand.300", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          backgroundColor="blackAlpha.800"
        >
          <Link href={site} isExternal><Image src={img} alt="Hero Image" layout={"fill"} height="100%" opacity={"60%"} _hover={{opacity: "100%", zIndex:"-1"}}/>
          <ExternalLinkIcon opacity={"60%"} position={"absolute"} top="50%" left={"50%"} color={"white"} bg="brand.300"/></Link>
        </Box>
        <Stack>
          <Text
            color={"brand.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"lg"}
            letterSpacing={1.1}
          >
            {name}
          </Text>
          <Heading
            bg={"brand.500"}
            color={useColorModeValue("brand.300", "white")}
            p={1}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            {type}
          </Heading>
          <Text color={"gray.300"}>{about}</Text>

          <Text><span style={{color: "#86C232"}}>Duration: </span>{duration}</Text>
          <Text><span style={{color: "#86C232"}}>Tech Stack: </span>{tech}</Text>
        </Stack>
        <Stack
          mt={6}
          direction={"row"}
          spacing={4}
          align={"Flex"}
          justifyContent="space-around"
        >
          <Link href={site} _hover={{ textDecoration: "none" }} isExternal>
            <Button
              variant="ghost"
              border={"1px solid white"}
              _hover={{ bg: "brand.500", color: "brand.300", borderColor: "brand.500" }}
            >
              Visit Website
            </Button>
          </Link>
          <Link href={github} _hover={{ textDecoration: "none" }} isExternal>
            <Button variant="solid" bg="brand.500" color="brand.300" _hover={{ bg: "brand.400", color: "white" }}>
              Source Code
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
