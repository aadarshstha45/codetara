import { Flex } from "@chakra-ui/react";

const Map = () => {
  return (
    <Flex
      h={{ base: "400px", md: "600px" }}
      w={"95vw"}
      align={"center"}
      justify={"center"}
      border={"2px solid #7884B6"}
      my={20}
      mx={"auto"}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.816571443598!2d85.29678299999999!3d27.7229492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0763bf23ef81bff%3A0x96ec34c32fde92fd!2sCode%20Tara!5e0!3m2!1sen!2snp!4v1707804780260!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </Flex>
  );
};

export default Map;
