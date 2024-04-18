import { Box, Flex, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
} from "../../assets/icons/socialIcons";
import { WhiteLogo } from "../../assets/logo";

export const AboutSection = () => {
  const [isLessThan300] = useMediaQuery("(max-width: 300px)");

  return (
    <Flex flexDir={"column"} gap={"16px"}>
      <Text
        display={{ base: "flex", md: "none" }}
        fontWeight={450}
        color={"white"}
        fontSize={"20px"}
      >
        Contact
      </Text>
      <Box display={{ base: "none", md: "block" }}>
        <WhiteLogo />
      </Box>
      <Box textColor={"white"} fontSize={isLessThan300 ? "14px" : "16px"}>
        <Text>Siddhicharan Marg, Banasthali, Kathmandu</Text>
        <Text>info@codetara.com</Text>
        <Text>01-5920434</Text>
      </Box>
      <HStack gap={"14px"}>
        <FacebookIcon fill="" />
        <GoogleIcon fill="" />
        <InstagramIcon fill="" />
      </HStack>
    </Flex>
  );
};
