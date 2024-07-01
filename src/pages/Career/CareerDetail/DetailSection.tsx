import { careerDetailData } from "@/staticData/CareerData";
import {
  Box,
  Container,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const DetailSection = () => {
  return (
    <Container maxW={{ base: "95vw", md: "85vw" }} py={20}>
      {careerDetailData?.map(({ id, responsibilities, requirements }) => (
        <Flex p={2} flexDir={"column"} key={id} gap={10}>
          <Box>
            <Text mb={4}>Responsibilities</Text>
            <UnorderedList spacing={4}>
              {responsibilities.map(({ id, description }) => (
                <ListItem key={id}>{description}</ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box>
            <Text mb={4}>Requirements</Text>
            <UnorderedList spacing={4}>
              {requirements.map(({ id, description }) => (
                <ListItem key={id}>{description}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Flex>
      ))}
    </Container>
  );
};
