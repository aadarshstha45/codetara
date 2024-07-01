import { LeftArrow } from "@/assets/ArrowIcon";
import Fancybox from "@/components/Fancybox";
import { galleryData } from "@/staticData";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { createBrowserHistory } from "history";
import { useState } from "react";
import { useParams } from "react-router-dom";

const GalleryDetail = () => {
  const { slug } = useParams();
  const data = galleryData.find((item) => item.slug === slug);
  const history = createBrowserHistory();
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <Flex flexDir={"column"}>
      <Box
        bg={`url(${data?.thumbnail})`}
        h={{ base: "300px", sm: "400px", md: "500px", lg: "600px" }}
        objectFit={"cover"}
        backgroundSize="cover"
        w={"100%"}
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
            w={{ base: "95%", sm: "80%", md: "50%" }}
            color={"white"}
            opacity={0.8}
            textAlign={"center"}
            fontSize={{ base: "14px", sm: "16px", md: "18", lg: "20px" }}
          >
            {data?.description}
          </Text>
        </Flex>
      </Box>

      <Fancybox
        options={{
          Carousel: {
            infinite: true,
          },
          dragToClose: true,
        }}
      >
        <Flex
          gap={10}
          justify={"center"}
          flexWrap={"wrap"}
          align={"flex-start"}
          transform={"translateY(-30px)"}
        >
          {data?.images.map(({ id, image }) => (
            <Box as="a" key={id} data-fancybox="gallery" href={image}>
              {!loadedImages[id] && (
                <Box bg={"secondary.50"} w={"full"} h={"full"} />
              )}
              <Image
                loading="lazy"
                w={{ base: "250px", sm: "300px", md: "350px", lg: "400px" }}
                h={{ base: "250px", md: "350px" }}
                src={image}
                onLoad={() => handleImageLoad(id)} // Call handleImageLoad with ID when the image is loaded
                opacity={loadedImages[id] ? 1 : 0}
                objectFit={"cover"}
                objectPosition={"center"}
                borderRadius={"10px"}
              />
            </Box>
          ))}
        </Flex>
      </Fancybox>
    </Flex>
  );
};

export default GalleryDetail;
