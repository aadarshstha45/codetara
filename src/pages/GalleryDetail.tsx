import { Box, Button, Flex, GridItem, Text } from "@chakra-ui/react";
import { createBrowserHistory } from "history";
import { useParams } from "react-router-dom";
import { GalleryData } from "../assets/Gallery";
import { LeftArrow } from "../assets/icons";

export const GalleryDetail = () => {
  const { slug } = useParams();
  const data = GalleryData.find((item) => item.slug === slug);
  const history = createBrowserHistory();

  return (
    <Flex flexDir={"column"}>
      <Box
        bg={`url(${data?.thumbnail})`}
        h={{ base: "300px", sm: "400px", md: "500px", lg: "600px" }}
        objectFit={"cover"}
        backgroundSize="cover"
        w={"100%"}
        //   pos={"relative"}
      >
        <Flex
          justify={"center"}
          align={"center"}
          h={"full"}
          pos={"relative"}
          flexDir={"column"}
          bg={"rgba(0,0,0,0.5)"}
        >
          <Button
            // size={{ base: "xs", sm: "sm", md: "md" }}

            left={5}
            top={5}
            fontSize={"sm"}
            w={"fit-content"}
            variant={"transparent"}
            leftIcon={<LeftArrow stroke="white" />}
            onClick={() => history.back()}
            color={"white"}
            pos={"absolute"}
          >
            Back to gallery
          </Button>
          <Text
            color={"white"}
            fontSize={{ base: "30px", sm: "36px", md: "42px", lg: "48px" }}
          >
            {data?.title}
          </Text>
          <Text
            color={"white"}
            opacity={0.8}
            fontSize={{ base: "30px", sm: "34px", md: "38px", lg: "42px" }}
          >
            {data?.date}
          </Text>
        </Flex>
      </Box>

      <Flex
        gap={10}
        justify={"center"}
        flexWrap={"wrap"}
        align={"flex-start"}
        transform={"translateY(-30px)"}
      >
        {data?.images.map(({ id, image }) => (
          <GridItem colSpan={1} key={id}>
            <Box
              borderRadius={"10px"}
              bg={`url(${image})`}
              w={{ base: "250px", sm: "300px", md: "350px", lg: "400px" }}
              h={{ base: "250px", md: "350px" }}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            />
          </GridItem>
        ))}
      </Flex>
    </Flex>
  );
};
