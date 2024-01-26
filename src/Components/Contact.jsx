import React from "react";
import {
  Box,
  Image,
  Flex,
  Heading,
  HStack,
  Link,
  useColorModeValue,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
import logo from "../Images/pfolio_logo.png";
import github from "../Images/github-60.png";
import linkedin from "../Images/linkedin-60.png";
import phone from "../Images/phone-60.png";
import mail from "../Images/gmail-logo-60.png";

const Contact = () => {
  return (
    <Box>
      <Heading
        id="contact"
        fontFamily={"recursive"}
        textTransform="uppercase"
        color="#86C232"
        fontSize={{ base: "20px", sm: "30px" }}
        fontWeight="600"
        m={"40px"}
        letterSpacing="2px"
      >
        CONTACT ME
      </Heading>

      <HStack width={"100%"} justify="space-around" mt={"60px"} mb={"60px"}>
        <VStack alignItems={"center"}>
            {" "}
            <Link href="https://github.com/arun24hrs" isExternal= "true"><Image
            
              width={{ base: "30px", sm: "40px", md: "60px" }}
              src={github}
              alt="logo"
            />
            </Link>
          <Link href="https://github.com/arun24hrs" isExternal="true" id="contact-github">
            <Text display={{ base: "none", md: "block" }}>GitHub</Text>
          </Link>
        </VStack>
        <VStack alignItems={"center"}>
            <Link isExternal="true" href="https://www.linkedin.com/in/arun-kr-rana/"><Image
              width={{ base: "30px", sm: "40px", md: "60px" }}
              src={linkedin}
            /></Link>
          <Link href="https://www.linkedin.com/in/arun-kr-rana/" isExternal="true" id="contact-linkedin">
            <Text display={{ base: "none", md: "block" }}>LinkedIn</Text>
          </Link>
        </VStack>
        <VStack alignItems={"center"}>
            <Link href="tel:+91-9868494572">
            <Image
              width={{ base: "30px", sm: "40px", md: "60px" }}
              src={phone}
            /></Link>
          <Link id="contact-phone" href="tel:+91-9868494572">
            <Text display={{ base: "none", md: "block" }}>+91-9868494572</Text>
          </Link>
        </VStack>
        <VStack alignItems={"center"}>
            <Link href="mailto:2017arun.rana@gmail.com" isExternal="true">
            <Image
              width={{ base: "30px", sm: "40px", md: "60px" }}
              src={mail}
            /></Link>
          <Link id="contact-email" href="mailto:2017arun.rana@gmail.com">
            <Text display={{ base: "none", md: "block" }}>
              2017arun.rana@gmail.com
            </Text>
          </Link>
        </VStack>
      </HStack>

      <Box
        m={"auto"}
        width="60%"
        borderTop={{ base: "2px solid #444", md: "none" }}
        display={{ base: "block", md: "none" }}
      ></Box>

      <Flex
        display={{ base: "none", md: "flex" }}
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.600", "gray.600"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.600", "gray.600"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <img src={logo} alt="Logo" width={"300px"} />
      </Flex>
      <Text m={"20px"}>Made with ❤️ by Arun Kr. Rana</Text>
    </Box>
  );
};

export default Contact;
