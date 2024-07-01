import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { RightArrow } from "@/assets/ArrowIcon";
import StarImage from "@/assets/images/Star.png";
import { companyLogo } from "@/staticData/companyLogo";

const HeroSection = () => {
  return (
    <Container maxW={{ base: "95vw", sm: "85vw" }} py={20}>
      <Flex
        justify={"start"}
        flexDir={"column"}
        align={"center"}
        gap={"50px"}
        py={5}
      >
        {/* <Flex justify={"start"} align={"center"} h={"476px"} gap={"209px"}> */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={"105px"}>
          <GridItem colSpan={1}>
            <Flex
              flexDir={"column"}
              align={"start"}
              justify={"start"}
              gap={"32px"}
            >
              <Flex align={"center"} justify={"center"}>
                <Text
                  fontSize={{ base: "30px", md: "42px" }}
                  fontWeight={400}
                  color={"#444"}
                >
                  Empowering Your Business Through The Innovative Digital
                  Solutions
                </Text>
              </Flex>
              <Text
                fontSize={{ base: "18px", md: "24px" }}
                fontWeight={400}
                color={"#515151"}
              >
                Unlock the Potential of Your Business with Cutting-Edge IT
                Solutions for Rapid Growth of business development
              </Text>
              <Button
                as={Link}
                to={"/contact"}
                reloadDocument
                size={"sm"}
                p={"8px"}
                rightIcon={<RightArrow stroke="white" />}
                borderRadius={"1px"}
                colorScheme="primary"
              >
                Schedule Meeting
              </Button>
            </Flex>
          </GridItem>
          <GridItem
            justifySelf={"center"}
            display={{ base: "none", md: "flex" }}
            colSpan={1}
          >
            <Image
              src={StarImage}
              alt="Star"
              w={{ md: 350, lg: 400 }}
              h={{ md: 400, lg: 450 }}
            />
          </GridItem>
        </SimpleGrid>
        {/* </Flex> */}

        <Flex
          // border={"1px"}
          bgGradient={`linear-gradient(to-r,#f5f5f5 0%, #f5f5f5 50% #f5f5f5 100%)`}
          gap={10}
          w={{ md: "full" }}
          p={4}
          justify={"center"}
          h={"auto"}
          flexWrap={"wrap"}
        >
          {companyLogo.map(({ id, image }) => (
            <Box key={id}>{image}</Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default HeroSection;
