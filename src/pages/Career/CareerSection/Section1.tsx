/* eslint-disable @typescript-eslint/no-explicit-any */
import { careerData } from "@/staticData/CareerData";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Section1 = () => {
  return (
    <Box bg={"#F1F1F1"} py={12}>
      <Text
        textAlign={"center"}
        fontSize={{ base: "32px", sm: "36px", md: "40px", lg: "44px" }}
        fontWeight={450}
        textColor={"secondary"}
        textTransform={"capitalize"}
      >
        Why Join Us?
      </Text>

      <Container maxW={{ base: "100%", md: "container.xl" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {careerData?.slice(0, 2).map((item: any) => (
            <GridItem key={item.id} colSpan={1}>
              <Card key={item.id} h={"100%"} bg={"transparent"} shadow={"none"}>
                <CardBody
                  display={"flex"}
                  justifyItems={{ base: "start", sm: "center" }}
                  flexDir={"column"}
                  gap={"13px"}
                >
                  <Flex justify={{ base: "start", sm: "center" }}>
                    {item.icon}
                  </Flex>
                  <Text
                    fontSize={{
                      base: "20px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    }}
                    textAlign={{ base: "start", sm: "center" }}
                  >
                    {item.title}
                  </Text>
                  <Text textAlign={{ base: "start", sm: "center" }}>
                    {item.description}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW={{ base: "full", md: "container.2xl" }}>
        <SimpleGrid w={"full"} columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {careerData?.slice(2, 5).map((item: any) => (
            <GridItem key={item.id} colSpan={1}>
              <Card key={item.id} h={"100%"} bg={"transparent"} shadow={"none"}>
                <CardBody
                  display={"flex"}
                  justifyItems={"center"}
                  flexDir={"column"}
                  gap={"13px"}
                >
                  <Flex justify={{ base: "start", sm: "center" }}>
                    {item.icon}
                  </Flex>
                  <Text
                    fontSize={{
                      base: "20px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    }}
                    textAlign={{ base: "start", sm: "center" }}
                  >
                    {item.title}
                  </Text>
                  <Text textAlign={{ base: "start", sm: "center" }}>
                    {item.description}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Section1;
