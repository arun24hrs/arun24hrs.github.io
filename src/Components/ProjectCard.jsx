import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Link
} from "@chakra-ui/react";

const ProjectCard = ({ image, name, type, about, site, github,tech }) => {
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
        >
          <Image src={image} layout={"fill"} />
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
          <br />
          <Text><span style={{color: "#6B6E70"}}>Tech Stack: </span>{tech}</Text>
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
              _hover={{ bg: "brand.500" }}
            >
              Visit Website
            </Button>
          </Link>
          <Link href={github} _hover={{ textDecoration: "none" }} isExternal>
            <Button variant="solid" bg="brand.500" _hover={{ bg: "brand.400" }}>
              Source Code
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
