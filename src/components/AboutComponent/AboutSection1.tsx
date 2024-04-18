import {
  Button,
  Container,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import AboutImage from "../../assets/aboutImages/About.png";

export const AboutSection1 = () => {
  const [noOfLines, setNoOfLines] = useState(6);
  const [isLessThan1165] = useMediaQuery("(max-width: 1165px)");
  return (
    <Container maxW={{ base: "95vw", sm: "85vw" }} py={5}>
      <Flex
        justify={isLessThan1165 ? "center" : "space-between"}
        align={"center"}
        gap={isLessThan1165 ? "20px" : "50px"}
        flexWrap={isLessThan1165 ? "wrap" : "nowrap"}
      >
        <Image
          src={AboutImage}
          alt={"About"}
          w={{ base: "250px", sm: "400px", md: "560px" }}
          h={{ base: "250px", sm: "350px", md: "595px" }}
        />
        <Flex flexDir={"column"} gap={4}>
          <Text
            fontWeight={"semibold"}
            fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
            textTransform={"capitalize"}
          >
            <Text textColor={"secondary"}>illmuinate your</Text>{" "}
            <Text textColor={"primary"}>Digital Path</Text>
          </Text>
          <Flex flexDir={"column"}>
            <Text
              fontSize={{ base: "29px", sm: "32px", md: "35px", lg: "38px" }}
              textColor={"secondary"}
            >
              About Us
            </Text>
            <Text
              noOfLines={isLessThan1165 ? noOfLines : 200}
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
              letterSpacing={"0.48px"}
              lineHeight={"30px"}
            >
              With a customer-centric approach, they prioritize success,
              ensuring maximum value and impact for each project. Their team's
              diverse expertise spans software development, digital marketing,
              and cybersecurity. Code Tara upholds the highest standards of
              quality, earning a strong reputation for excellence. Agile and
              adaptive, they evolve offerings to meet ever-changing digital
              demands. Overall, Code Tara shines for its innovation, customer
              focus, expertise, commitment to excellence, adaptability, and
              stellar reputation.
            </Text>
            {isLessThan1165 && (
              <Button
                fontWeight={"normal"}
                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
                size={"sm"}
                mt={2}
                p={0}
                bg={"transparent"}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "transparent" }}
                w={"fit-content"}
                onClick={() => setNoOfLines((prev) => (prev === 6 ? 200 : 6))}
              >
                {noOfLines === 6 ? "Read More" : "Read Less"}
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
