import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PositionIcon } from "../../assets/careerImages";
import { RightArrow } from "../../assets/icons";
import { PositionData } from "../../data/CareerData";

export const CareerSection3 = () => {
  const navigate = useNavigate();
  return (
    <Box id="positions" py={5}>
      <Container maxW={{ base: "95vw", md: "95vw", lg: "85vw" }}>
        <Flex align={"center"}>
          <Box w={{ base: "full", md: "90%", lg: "80%" }}>
            <Text
              fontSize={{ base: "36px", sm: "40px", md: "44px", lg: "48px" }}
              fontWeight={450}
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
              {PositionData.map(({ id, title }) => (
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
                    aria-label="View Open Positions"
                    size={{ base: "sm", md: "md" }}
                    bgColor={"#ffffff"}
                    colorScheme={"white"}
                    borderRadius={"full"}
                    onClick={() => {
                      navigate("/careers/details");
                    }}
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
