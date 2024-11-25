import { IDDTLData } from "@/staticData/AboutData";
import { Container, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Section4 = () => {
  const [isLessThan300] = useMediaQuery("(max-width: 300px)");
  const [isLessThan700] = useMediaQuery("(max-width: 700px)");
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) =>
        prevIndex === IDDTLData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxW={{ base: "95vw", sm: "85vw" }}>
      <Flex flexDir={"column"} gap={{ base: "10px", md: "20px" }}>
        <Flex
          justifySelf={isLessThan300 ? "start" : "center"}
          justify={"center"}
          w={"full"}
        >
          <Flex w={"50%"} justify={"end"}>
            <Text
              textColor={"secondary"}
              fontSize={
                isLessThan300
                  ? "20px"
                  : { base: "30px", sm: "35px", md: "40px", lg: "50px" }
              }
            >
              How do we
            </Text>
          </Flex>
          <Flex w={"50%"} justify={"start"} alignItems={"flex-start"}>
            <Text
              ml={2}
              fontSize={
                isLessThan300
                  ? "20px"
                  : { base: "30px", sm: "35px", md: "40px", lg: "50px" }
              }
              display={"inline-block"}
              key={IDDTLData[visibleIndex].id}
              as={motion.div}
              variants={{
                initial: { opacity: 0 },
                Variant5: { opacity: 1 },
              }}
              initial="initial"
              animate="Variant5"
              transition={{
                delay: "2s",
                duration: "2s",
                ease: "easeInOut",
              }}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                animation: "typing 3.5s steps(40, end)",
              }}
              textColor="primary.500"
            >
              {IDDTLData[visibleIndex].heading}?
            </Text>
          </Flex>
        </Flex>
        {IDDTLData.map(({ id, heading, body, image }) => (
          <Flex
            align={"center"}
            flexWrap={isLessThan700 ? "wrap" : "nowrap"}
            key={id}
            gap={isLessThan700 ? "5px" : "100px"}
          >
            <Flex justify={"start"} boxSize={40}>
              {image}
            </Flex>

            <Flex
              flexDir={"column"}
              justify={"start"}
              gap={2}
              mb={{ base: 8, sm: 1 }}
            >
              <Text
                fontWeight={450}
                fontSize={{ base: "22px", sm: "26px", md: "30px", lg: "34px" }}
                textColor={"secondary"}
              >
                {heading}
              </Text>
              <Text
                fontWeight={450}
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              >
                {body}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default Section4;
