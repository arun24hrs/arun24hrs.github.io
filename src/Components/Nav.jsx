import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  MenuDivider,
  useDisclosure,
  Link,
  Menu,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon
} from "@chakra-ui/icons";
import logo from "../Images/pfolio_logo.png";
import { useState } from "react";

export default function Nav() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { sticky, setSticky } = useState(false);

  // if(window.scrollY>100){
  //   setSticky(true);
  // }
  // else{
  //   setSticky(false);
  // }

//   const handleDownload = () => {
    
//     fetch('resume.pdf').then(response => {
//         response.blob().then(blob => {
//             const fileURL = window.URL.createObjectURL(blob);
//             let alink = document.createElement('a');
//             alink.href = fileURL;
//             alink.download = 'Arun_Rana_Resume.pdf';
//             alink.click();
//         })
//     })
// }

  return (
    <Flex
      id="nav-menu"
      borderBottom={"1px solid gray"}
      maxH="65px"
      minH={"65px"}
      padding={{ base: "5px 14px", lg: "10px 30px" }}
      justifyContent="space-between"
      alignItems={"center"}
      position={"fixed"}
      top={0}
      width="100%"
      zIndex={10000}
    >
      {/* <Button bgColor={"brand.300"} size={"sm"} onClick={handle} _hover={{border:"1px solid white"}} display={{ base: "block", lg: "none" }}>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</Button> */}

      <Menu >
        <MenuButton as={Button} display={{base: "block", lg: "none"}} onClick={onToggle} variant={"ghost"} _hover={{bgColor:"brand.300", border:"1px solid"}} _active={{bgColor:"none", border:"2px solid #86C232"}}> <HamburgerIcon/></MenuButton>
        <MenuList bgColor="brand.300">
          <a href="#" width="100%">Home</a>
          <MenuDivider />
          <a href="#about">About</a>
          <MenuDivider />
          <a href="#projects">Projects</a>
          <MenuDivider />
          <a href="#skills">Skills</a>
        </MenuList>
      </Menu>
      

      <Image src={logo} w={{ base: "0", sm: "250px", lg: "300px" }} />

      <Flex gap={"35px"} p="5px" display={{ base: "none", lg: "flex" }}>
        <Link
          color={"#86C232"}
          fontSize="lg"
          _hover={{
            color: "white",
            borderBottom: "4px solid #86C232",
            transition: "0.5s",
          }}
          href="#"
          className="nav-link home"
        >
          Home
        </Link>
        <Link
          color={"#86C232"}
          fontSize="lg"
          _hover={{
            color: "white",
            borderBottom: "4px solid #86C232",
            transition: "0.5s",
          }}
          href="#about"
          className="nav-link about"
        >
          About
        </Link>
        <Link
          color={"#86C232"}
          fontSize="lg"
          _hover={{
            color: "white",
            borderBottom: "4px solid #86C232",
            transition: "0.5s",
          }}
          href="#projects"
          className="nav-link projects"
        >
          Projects
        </Link>
        <Link
          color={"#86C232"}
          fontSize="lg"
          _hover={{
            color: "white",
            borderBottom: "4px solid #86C232",
            transition: "0.5s",
          }}
          href="#skills"
          className="nav-link skills"
        >
          Skills
        </Link>

        <Link
          color={"#86C232"}
          fontSize="lg"
          _hover={{
            color: "white",
            borderBottom: "4px solid #86C232",
            transition: "0.5s",
          }}
          href="#github-stats"
        >
          GitHub Stats
        </Link>
      </Flex>

      <Flex gap={{ base: "8px", lg: "15px" }}>
        <a href="#contact">
          <Button
          color="brand.500"
          fontWeight="normal"
            className="nav-link contact"
            borderRadius={50}
            border="1px solid #86C232"
            bg={"none"}
            _hover={{ backgroundColor: "brand.500", color: "#1A202C" }}
            size={{ base: "xs", sm: "sm", lg: "md" }}
          >
            Contact
          </Button>
        </a>
        <Button
        id="resume-button-1"
              onClick={()=>{window.open('https://1drv.ms/b/c/af845df2745d14af/EYlh4TTt6nVPlBkuD9Pi0NIBgeVah7xlshspcPyfsq4YLw?e=j6G2lZ',"_blank")}}
              variant="solid"
              colorScheme={"brand"}
              rounded={"full"}
              size={{ base: "xs", sm: "sm", lg: "md" }}
              fontWeight={"normal"}
              px={6}
              _hover={{ bg: "brand.400" }}
            ><a id="resume-link-1" className= "nav-link resume"
            href="/Arun_Rana_Resume.pdf" download
          >
              Resume
            </a>
            </Button>
      </Flex>
    </Flex>
  );
}

//   <div className={style.logoContainer}>
//   <img className={style.logo} src={logo} alt="Logo" />
// </div>

// <div className={style.navMenu}>
//   <a className="nav-link home" href='#'>Home</a>
//   <a className="nav-link about" href='#'>About Me</a>
//   <a className="nav-link projects" href='#'>Projects</a>
//   <a className="nav-link skills" href='#'>Tech-Stack</a>
// </div>

// <div className={style.btnContainer}>
//   <button className={style.contactBtn}>Contact</button>
//   <button className={style.resumeBtn}>Resume</button>
// </div>
