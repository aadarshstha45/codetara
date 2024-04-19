import { Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { careerFooterData } from "../Footer";

export const CareerSection = () => {
  const [isLessThan300] = useMediaQuery("(max-width: 300px)");
  return (
    <Flex flexDir={"column"} gap={"10px"}>
      <Text fontWeight={450} color={"white"} fontSize={"20px"}>
        Work with us
      </Text>
      <Stack gap={"12px"}>
        {careerFooterData?.map(({ id, title }) => (
          <Text
            key={id}
            // _hover={{
            //   color: "blue.500",
            //   fontWeight: "medium",
            //   textDecor: "none",
            // }}
            // as={Link}
            // href={href}
            color={"white"}
            fontSize={isLessThan300 ? "14px" : "16px"}
          >
            {title}
          </Text>
        ))}
      </Stack>
    </Flex>
  );
};
