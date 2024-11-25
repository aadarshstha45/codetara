import Map from "@/utils/Map";

import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Section1, Section2 } from "./ContactSection";

const Contact = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <GridItem colSpan={1}>
          <Section1 />
        </GridItem>
        <GridItem colSpan={1}>
          <Section2 />
        </GridItem>
      </SimpleGrid>
      <Map />
    </>
  );
};

export default Contact;
