import { UpRightArrow } from "@/assets/ArrowIcon";
import { portfolioData } from "@/staticData/portfolioData";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [clicked, setClicked] = useState<number | null>(1);

  const handleClick = (id: number) => {
    setClicked(clicked === id ? 1 : id);
  };
  const [isLargerThan1230] = useMediaQuery("(min-width: 1230px)");

  return (
    <Box py={20}>
      <Box px={{ base: 5, md: 20 }} py={10}>
        <Text fontSize={"32px"} fontWeight={600}>
          Portfolio
        </Text>
        <Text fontSize={"16px"} fontWeight={400} color={"#6B7280"} mt={2}>
          Explore our diverse portfolio of projects that showcase our expertise
        </Text>
        <Button
          as={Link}
          to={"/portfolio"}
          colorScheme={"primary"}
          mt={5}
          borderRadius={0}
          reloadDocument
          rightIcon={<UpRightArrow stroke="white" />}
          size={{ base: "sm", md: "sm" }}
        >
          View Our Works
        </Button>
      </Box>
      <Box pos={"relative"} h={{ base: 450, md: 600 }}>
        {portfolioData?.map(
          ({
            id,
            title,
            image,
            bgColor,
            slug,
            description,

            textColor,
          }) => (
            <Card
              cursor={"pointer"}
              key={id}
              p={4}
              h={{
                base:
                  slug === "yogtirtha"
                    ? "300px"
                    : slug === "lincoln"
                    ? "350px"
                    : "400px",
                md:
                  slug === "yogtirtha"
                    ? "500px"
                    : slug === "lincoln"
                    ? "551px"
                    : "600px",
              }}
              zIndex={slug === "yogtirtha" ? 1 : 0}
              w={
                isLargerThan1230
                  ? slug === "yogtirtha"
                    ? "500px"
                    : slug === "lincoln"
                    ? clicked === id
                      ? "1200px"
                      : "550px"
                    : slug === "eshha"
                    ? clicked === id
                      ? "1200px"
                      : "600px"
                    : "500px"
                  : {
                      base:
                        slug === "yogtirtha"
                          ? id !== clicked
                            ? "20px"
                            : "200px"
                          : slug === "lincoln"
                          ? id < clicked!
                            ? "60px"
                            : "250px"
                          : id < clicked!
                          ? "40px"
                          : "300px",
                      sm:
                        slug === "yogtirtha"
                          ? id < clicked!
                            ? "30px"
                            : "300px"
                          : slug === "lincoln"
                          ? id < clicked!
                            ? "50px"
                            : "350px"
                          : "400px",
                    }
              }
              onClick={() => handleClick(id)}
              bg={bgColor}
              transition={"all 0.5s"}
              shadow={"none"}
              borderRadius={0}
              borderTopRightRadius={"150px"}
              pos={"absolute"}
              top={
                slug === "yogtirtha" ? "100px" : slug === "lincoln" ? "49px" : 0
              }
            >
              <CardBody
                as={motion.div}
                initial={{
                  opacity: isLargerThan1230
                    ? slug === "yogtirtha"
                      ? 1
                      : 0
                    : 0,
                }}
                animate={{
                  opacity: isLargerThan1230
                    ? slug === "yogtirtha"
                      ? 1
                      : clicked === id
                      ? 1
                      : 0
                    : clicked === id
                    ? 1
                    : 0,
                  transition: { delay: 0.4 },
                  x: ["0px", "1px", "0px"],
                }}
                pl={
                  isLargerThan1230
                    ? slug === "lincoln"
                      ? clicked === id
                        ? "400px"
                        : 0
                      : slug === "eshha"
                      ? clicked === id
                        ? "450px"
                        : 0
                      : 0
                    : {
                        base:
                          slug === "lincoln"
                            ? clicked === id
                              ? "40px"
                              : 0
                            : slug === "eshha"
                            ? clicked === id
                              ? "50px"
                              : 0
                            : 0,
                      }
                }
                justifyItems={
                  slug === "yogtirtha"
                    ? "center"
                    : clicked === id
                    ? "end"
                    : "center"
                }
                alignSelf={
                  slug === "yogtirtha"
                    ? "center"
                    : clicked === id
                    ? "end"
                    : "center"
                }
                w={{ base: "100%", md: "90%" }}
                overflow={"hidden"}
                gap={5}
              >
                <Text
                  mb={2}
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
                  display={{ base: "none", md: "block" }}
                  textColor={textColor}
                  letterSpacing={"0.32px"}
                  fontSize={"16px"}
                  fontWeight={400}
                >
                  {description}
                </Text>
                <Button
                  as={Link}
                  variant={"transparent"}
                  rightIcon={<UpRightArrow stroke="#F05B2D" />}
                  to={`/portfolio`}
                  size={{ base: "xs", md: "sm" }}
                >
                  View More
                </Button>
                <Flex pos={"relative"} justify={"center"}>
                  <Box
                    pos={"absolute"}
                    //   transform={hoveredCard === id ? "translateX(-150%)" : ""}
                    top={"20px"}
                    transition={"transform 0.5s"}
                  >
                    <Image
                      w={slug !== "yogtirtha" ? 600 : 300}
                      src={image}
                      alt={title}
                    />
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          )
        )}
      </Box>
    </Box>
  );
};

export default PortfolioSection;
