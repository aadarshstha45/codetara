import { RightArrow } from "@/assets/ArrowIcon";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { Section1, Section2, Section3 } from "./CareerSection";

const Careers = () => {
  return (
    <Flex flexDir={"column"}>
      <Flex
        bg={"rgba(249, 189, 171, 0.60);"}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        py={5}
      >
        <Container maxW={{ base: "95vw", md: "90vw" }} py={5} centerContent>
          <Text
            textAlign={"center"}
            fontSize={{ base: "32px", sm: "36px", md: "40px", lg: "44px" }}
            fontWeight={450}
            textColor={"secondary"}
            textTransform={"capitalize"}
          >
            Unlock Your Potential with Info Wave Solution
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "36px" }}
          >
            Build Your Future in Tech with US!
          </Text>
          <Text
            textAlign={"left"}
            fontSize={{ base: "16px", sm: "28px", md: "20px", lg: "22px" }}
            w={{ md: "50%" }}
          >
            Unlock boundless opportunities for growth and success with Code
            Tara's dynamic career offerings. Explore diverse roles and a
            supportive environment tailored for your professional advancement.
            Join us and pave the way for a fulfilling career in the realm of
            technology.
          </Text>
          <Button
            as={Link}
            to="positions"
            smooth
            duration={1000}
            mt={5}
            size={"sm"}
            p={"8px"}
            rightIcon={<RightArrow stroke="#ffffff" />}
            borderRadius={"1px"}
            colorScheme="primary"
            cursor={"pointer"}
          >
            View Open Positions
          </Button>
        </Container>
      </Flex>

      <Section1 />

      <Section2 />
      <Section3 />
    </Flex>
  );
};

export default Careers;
