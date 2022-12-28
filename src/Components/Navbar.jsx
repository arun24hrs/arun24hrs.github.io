import {
  Box,
  Button,
  color,
  Flex,
  Image,
  Link,
  useDisclosure,
  Text,
  HStack,
} from "@chakra-ui/react";

import logo from "../Images/pfolio_logo.png";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <HStack justify={{base: "space-between", lg: "space-between"}}>
        <Flex>
        <HamburgerIcon w={{base:10, lg: "10px"}} h={{base:10, lg:"10px"}} color="#86C232" display={{base: "flex", lg: "flex"}}/>
      </Flex>
      <Flex >
        <Image src={logo} alt="logo" />
      </Flex>
      <Flex gap={6} display={{base: "none", lg: "flex"}}>
        <Link color="#86C232" fontWeight="medium" fontSize="lg">
          Home
        </Link>
        <Link color="#86C232" fontWeight="medium" fontSize="lg">
          About Me
        </Link>
        <Link color="#86C232" fontWeight="medium" fontSize="lg">
          Skills
        </Link>
        <Link color="#86C232" fontWeight="medium" fontSize="lg">
          Projects
        </Link>
      </Flex>
      <Flex>
        <Button
          color="#86C232"
          variant="outline"
          borderColor="#86C232"
          _hover={{
            background: "#86C232",
            color: "#222629",
          }}
        >
          Contact
        </Button>
        <Button
          bg="#86C232"
          _hover={{
            background: "#61892F",
            color: "white",
          }}
        >
          Resume
        </Button>
      </Flex>
    </HStack>

    // <HStack
    //   padding={3}
    //   maxHeight="70px"
    //   bg="#22262967"
    //   borderBottom="1px solid #fff"
    // >
    //   <Flex alignItems="center" jus="space-between" bg="#22262967">
    //     <Flex>
    //         <HamburgerIcon w={"60px"} h="30px" color="#86C232"/>
    //     </Flex>
    //     <Box bg="#22262967" display={{ base: "center", lg: "left" }}>
    //       <Image src={logo} alt="Arun Logo" w={250} bg="#22262967" />
    //     </Box>
    //     <Flex
    //       gap={{ base: null, lg: "40px" }}
    //       display={{ base: "none", lg: "flex" }}
    //     >
    //       <Link color="#86C232" fontWeight="medium" fontSize="lg">
    //         Home
    //       </Link>
    //       <Link color="#86C232" fontWeight="medium" fontSize="lg">
    //         About Me
    //       </Link>
    //       <Link color="#86C232" fontWeight="medium" fontSize="lg">
    //         Skills
    //       </Link>
    //       <Link color="#86C232" fontWeight="medium" fontSize="lg">
    //         Projects
    //       </Link>
    //     </Flex>
    //     <Flex gap={5} bg="#22262967">
    //       <Button
    //         color="#86C232"
    //         variant="outline"
    //         borderColor="#86C232"
    //         _hover={{
    //           background: "#86C232",
    //           color: "#222629",
    //         }}
    //       >
    //         Contact
    //       </Button>
    //       <Button
    //         bg="#86C232"
    //         _hover={{
    //           background: "#61892F",
    //           color: "white",
    //         }}
    //       >
    //         Resume
    //       </Button>
    //     </Flex>
    //   </Flex>
    // </HStack>
  );
};

export default Navbar;
