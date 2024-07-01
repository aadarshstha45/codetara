/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpRightArrow } from "@/assets/ArrowIcon";
import { contactData } from "@/staticData";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <Card borderRadius={0} shadow={"none"}>
      <CardBody gap={5} py={10} px={{ base: 8, sm: 12, md: 16, lg: 20 }}>
        <Text
          fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "36px" }}
          fontWeight={600}
        >
          Contact Us
        </Text>
        <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
          If you have any questions or need a complimentary quote, simply
          complete the form provided, and we'll reach out to you promptly.
        </Text>
        <Flex flexDir={"column"} py={4} gap={4}>
          {contactData?.map(({ id, icon, body, link }) => (
            <Flex
              target="_blank"
              _hover={{ textDecoration: "none" }}
              as={Link}
              to={link}
              gap={5}
              align={"center"}
              justify={"start"}
              key={id}
            >
              <Box borderRadius={"5px"} p={2} bg={"#E7EEFB"}>
                {icon}
              </Box>
              <Text fontSize={{ base: "16px", md: "20px" }} fontWeight={400}>
                {body}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Divider borderColor="#515151" borderWidth={"1px"} />
        <Box py={4}>
          <Text
            fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
            fontWeight={600}
          >
            Need an Internship?
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
            If you have any questions we'll reach out to you promptly.
          </Text>
          <Button
            as={Link}
            to={"/careers"}
            p={0}
            variant={"transparent"}
            color={"primary"}
            rightIcon={<UpRightArrow stroke="#F05B2D" />}
            border={"none"}
          >
            Click Here
          </Button>
        </Box>
        <Divider borderColor="#515151" borderWidth={"1px"} />
        <Box py={4}>
          <Text
            fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
            fontWeight={600}
          >
            Wanna apply for a job?
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
            If you have any questions we'll reach out to you promptly.
          </Text>
          <Button
            variant={"transparent"}
            color={"primary"}
            p={0}
            as={Link}
            to={"/careers"}
            rightIcon={<UpRightArrow stroke="#F05B2D" />}
            border={"none"}
          >
            Click Here
          </Button>
        </Box>
        <Divider borderColor="#515151" borderWidth={"1px"} />
      </CardBody>
    </Card>
  );
};

export default Section2;
