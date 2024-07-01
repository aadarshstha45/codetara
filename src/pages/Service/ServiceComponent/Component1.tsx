import { RightArrow } from "@/assets/ArrowIcon";
import { serviceData } from "@/staticData";
import { Box, Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";

const Component1 = () => {
  return (
    <Flex flexDir={"column"} gap={4}>
      {serviceData?.map(({ id, title, icon2, description }) => (
        <Card
          borderRadius={0}
          shadow={"none"}
          bg={"#DBF2F1"}
          key={id}
          overflow={"hidden"}
          p={4}
          pos={"relative"}
        >
          <CardBody
            display={"flex"}
            flexDir={"column"}
            pos={"relative"}
            gap={6}
          >
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "24px", lg: "28px" }}
              fontWeight={"bold"}
            >
              {title}
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight={"400"}>
              {description}
            </Text>
            <Button
              mb={10}
              w={"fit-content"}
              colorScheme={"primary"}
              borderRadius={"2px"}
              rightIcon={<RightArrow stroke={"#fff"} />}
            >
              Learn More
            </Button>
            <Box
              w={"200"}
              h={"200"}
              opacity={0.7}
              pos={"absolute"}
              right={-16}
              bottom={-20}
            >
              {icon2}
            </Box>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default Component1;
