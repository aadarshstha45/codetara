import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { ServiceComponent1 } from "../components/ServiceComponent/ServiceComponent1";
import { ServiceComponent2 } from "../components/ServiceComponent/ServiceComponent2";

export const Services = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} pos={"relative"}>
      <GridItem colSpan={1} order={{ base: 2, md: 1 }} mb={10}>
        <ServiceComponent1 />
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
        <ServiceComponent2 />
      </GridItem>
    </SimpleGrid>
  );
};
