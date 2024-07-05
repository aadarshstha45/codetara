import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/swiper-bundle.css";

import { LeftQuote, RightQuote } from "@/assets/QuoteIcon";
import { DefaultLogo } from "@/assets/logo";
import { testimonialData } from "@/staticData";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSection = () => {
  return (
    <Container maxW={{ base: "95vw", sm: "85vw" }} py={20}>
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay, EffectFade]}
      >
        {testimonialData?.map(
          ({ id, bgColor, message, name, designation, image }) => (
            <SwiperSlide key={id} className="swiper-slide">
              <Card
                borderRadius={0}
                shadow={"none"}
                p={4}
                h={"400px"}
                bgColor={bgColor}
                pos={"relative"}
              >
                <CardHeader alignSelf={"center"}>
                  <Heading>
                    <DefaultLogo />
                    {/* <Logo /> */}
                    {/* <WhiteLogo /> */}
                  </Heading>
                </CardHeader>

                <CardBody
                  alignSelf={"center"}
                  maxW={{ base: "95%", md: "70%" }}
                >
                  <Text
                    noOfLines={{ base: 5, md: 100 }}
                    fontSize={{
                      base: "18px",
                      sm: "20px",
                      md: "22px",
                      lg: "24px",
                    }}
                    textAlign={"center"}
                    fontWeight={400}
                  >
                    {message}
                  </Text>
                </CardBody>

                <CardFooter alignSelf={"center"}>
                  <HStack
                    fontSize={"18px"}
                    align={"center"}
                    fontWeight={400}
                    gap={2}
                  >
                    <Avatar src={image} />
                    <Stack gap={0}>
                      <Text fontSize={"18px"} fontWeight={450}>
                        {name}
                      </Text>
                      <Text fontSize={"16px"} fontWeight={350}>
                        {designation}
                      </Text>
                    </Stack>
                  </HStack>
                </CardFooter>
                <Box pos={"absolute"} top={1} left={1}>
                  <LeftQuote />
                </Box>
                <Box pos={"absolute"} bottom={1} right={1}>
                  <RightQuote />
                </Box>
              </Card>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Container>
  );
};

export default TestimonialSection;
