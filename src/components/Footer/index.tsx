import { WhiteLogo } from "@/assets/logo";
import { Container, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { About, Career, Company, Service } from "./FooterSection";

function Footer() {
  return (
    <Container bg={"secondary.400"} maxW={"100vw"} py={5}>
      <Flex
        display={{ base: "flex", md: "none" }}
        justify={"center"}
        align={"center"}
        mb={4}
        py={5}
        bg={"secondary.400"}
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
          <About />
        </GridItem>
        <GridItem colSpan={1}>
          <Company />
        </GridItem>
        <GridItem colSpan={1}>
          <Service />
        </GridItem>
        <GridItem colSpan={1}>
          <Career />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}

export default Footer;
