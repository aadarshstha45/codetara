import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PortfolioData } from "../../assets/Portfolio";
import { UpRightArrow } from "../../assets/icons";

export const PortfolioSection = () => {
  const [clicked, setClicked] = useState<number | null>(1);

  const handleClick = (id: number) => {
    setClicked(clicked === id ? null : id);
  };

  return (
    <Box py={20}>
      <Box px={20} py={10}>
        <Text fontSize={"32px"} fontWeight={600}>
          Portfolio
        </Text>
        <Text fontSize={"16px"} fontWeight={400} color={"#6B7280"} mt={2}>
          Explore our diverse portfolio of projects that showcase our expertise
        </Text>
        <Button
          as={Link}
          to={"/portfolio"}
          variant={"primary"}
          mt={5}
          reloadDocument
          rightIcon={<UpRightArrow stroke="white" />}
        >
          View Our Works
        </Button>
      </Box>
      <Box pos={"relative"} h={600}>
        {PortfolioData.map(
          ({
            id,
            title,
            description,
            image,
            bgColor,
            slug,

            technology,
            textColor,
            headingTextColor,
          }) => (
            <Card
              cursor={"pointer"}
              key={id}
              p={4}
              h={
                slug === "yogtirtha"
                  ? "500px"
                  : slug === "lincoln"
                  ? "551px"
                  : "600px"
              }
              zIndex={slug === "yogtirtha" ? 1 : 0}
              w={
                slug === "yogtirtha"
                  ? "500px"
                  : slug === "lincoln"
                  ? clicked === id
                    ? "1200px"
                    : "550px"
                  : slug === "eshha"
                  ? clicked === id
                    ? "1200px"
                    : "600px"
                  : ""
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
                initial={{ opacity: slug === "yogtirtha" ? 1 : 0 }}
                animate={{
                  opacity: slug === "yogtirtha" ? 1 : clicked === id ? 1 : 0,
                  transition: { delay: 0.4 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0 },
                }}
                pl={
                  slug === "lincoln"
                    ? clicked === id
                      ? "400px"
                      : 0
                    : slug === "eshha"
                    ? clicked === id
                      ? "450px"
                      : 0
                    : 0
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
                  color={textColor}
                >
                  View More Projects
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

                  <SimpleGrid
                    pos={"absolute"}
                    //   transform={
                    //     hoveredCard === id
                    //       ? "translateX(0)"
                    //       : "translateX(150%)"
                    //   }
                    opacity={0}
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
          )
        )}
      </Box>
      <Box pos={"relative"} h={600}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            key={index}
            p={4}
            h={index === 0 ? "500px" : index === 1 ? "551px" : "600px"}
            w={
              index === 0
                ? "400px"
                : index === 1
                ? "450px"
                : index === 2
                ? "500px"
                : ""
            }
            bg={index === 0 ? "#E8E8E8" : index === 1 ? "#D9D9D9" : "#BFBFBF"}
            shadow={"none"}
            borderRadius={0}
            borderTopLeftRadius={"275px"}
            pos={"absolute"}
            top={index === 0 ? "100px" : index === 1 ? "49px" : 0}
            right={0}
            zIndex={index === 0 ? 2 : index === 1 ? 1 : 0}
          ></Card>
        ))}
      </Box>
    </Box>
  );
};
