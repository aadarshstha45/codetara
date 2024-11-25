import { applicationData } from "@/staticData/CareerData";
import {
  Box,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Section2 = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleHover = (id: number) => {
    setHovered(id === hovered ? null : id);
  };
  return (
    <Box py={5}>
      <Container maxW={{ base: "95vw", md: "90vw" }} py={5}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "32px", sm: "36px", md: "40px", lg: "44px" }}
          fontWeight={450}
          textColor={"secondary"}
          textTransform={"capitalize"}
        >
          Application Process
        </Text>
        <Flex
          gap={{ base: 8, md: 4 }}
          justify={"center"}
          py={5}
          flexWrap={"wrap"}
        >
          {applicationData?.map(({ id, title, description }) => (
            <Card
              flexBasis={{ base: "90%", sm: "60%", md: "40%", lg: "22%" }}
              key={id}
              transition={"all 0.3s"}
              borderRadius={"20px"}
              border={"1px solid #7884B6"}
              bg={hovered === id ? "#D2DDFF" : "#FAFAFA"}
              onMouseEnter={() => handleHover(id)}
              onMouseLeave={() => handleHover(id)}
            >
              <CardBody
                transition={"all 0.3s"}
                transform={hovered === id ? "translateY(-10px)" : ""}
              >
                <Box pos={"relative"}>
                  <Flex align={"center"} mb={4}>
                    <Text
                      textColor={"primary"}
                      fontSize={{ base: "32px", md: "40px" }}
                      fontWeight={"bold"}
                    >
                      {id}
                    </Text>
                    <Text
                      fontSize={{ base: "24px", md: "28px" }}
                      zIndex={10}
                      left={3}
                      pos={"absolute"}
                    >
                      {title}
                    </Text>
                  </Flex>
                  <Divider
                    borderColor={"#F05B2D"}
                    pos={"absolute"}
                    opacity={1}
                    borderWidth={"2px"}
                    bottom={0}
                    borderRadius={"2px"}
                    transition={"width 0.5s"}
                    width={hovered === id ? "150px" : "39px"}
                  />
                </Box>
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  {description}
                </Text>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Section2;
