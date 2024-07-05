import { Flex, Link, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { companyData } from "../FooterData/companyData";

export const Company = () => {
  const [isLessThan300] = useMediaQuery("(max-width: 300px)");

  return (
    <Flex flexDir={"column"} gap={"10px"}>
      <Text fontWeight={450} fontSize={"20px"}>
        Company
      </Text>
      <Stack gap={"12px"} w={"fit-content"}>
        {companyData?.map(({ id, title, href }) => (
          <Text
            key={id}
            _hover={{
              color: "primary.500",
              fontWeight: "medium",
              textDecor: "none",
            }}
            as={Link}
            href={href}
            fontSize={isLessThan300 ? "14px" : "16px"}
          >
            {title}
          </Text>
        ))}
      </Stack>
    </Flex>
  );
};
