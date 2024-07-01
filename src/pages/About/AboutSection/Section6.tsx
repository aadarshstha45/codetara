import {
  Box,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Autoplay, Pagination } from "swiper/modules";

import { FacebookIcon, InstagramIcon } from "@/assets/SocialIcon";
import { teamInfo } from "@/staticData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Section6 = () => {
  return (
    <Container
      maxW={"container.xl"}
      alignItems={"center"}
      justifySelf={"center"}
      py={5}
    >
      <Text
        textAlign={"center"}
        fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
        fontWeight={450}
      >
        Meet Our Team
      </Text>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          895: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        spaceBetween={30}
        loop={true}
        speed={2000}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        className="swiper-container"
      >
        {teamInfo.map(
          ({ id, name, designation, image, facebookLink, instagramLink }) => (
            <SwiperSlide key={id} className="swiper-items swiper-activities">
              <Card role="group" variant={"outline"} align={"center"}>
                <CardBody>
                  <Box
                    bg={`linear-gradient(180deg, #253470 0%, #4763D6 100%)`}
                    borderRadius={"10px"}
                    border={"3px solid #EAEAEA"}
                    pos={"relative"}
                    overflow={"hidden"}
                  >
                    <Image src={image} />
                  </Box>
                  <Stack gap={1} mt={2}>
                    <Text
                      color={"#253470"}
                      fontSize={{
                        base: "18px",
                        sm: "20px",
                        md: "22px",
                        lg: "26px",
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
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Container>
  );
};

export default Section6;
