import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Component1, Component2 } from "./ServiceComponent";

function Services() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} pos={"relative"}>
      <GridItem colSpan={1} order={{ base: 2, md: 1 }} mb={10}>
        <Component1 />
      </GridItem>
      <GridItem
        colSpan={1}
        pos={"relative"}
        order={{ base: 1, md: 2 }}
        bgGradient={{
          base: "linear-gradient(270deg, #E0C3E8 0%, #C1CAEF 100%)",
          md: "",
        }}
      >
        <Component2 />
      </GridItem>
    </SimpleGrid>
  );
}

export default Services;
