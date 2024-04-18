import { Container, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { WhiteLogo } from "../assets/logo";
import { AboutSection } from "./FooterComponent/AboutSection";
import { CareerSection } from "./FooterComponent/CareerSection";
import { CompanySection } from "./FooterComponent/CompanySection";
import { ServiceSection } from "./FooterComponent/ServiceSection";

export const Footer = () => {
  return (
    <Container bg={"primary"} maxW={"100vw"} py={5}>
      <Flex
        display={{ base: "flex", md: "none" }}
        justify={"center"}
        align={"center"}
        mb={4}
      >
        <WhiteLogo />
      </Flex>
      <SimpleGrid
        columns={{ base: 2, sm: 2, lg: 4 }}
        spacing={{ base: 10, lg: "auto" }}
        py={4}
        px={{ base: 2, sm: 10, lg: 32 }}
      >
        <GridItem colSpan={1}>
          <AboutSection />
        </GridItem>
        <GridItem colSpan={1}>
          <CompanySection />
        </GridItem>
        <GridItem colSpan={1}>
          <ServiceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <CareerSection />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
