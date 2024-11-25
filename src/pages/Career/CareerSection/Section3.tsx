import { RightArrow } from "@/assets/ArrowIcon";
import { PositionIcon } from "@/assets/CareerIcon";
import { positionData } from "@/staticData";
import useScrollTop from "@/utils/scrollToTop";
import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <Box id="positions" py={5}>
      <Container maxW={{ base: "95vw", md: "95vw", lg: "85vw" }}>
        <Flex align={"center"}>
          <Box w={{ base: "full", md: "90%", lg: "80%" }}>
            <Text
              fontSize={{ base: "30px", sm: "34px", md: "38px", lg: "42px" }}
              fontWeight={500}
              textColor={"secondary"}
              textTransform={"capitalize"}
            >
              Open Positions
            </Text>
            <Text
              fontSize={{
                base: "18px",
                sm: "20px",
                md: "22px",
                lg: "24px",
              }}
              fontWeight={450}
              textColor={"secondary"}
              textTransform={"capitalize"}
            >
              Get to know us and join our team. We'd love to have more talented
              people on board. Check out our open positions!
            </Text>
            <Flex mt={"40px"} gap={"20px"} flexDir={"column"}>
              {positionData.map(({ id, title }) => (
                <Flex
                  p={4}
                  bg={"#F1F3F5"}
                  justify={"space-between"}
                  align={"center"}
                  key={id}
                >
                  <Text
                    fontSize={{
                      base: "18px",
                      sm: "20px",
                      md: "22px",
                      lg: "24px",
                    }}
                    fontWeight={450}
                    textColor={"secondary"}
                  >
                    {title}
                  </Text>
                  <IconButton
                    as={Link}
                    to={`/careers/${id}`}
                    onClick={useScrollTop}
                    aria-label="View Open Positions"
                    size={{ base: "sm", md: "md" }}
                    bgColor={"#ffffff"}
                    colorScheme={"primary"}
                    borderRadius={"full"}
                    icon={<RightArrow stroke="#000000" />}
                  />
                </Flex>
              ))}
            </Flex>
          </Box>
          <Flex
            display={{ base: "none", md: "flex" }}
            w={{ md: "60%", lg: "80%" }}
            justify={"center"}
            as={motion.div}
            animate={{
              y: ["20px", "0px", "20px"],
              transition: {
                delay: 0.1,
                ease: "easeOut",
                duration: 3,
                repeat: Infinity,
              },
            }}
          >
            <PositionIcon />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Section3;
