import { UpRightArrow } from "@/assets/ArrowIcon";
import { galleryData } from "@/staticData";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [isLessThan750] = useMediaQuery("(max-width: 750px)");
  const [isLessThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex flexDir={"column"}>
      <Box bgGradient={"linear-gradient(270deg, #E0C3E8 0%, #C1CAEF 100%)"}>
        <Container maxW={{ base: "95vw", md: "90vw" }} py={16}>
          <Flex
            justify={"center"}
            gap={isLessThan750 ? 5 : 20}
            align={"end"}
            flexWrap={isLessThan750 ? "wrap" : "nowrap"}
          >
            <Text
              w={"553px"}
              fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
              fontWeight={450}
              lineHeight={"normal"}
              textColor={"#253470"}
              textTransform={"capitalize"}
            >
              Get to see more about us Here
            </Text>
            <Text
              w={"481px"}
              fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={450}
              lineHeight={"normal"}
            >
              This section is comprised of various events & activities shown
              through the imagery.
            </Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW={"100vw"} py={16}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          p={5}
          spacing={isLessThan700 ? 10 : 5}
          justifyItems={"center"}
        >
          {galleryData?.map(({ id, title, slug, date, thumbnail, images }) => (
            <GridItem
              key={id}
              colSpan={galleryData.length < 2 ? 2 : 1}
              w={
                isLessThan700 ? "100%" : galleryData.length < 2 ? "40%" : "80%"
              }
              borderRadius={"10px"}
            >
              <Flex flexDir={"column"} gap={1}>
                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  spacing={2}
                  display={isLessThan700 ? "none" : "grid"}
                >
                  <GridItem colSpan={1}>
                    <Flex flexDir={"column"} gap={1}>
                      {images.slice(0, 2).map(({ id, image }) => (
                        <Box
                          borderRadius={"10px"}
                          key={id}
                          w={"full"}
                          h={"200px"}
                          bg={`url(${image})`}
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        />
                      ))}
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={1} w={"full"}>
                    <Box
                      w={"full"}
                      borderRadius={"10px"}
                      h={"405px"}
                      bg={`url(${images[2].image})`}
                      backgroundSize="cover"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                    />
                  </GridItem>
                </SimpleGrid>
                <Box
                  borderRadius={"10px"}
                  overflow={"hidden"}
                  key={id}
                  w={"full"}
                  h={"300px"}
                  bg={`url(${thumbnail})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  pos={"relative"}
                >
                  <Button
                    as={Link}
                    to={`/gallery/${slug}`}
                    reloadDocument
                    pos={"absolute"}
                    borderRadius={"17px 0px 0px 0px;"}
                    bottom={0}
                    right={0}
                    colorScheme={"gray"}
                    color={"#F05B2D"}
                    rightIcon={<UpRightArrow stroke="#F05B2D" />}
                    size={"sm"}
                  >
                    View More
                  </Button>
                </Box>
                <Stack gap={1} mt={4}>
                  <Text
                    fontSize={{
                      base: "18px",
                      sm: "20px",
                      md: "24px",
                      lg: "28px",
                    }}
                    fontWeight={500}
                    lineHeight={"normal"}
                    textColor={"primary.500"}
                  >
                    {title}
                  </Text>
                  <Text
                    textColor={"secondary.400"}
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight={500}
                  >
                    {date}
                  </Text>
                </Stack>
              </Flex>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Gallery;
