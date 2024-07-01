import { RightQuote } from "@/assets/QuoteIcon";
import { Box, Card, Container, Flex, Text } from "@chakra-ui/react";

const Section5 = () => {
  return (
    <Box
      w={"full"}
      bgGradient="radial-gradient(573.86% 141.42% at 0% 0%, #000 0%, #0F172A 50%, #334155 100%)"
      my={{ sm: 10, md: 20 }}
    >
      <Container maxW={{ base: "95vw", sm: "80vw" }}>
        <Flex justifyContent={"center"} py={{ base: 10, md: 20 }}>
          <Card shadow={"none"} bg={"none"} textColor={"white"}>
            <Flex
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
              flexDir={"column"}
              justify={"center"}
              align={"center"}
              textAlign={"center"}
              gap={{ base: "12px", md: "24px" }}
            >
              <RightQuote />
              <Text>
                Here at CodeTara, we don't just develop technology; we develop
                solutions that empower businesses to innovate and grow. Our
                commitment to excellence and passion for problem-solving drives
                us to set new benchmarks in the IT industry.
              </Text>
              <Text textColor={"#989A9C"}>
                Sushil Pathak, Managing Director
              </Text>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
};

export default Section5;
