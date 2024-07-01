import Map from "@/utils/Map";
import useScrollTop from "@/utils/scrollToTop";
import { Flex } from "@chakra-ui/react";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "./AboutSection";

function About() {
  useScrollTop();
  return (
    <Flex flexDir={"column"}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      <Map />
    </Flex>
  );
}

export default About;
