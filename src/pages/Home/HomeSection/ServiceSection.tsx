import { RightArrow } from "@/assets/ArrowIcon";
import { serviceData } from "@/staticData/serviceData";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <Container maxW={"100vw"} bg={"#7884B6"} py={{ base: 10, sm: 20 }}>
      <Text
        textAlign={"center"}
        fontSize={{ base: "24px", sm: "32px", md: "48px" }}
        fontWeight={400}
        textColor={"#ffffff"}
      >
        Our Services
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ base: "16px", sm: "20px", md: "24px" }}
        fontWeight={400}
        textColor={"#ffffff"}
      >
        what do we do
      </Text>
      <Container maxW={"container.xl"}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: 4, md: 12, lg: 16 }}
          mt={4}
        >
          {serviceData?.map(({ id, title, description, icon }) => (
            <GridItem colSpan={1} key={id}>
              <Card borderRadius={"10px"} h={"full"} shadow={"none"}>
                <CardHeader>
                  <Flex justify={"space-between"} align={"center"}>
                    <Text
                      fontSize={{ base: "20px", md: "24px" }}
                      fontWeight={700}
                      textColor={"#253470"}
                    >
                      {title}
                    </Text>
                    {icon}
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text
                    noOfLines={2}
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={450}
                    textColor={"#000"}
                    letterSpacing={"0.5px"}
                  >
                    {description}
                  </Text>
                  <Flex
                    role={"group"}
                    _hover={{
                      textDecor: "none",
                    }}
                    as={Link}
                    to={"/services"}
                    reloadDocument
                    align={"center"}
                    gap={1}
                    pt={4}
                  >
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      fontWeight={450}
                    >
                      Read More
                    </Text>
                    <Box
                      _groupHover={{
                        transform: "translateX(5px)",
                        transition: "0.2s ease-in",
                        transformOrigin: "center",
                      }}
                    >
                      <RightArrow />
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default ServiceSection;
