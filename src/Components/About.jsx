import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import bg from "../Images/portfolio_background.png";
import photo from "../Images/dp.jpg";

export default function About() {
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
    <Container id="about" className="about section" maxW={"7xl"} p={0}  >
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 20 }}
        bgImage={bg}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
        w={"98vw"}
        direction={{ base: "column", md: "row" }}
        
        >
        <Stack flex={1} p={10} spacing={{ base: 5, md: 10 }}>
            
        <Heading color={"brand.500"} borderBottom={"3px solid white"} width={"130px"} display="none">About</Heading>
          <Heading
            lineHeight={0}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
            color={"#FFF"}
              id="user-detail-name"
              size="sm"
            >
              Arun Kumar Rana
            </Text>
          </Heading>
          <Text fontSize={{ base: "xl", sm: "3xl" }} color={"brand.500"}>
            Full Stack Web Developer
          </Text>
          <Text
            color={"gray.400"}
            fontSize={{ base: "sm", sm: "xl" }}
            id="user-detail-intro"
          >
            An enthusiastic full stack web developer possessing skills of
            developing websites using JavaScript, React.js, Next.js, TypeScript, Redux, HTML and
            CSS for frontend development and Node.js, Express.js, MongoDB for backend development. Constantly learning and honing problem solving skills to be a
            more efficient resource. Looking for an opportunity to build career
            as full-stack developer and put efforts in achieving organizational
            goals.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <a href="#contact">
            <Button
          color="brand.500"
          fontWeight="normal"
            className="nav-link contact"
            borderRadius={50}
            border="1px solid #86C232"
            bg={"none"}
            _hover={{ backgroundColor: "brand.500", color: "#1A202C" }}
            size={"lg"}
          >
            Contact
          </Button>
            </a>
            
            <Button
            id="resume-button-1"
            onClick={()=>{window.open('https://1drv.ms/b/s!Aq8UXXTyXYSvnGW-zwoq9I1ylkCB?e=nW9j3N',"_blank")}}
              variant="solid"
              colorScheme={"brand"}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              // onClick={handleDownload}
              _hover={{ bg: "brand.400" }}
            ><a id="resume-button-2"
            href="/Arun_Rana_Resume.pdf"  download
          >
              Resume
            </a>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Image
            className="home-img"
            alt={"Hero Image"}
            borderRadius={"40%"}
            w={"260px"}
            h={"250px"}
            border={"5px solid #474B4F"}
            src={photo}
            mt={{ base: "-50px", sm: "20px" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
