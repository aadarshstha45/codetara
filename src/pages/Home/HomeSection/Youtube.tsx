import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Youtube = () => {
  return (
    <Container maxW={"100vw"} bg={"#7884B6"} py={20}>
      <Box textColor={"white"} textAlign={"center"} mb={6}>
        <Text
          fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "32px" }}
          fontWeight={600}
        >
          Unveiling Code Tara: Redefining Tomorrow's Software
        </Text>
        <Text fontSize={"16px"} fontWeight={400} mt={2}>
          Discover Innovation, Precision, and the Future of Technology.
        </Text>
      </Box>
      <Flex justify={"center"} align={"center"}>
        <Box
          border={"3px solid"}
          overflow={"hidden"}
          borderTopEndRadius={25}
          borderBottomStartRadius={25}
          borderColor={"primary.500"}
          w={800}
          h={{ base: 250, md: 460 }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EeeAt2NFpMU?si=m2_WffqSHIsSjv47"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
      </Flex>
    </Container>
  );
};

export default Youtube;
