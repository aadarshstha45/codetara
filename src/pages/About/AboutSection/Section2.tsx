import { aboutUs } from "@/staticData/AboutData";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const Section2 = () => {
  const [isLessThan1150] = useMediaQuery("(max-width: 1150px)");
  return (
    <Box bgColor={"#F1F1F1"} w={"full"}>
      <Container
        maxW={{ base: "95vw", sm: "85vw" }}
        py={isLessThan1150 ? 10 : 20}
      >
        <Flex gap={"46px"} flexWrap={isLessThan1150 ? "wrap" : "nowrap"}>
          <Box>
            <Text
              fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
              textColor={"secondary"}
              textTransform={"capitalize"}
            >
              Where we stand
            </Text>
            <Text
              fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "24px" }}
              letterSpacing={"0.48px"}
            >
              We are built on integrity and excellence, ensuring the delivery of
              innovative solutions while upholding the highest standards of
              professionalism and trustworthiness.
            </Text>
          </Box>
          <Accordion w={"full"} allowToggle>
            {aboutUs.map(({ id, heading, body }, index) => (
              <AccordionItem
                key={id}
                borderTop={"0.5px solid #000"}
                borderBottom={
                  index === aboutUs.length - 1 ? "0.5px solid #000" : ""
                }
              >
                <AccordionButton p={"10px 0px"}>
                  <Box
                    as="span"
                    flex="1"
                    fontSize={{
                      base: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "30px",
                    }}
                    fontWeight={400}
                    textAlign="left"
                    textColor={"secondary"}
                  >
                    {heading}
                  </Box>
                  <AccordionIcon fontSize={32} />
                </AccordionButton>
                <AccordionPanel
                  px={0}
                  pb={4}
                  fontSize={{ base: "16px", md: "18px" }}
                  letterSpacing={"0.50px"}
                  // textAlign={"justify"}
                >
                  {body}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Container>
    </Box>
  );
};

export default Section2;
