import { approachData } from "@/staticData/approachData";
import {
  Card,
  CardBody,
  Container,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const ApproachSection = () => {
  return (
    <Container maxW={"100vw"} bg={"#F1F1F1"} py={{ base: 10, sm: 20 }}>
      <Text
        textAlign={"center"}
        fontSize={{ base: "24px", sm: "32px", md: "48px" }}
        fontWeight={400}
        textColor={"#000"}
      >
        Our Approach
      </Text>
      <Container maxW={{ base: "95vw", sm: "85vw" }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: 4, md: 12, lg: 16 }}
          mt={4}
        >
          {approachData?.map(({ id, title, description, icon }) => (
            <GridItem colSpan={1} key={id}>
              <Card h={"full"} shadow={"none"} bg={"transparent"}>
                <CardBody>
                  {icon}
                  <Text
                    fontSize={{ base: "20px", md: "24px" }}
                    fontWeight={400}
                    textColor={"#000"}
                    pb={2}
                  >
                    {title}
                  </Text>
                  <Text
                    noOfLines={2}
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={400}
                    textColor={"#000"}
                  >
                    {description}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default ApproachSection;
