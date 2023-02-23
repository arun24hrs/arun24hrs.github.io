import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import photo from "../Images/portfolio_dp.png";
import video from "../Images/bgVideo.mp4";

export default function About() {
  return (
    <Container id="about" className="about section" maxW={"7xl"} p={0}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 20 }}
        direction={{ base: "column", md: "row" }}
        >
        <Stack flex={1} p={10} spacing={{ base: 5, md: 10 }}>
            
        <Heading color={"brand.500"} borderBottom={"3px solid white"} width={"130px"}>About</Heading>
          <Heading
            lineHeight={0}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
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
            developing websites using JavaScript, React.js, TypeScript, HTML and
            CSS. Constantly learning and honing problem solving skills to be a
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
              variant={"outline"}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"brand"}
              _hover={{
                bg: "#86C232",
                color: "brand",
                border: "1px solid #86C232",
              }}
            >
              Contact
            </Button>
            </a>
            <a
          href="https://drive.google.com/file/d/18wXitz8_BBiXIaVl7kbHnaPaGxHstyXr/view?usp=sharing"
          target="_blank"
        >
            <Button
              id="resume-button-2"
              variant="solid"
              colorScheme={"brand"}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              // leftIcon={<DownloadIcon bg="#86C232"/>}
              _hover={{ bg: "brand.400" }}
            >
              Resume
            </Button>
            </a>
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
            w={"350px"}
            h={"auto"}
            src={photo}
            mt={{ base: "-50px", sm: "20px" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
