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
import { CareerData } from "../../data/CareerData";

export const CareerSection1 = () => {
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
      <Container maxW={{ base: "95vw", md: "90vw" }} py={5}>
        <Container maxW={{ base: "100%", md: "container.xl" }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {CareerData?.slice(0, 2).map((item) => (
              <GridItem key={item.id} colSpan={1}>
                <Card
                  key={item.id}
                  h={"100%"}
                  bg={"transparent"}
                  shadow={"none"}
                >
                  <CardBody
                    display={"flex"}
                    justifyItems={"center"}
                    flexDir={"column"}
                    gap={"13px"}
                  >
                    <Flex justify={"center"}>{item.icon}</Flex>
                    <Text
                      fontSize={{
                        base: "20px",
                        sm: "22px",
                        md: "26px",
                        lg: "28px",
                      }}
                      textAlign={"center"}
                    >
                      {item.title}
                    </Text>
                    <Text textAlign={"center"}>{item.description}</Text>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
        <Container maxW={{ base: "100%", md: "container.2xl" }}>
          <SimpleGrid
            p={4}
            w={"full"}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={5}
          >
            {CareerData?.slice(2, 5).map((item) => (
              <GridItem key={item.id} colSpan={1}>
                <Card
                  key={item.id}
                  h={"100%"}
                  bg={"transparent"}
                  shadow={"none"}
                >
                  <CardBody
                    display={"flex"}
                    justifyItems={"center"}
                    flexDir={"column"}
                    gap={"13px"}
                  >
                    <Flex justify={"center"}>{item.icon}</Flex>
                    <Text
                      fontSize={{
                        base: "20px",
                        sm: "22px",
                        md: "26px",
                        lg: "28px",
                      }}
                      textAlign={"center"}
                    >
                      {item.title}
                    </Text>
                    <Text textAlign={"center"}>{item.description}</Text>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Container>
    </Box>
  );
};
