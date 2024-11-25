import ErrorImage from "@/assets/images/ErrorImage.png";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={6}
    >
      <Image src={ErrorImage} alt="Error" />
      <Text>Oops! The requested URL is not found </Text>

      <Button
        as={NavLink}
        colorScheme="primary"
        borderRadius={0}
        leftIcon={<ArrowBackIcon />}
        to={"/"}
        variant={"outline"}
      >
        Go Back
      </Button>
    </Flex>
  );
}

export default ErrorPage;
