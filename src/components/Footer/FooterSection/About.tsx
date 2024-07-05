import { FacebookIcon, GoogleIcon, InstagramIcon } from "@/assets/SocialIcon";
import { DefaultLogo } from "@/assets/logo";
import { Box, Flex, HStack, Text, useMediaQuery } from "@chakra-ui/react";

export const About = () => {
  const [isLessThan300] = useMediaQuery("(max-width: 300px)");

  return (
    <Flex flexDir={"column"} gap={"16px"}>
      <Text
        display={{ base: "flex", md: "none" }}
        fontWeight={450}
        fontSize={"20px"}
      >
        Contact
      </Text>
      <Box display={{ base: "none", md: "block" }}>
        <DefaultLogo />
      </Box>
      <Box fontSize={isLessThan300 ? "14px" : "16px"}>
        <Text>Siddhicharan Marg, Banasthali, Kathmandu</Text>
        <Text>info@wavesolution.com</Text>
        <Text>01-5920434</Text>
      </Box>
      <HStack gap={"14px"}>
        <FacebookIcon fill="black" />
        <GoogleIcon fill="black" />
        <InstagramIcon fill="black" />
      </HStack>
    </Flex>
  );
};
