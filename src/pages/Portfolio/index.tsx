import { portfolioData } from "@/staticData";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

const Portfolio = () => {
  const [isLessThan750] = useMediaQuery("(max-width: 750px)");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleToggleHover = (id: number) => {
    setHoveredCard(id === hoveredCard ? null : id);
  };

  return (
    <Flex flexDir={"column"}>
      <Box bgGradient={"linear-gradient(270deg, #E0C3E8 0%, #C1CAEF 100%)"}>
        <Container maxW={{ base: "95vw", md: "90vw" }} py={16}>
          <Flex
            justify={"center"}
            gap={isLessThan750 ? 5 : 20}
            align={"center"}
            flexWrap={isLessThan750 ? "wrap" : "nowrap"}
          >
            <Text
              w={"553px"}
              fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
              fontWeight={450}
              lineHeight={"normal"}
              textTransform={"capitalize"}
            >
              View our Finest works Here
            </Text>
            <Text
              w={"481px"}
              fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={450}
              lineHeight={"normal"}
            >
              Here, we build tailored software solutions to propel your business
              forward. From concept to execution, we'll help you soar above the
              competition with innovative technology stacks designed to meet
              your unique needs.
            </Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW={{ base: "95vw", md: "85vw" }} py={5}>
        <SimpleGrid
          justifyItems={"center"}
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          {portfolioData?.map(
            ({
              id,
              title,
              description,
              image,
              bgColor,
              hoveredBgColor,
              technology,
              textColor,
              slug,
              headingTextColor,
            }) => (
              <GridItem colSpan={1} key={id}>
                <Card
                  p={4}
                  h={{ base: "600px", md: "550px" }}
                  w={"auto"}
                  overflow={"hidden"}
                  bg={hoveredCard === id ? hoveredBgColor : bgColor}
                  transition={"background-color 1s"}
                  // onTouchStart={() => handleToggleHover(id)}
                  onTouchStartCapture={() => handleToggleHover(id)}
                  onMouseEnter={() => handleToggleHover(id)}
                  onMouseLeave={() => handleToggleHover(id)}
                  shadow={"none"}
                  borderRadius={0}
                >
                  <CardBody
                    justifyItems={"center"}
                    alignSelf={"center"}
                    w={{ base: "100%", md: "90%" }}
                    overflow={"hidden"}
                    gap={5}
                  >
                    <Text
                      textColor={textColor}
                      fontSize={{
                        base: "20px",
                        sm: "24px",
                        md: "28px",
                        lg: "32px",
                      }}
                      fontWeight={600}
                    >
                      {title}
                    </Text>
                    <Text
                      mt={4}
                      textColor={textColor}
                      letterSpacing={"0.32px"}
                      fontSize={"16px"}
                      fontWeight={400}
                    >
                      {description}
                    </Text>

                    <Flex
                      pos={"relative"}
                      justify={hoveredCard === id ? "start" : "center"}
                    >
                      <Box
                        pos={"absolute"}
                        transform={
                          hoveredCard === id ? "translateX(-170%)" : ""
                        }
                        top={"60px"}
                        // bottom={0}
                        transition={"transform 0.5s"}
                      >
                        <Image
                          w={slug === "lincoln" ? "600px" : 400}
                          src={image}
                          alt={title}
                        />
                      </Box>

                      <SimpleGrid
                        mt={10}
                        pos={"absolute"}
                        transform={
                          hoveredCard === id
                            ? "translateX(0)"
                            : "translateX(170%)"
                        }
                        transition={"transform 0.5s"}
                        justifySelf={"center"}
                        columns={2}
                        spacing={10}
                      >
                        {technology.map(({ id, name, value }) => (
                          <Flex flexDir={"column"} key={id}>
                            <Text
                              textColor={headingTextColor}
                              fontSize={{
                                base: "18px",
                                sm: "20px",
                                md: "24px",
                                lg: "28px",
                              }}
                              fontWeight={450}
                              lineHeight={"normal"}
                            >
                              {name}
                            </Text>
                            <Text
                              textColor={textColor}
                              fontSize={{ base: "14px", md: "16px" }}
                              fontWeight={400}
                              lineHeight={"normal"}
                            >
                              {value}
                            </Text>
                          </Flex>
                        ))}
                      </SimpleGrid>
                    </Flex>
                  </CardBody>
                </Card>
              </GridItem>
            )
          )}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Portfolio;
