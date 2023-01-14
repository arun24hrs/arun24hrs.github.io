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
} from "@chakra-ui/react";
import {DownloadIcon} from "@chakra-ui/icons"
import photo from "../Images/portfolio_dp.png";

export default function Header() {
  return (
    <Container maxW={"7xl"} mt={10}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} p={10} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={0}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              size="sm"
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Arun Kumar Rana
            </Text>
          </Heading>
          <Text fontSize={"2xl"} color={"brand.500"}>
            Full Stack Web Developer
          </Text>
          <Text color={"gray.400"}>
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
            <Button
              variant="solid"
              colorScheme={"brand"}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<DownloadIcon bg="#86C232"/>}
              _hover={{bg: "brand.400"}}
            >
              Resume
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
              alt={"Hero Image"}
              w={"350px"}
              h={"auto"}
              src={photo}
            />
        </Flex>
      </Stack>
    </Container>
  );
}

