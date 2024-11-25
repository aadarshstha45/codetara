import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { FacebookIcon, InstagramIcon } from "@/assets/SocialIcon";
import { teamInfo } from "@/staticData";
import { useState } from "react";

const OurTeam = () => {
  const [isLessThan750] = useMediaQuery("(max-width: 750px)");
  const [opacity, setOpacity] = useState(0);
  return (
    <Flex flexDir={"column"}>
      <Box bgGradient={"linear-gradient(270deg, #E0C3E8 0%, #C1CAEF 100%);"}>
        <Container maxW={{ base: "95vw", md: "90vw" }} py={16}>
          <Flex
            justify={"center"}
            gap={isLessThan750 ? 5 : 20}
            align={"center"}
            flexWrap={isLessThan750 ? "wrap" : "nowrap"}
          >
            <Text
              w={"553px"}
              fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
              fontWeight={450}
              lineHeight={"normal"}
              textTransform={"capitalize"}
            >
              Get to know our team here
            </Text>
            <Text
              w={"481px"}
              fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
              fontWeight={450}
              lineHeight={"normal"}
            >
              Our team is comprised of highly talented and experienced
              individuals
            </Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW={{ base: "95vw", md: "80vw" }} py={5}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
          {teamInfo.map(
            ({ id, name, designation, image, facebookLink, instagramLink }) => (
              <GridItem h={"full"} key={id} colSpan={1}>
                <Card
                  h={"full"}
                  role="group"
                  variant={"outline"}
                  align={"center"}
                >
                  <CardBody>
                    <Box
                      bg={`linear-gradient(180deg, #253470 0%, #4763D6 100%)`}
                      borderRadius={"10px"}
                      border={"3px solid #EAEAEA"}
                      pos={"relative"}
                      overflow={"hidden"}
                      w={"auto"}
                      h={{
                        base: "300px",
                        xl: "400px",
                      }}
                    >
                      <Image
                        w={"100%"}
                        h={"100%"}
                        loading="lazy"
                        opacity={opacity}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        onLoad={() => setOpacity(1)}
                        transition={"opacity 0.8s"}
                        src={image}
                      />
                    </Box>
                    <Stack textAlign={"center"} gap={1} mt={2}>
                      <Text
                        color={"#253470"}
                        fontSize={{
                          base: "18px",
                          sm: "20px",
                          md: "22px",
                          xl: "26px",
                        }}
                        fontWeight={450}
                      >
                        {name}
                      </Text>
                      <Text
                        fontSize={{
                          base: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                        }}
                        fontWeight={450}
                      >
                        {designation}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Stack
                    p={2}
                    borderRadius="14px 0px 0px 14px"
                    border="1px solid #DCD8D8;"
                    bg={"#F7F5F5"}
                    pos={"absolute"}
                    right={0}
                    gap={4}
                    top={"30%"}
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                  >
                    <Link href={facebookLink}>
                      <FacebookIcon fill="#324595" />
                    </Link>
                    <Link href={instagramLink}>
                      <InstagramIcon fill="#324595" />
                    </Link>
                  </Stack>
                </Card>
              </GridItem>
            )
          )}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default OurTeam;
