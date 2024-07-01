import { Flex, Spinner } from "@chakra-ui/react";

interface LoaderProps {
  color?: string;
  emptyColor?: string;
}

const Loader = ({ color, emptyColor }: LoaderProps) => {
  return (
    <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor={emptyColor ?? "gray.200"}
        color={color ?? "red.500"}
        size="xl"
      />
    </Flex>
  );
};

export default Loader;
