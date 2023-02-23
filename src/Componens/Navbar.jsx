import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import logo from "../Images/pfolio_logo.png";

const Navbar = () => {
  return (
    <Flex
      id="nav-menu"
      
      border={"1px solid red"}
      borderBottom="1px solid white"
      px={"30px"}
      py="10px"
      maxHeight={"65px"}
      minH="65px"
      align={"center"}
      justifyContent="space-between"
    >
      <Image src={logo} w="300px" />
      <Flex gap={"35px"} p="5px">
        <Link color={"#86C232"} href="#">Home</Link>
        <Link color={"#86C232"} href="#">About Me</Link>
        <Link color={"#86C232"} href="#">Projects</Link>
        <Link color={"#86C232"} href="#">Tech-Stack</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
