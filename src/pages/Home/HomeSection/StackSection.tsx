import Languages from "@/assets/images/Language.png";
import useScrollTop from "@/utils/scrollToTop";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const StackSection = () => {
  return (
    <Container maxW={{ base: "95vw", sm: "85vw" }} py={10}>
      <Flex flexDirection={"column"}>
        <Flex gap={10} py={20} align={"center"} flexWrap={"wrap"}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <GridItem colSpan={1}>
              <Flex flexDir={"column"} gap={"5px"}>
                <Text
                  textColor={"#253470"}
                  fontSize={{
                    base: "34px",
                    sm: "38px",
                    md: "42px",
                    lg: "48px",
                  }}
                  fontWeight={400}
                >
                  Take Reality to new level
                </Text>
                <Text
                  textColor={"#444"}
                  fontSize={{
                    base: "22px",
                    sm: "24px",
                    md: "26px",
                    lg: "28px",
                  }}
                  fontWeight={400}
                >
                  Let's elevate your digital experience together
                </Text>
                <Box>
                  <Text
                    textColor={"#515151"}
                    fontSize={{
                      base: "14px",
                      sm: "16px",

                      lg: "18px",
                    }}
                    fontWeight={400}
                  >
                    Here, we build tailored software solutions to propel your
                    business forward. From concept to execution, we'll help you
                    soar above the competition with innovative technology stacks
                    designed to meet your unique needs.
                  </Text>
                  <Button
                    as={Link}
                    to={"/contact"}
                    onClick={useScrollTop}
                    p={"8px"}
                    mt={4}
                    borderRadius={"2px"}
                    colorScheme={"primary"}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Image src={Languages} alt="Languages" />
            </GridItem>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Container>
  );
};

export default StackSection;
