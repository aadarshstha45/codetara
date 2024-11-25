import { MVGData } from "@/staticData/AboutData";
import { Container, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const Section3 = () => {
  const [isLessThan975] = useMediaQuery("(max-width: 975px)");

  return (
    <Container maxW={{ base: "95vw", sm: "85vw" }} py={5}>
      {MVGData.map(({ id, heading, body, image }, index) => (
        <Flex
          key={id}
          align={"center"}
          gap={4}
          py={isLessThan975 ? 4 : 10}
          borderBottom={"1px solid #929292"}
          flexWrap={isLessThan975 ? "wrap" : "nowrap"}
        >
          <Flex
            justify={index % 2 == 0 ? "flex-start" : "flex-end"}
            order={isLessThan975 ? 1 : index % 2 == 0 ? 1 : 2}
            w={"full"}
          >
            {image}
          </Flex>
          <Flex
            flexDir={"column"}
            w={"full"}
            order={isLessThan975 ? 2 : index % 2 == 0 ? 2 : 1}
          >
            <Text
              fontSize={{ base: "24px", sm: "30px", md: "36px", lg: "44px" }}
            >
              {heading}
            </Text>
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
              textAlign={"left"}
            >
              {body}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Container>
  );
};

export default Section3;
