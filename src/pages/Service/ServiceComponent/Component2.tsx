import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Component2 = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex
      flexDir={"column"}
      pos={{ md: "fixed" }}
      top={isAtTop ? 24 : 18}
      transition={"all 0.3s"}
      px={10}
      right={0}
      left={"50%"}
      bottom={0}
      gap={4}
      py={10}
    >
      <Text
        fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "32px" }}
        fontWeight={"bold"}
      >
        Our Services
      </Text>
      <Text
        w={{ md: "350px", lg: "481px" }}
        fontSize={{ base: "18px", sm: "20px", md: "22x", lg: "24px" }}
        fontWeight={450}
      >
        Engage with Code Tara, one of the leading Developers in Nepal!
      </Text>
      <Text fontSize={{ base: "16px", md: "18px" }} fontWeight={400}>
        Your destination for innovative tech solutions. We specialize in custom
        software development, web and mobile app creation, and cutting-edge
        digital marketing strategies. Let us help you elevate your business with
        our expertise and passion for technology.
      </Text>
    </Flex>
  );
};

export default Component2;
