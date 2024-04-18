import { Flex } from "@chakra-ui/react";
import { AboutSection1 } from "../components/AboutComponent/AboutSection1";
import { AboutSection2 } from "../components/AboutComponent/AboutSection2";
import { AboutSection3 } from "../components/AboutComponent/AboutSection3";
import { AboutSection4 } from "../components/AboutComponent/AboutSection4";
import { AboutSection5 } from "../components/AboutComponent/AboutSection5";
import { AboutSection6 } from "../components/AboutComponent/AboutSection6";

export const About = () => {
  return (
    <Flex flexDir={"column"}>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
    </Flex>
  );
};
