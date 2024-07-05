import AboutImage from "@/assets/images/AboutImages/About.png";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

const Section1 = () => {
  const [noOfLines, setNoOfLines] = useState(6);
  const [isLessThan1165] = useMediaQuery("(max-width: 1165px)");
  return (
    <Container maxW={{ base: "95vw", sm: "85vw" }} py={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems={"center"}>
        <GridItem colSpan={1} justifySelf={{ base: "center", md: "start" }}>
          <Image
            src={AboutImage}
            alt={"About"}
            w={{ base: "250px", sm: "400px", md: "450px", lg: "500px" }}
            h={{ base: "250px", sm: "350px", md: "450px", lg: "550px" }}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Flex w={"100%"} justify={"center"} flexDir={"column"} gap={4}>
            <Box
              fontWeight={"semibold"}
              fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "50px" }}
              textTransform={"capitalize"}
            >
              <Text textColor={"secondary.500"}>Illuminate your</Text>{" "}
              <Text textColor={"primary.500"}>Digital Path</Text>
            </Box>
            <Flex flexDir={"column"}>
              <Text
                fontSize={{
                  base: "29px",
                  sm: "32px",
                  md: "34px",
                  lg: "36px",
                }}
                textColor={"secondary"}
              >
                About Us
              </Text>
              <Text
                noOfLines={isLessThan1165 ? noOfLines : 200}
                fontSize={{
                  base: "16px",
                  sm: "18px",
                  md: "20px",
                  lg: "22px",
                }}
                letterSpacing={"0.48px"}
                lineHeight={"30px"}
              >
                With a customer-centric approach, they prioritize success,
                ensuring maximum value and impact for each project. Their team's
                diverse expertise spans software development, digital marketing,
                and cybersecurity. Info Wave Solution upholds the highest
                standards of quality, earning a strong reputation for
                excellence. Agile and adaptive, they evolve offerings to meet
                ever-changing digital demands. Overall, Info Wave Solution
                shines for its innovation, customer focus, expertise, commitment
                to excellence, adaptability, and stellar reputation.
              </Text>
              {isLessThan1165 && (
                <Button
                  fontWeight={"normal"}
                  fontSize={{
                    base: "18px",
                    sm: "20px",
                    md: "22px",
                    lg: "24px",
                  }}
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
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default Section1;
