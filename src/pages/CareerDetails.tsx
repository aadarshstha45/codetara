import { Box, Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  DownRightArrow,
  HourGlassIcon,
  LeftArrow,
  UserIcon,
} from "../assets/icons";
import { CareerDetailSection1 } from "../components/CareerDetailComponent";
import { CareerDetailData } from "../data/CareerData";

export const CareerDetails = () => {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  return (
    <Flex flexDir={"column"}>
      {CareerDetailData.slice(0, 1).map(
        ({
          id,
          title,

          location,
          level,
          salary,
          publishedDate,
          deadlineDate,
          noOfPositions,
        }) => (
          <Box
            bgGradient={"linear-gradient(270deg, #E0C3E8 0%, #C1CAEF 100%);"}
            key={id}
          >
            <Container maxW={{ base: "95vw", md: "85vw" }} py={5}>
              <Button
                p={0}
                variant={"outline"}
                borderColor={"transparent"}
                _hover={{ bg: "transparent" }}
                leftIcon={<LeftArrow />}
                onClick={() => history.back()}
              >
                Back to careers
              </Button>
              <Text
                fontSize={{ base: "25px", sm: "30px", md: "35px", lg: "40px" }}
                fontWeight={450}
                lineHeight={"normal"}
                textTransform={"capitalize"}
              >
                {title}
              </Text>
              <Flex
                gap={{ base: "10px", md: "40px" }}
                flexWrap={{ base: "wrap", lg: "nowrap" }}
                justify={"space-between"}
                align={"center"}
              >
                <Flex
                  gap={{ base: 10, md: 20 }}
                  flexBasis={{ base: "auto", md: "80%", lg: "40%" }}
                >
                  <Box>
                    <Text
                      fontSize={{
                        base: "20px",
                        sm: "22px",
                        md: "24px",
                        lg: "28px",
                      }}
                      fontWeight={450}
                    >
                      Location
                    </Text>
                    <Text
                      fontSize={{
                        base: "16px",
                        md: "18px",
                      }}
                    >
                      {location}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{
                        base: "20px",
                        sm: "22px",
                        md: "24px",
                        lg: "28px",
                      }}
                      fontWeight={450}
                    >
                      Level
                    </Text>
                    <Text
                      fontSize={{
                        base: "16px",
                        md: "18px",
                      }}
                    >
                      {level}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{
                        base: "20px",
                        sm: "22px",
                        md: "24px",
                        lg: "28px",
                      }}
                      fontWeight={450}
                    >
                      Salary
                    </Text>
                    <Text
                      fontSize={{
                        base: "16px",
                        md: "18px",
                      }}
                    >
                      {salary}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  flexBasis={{ base: "auto", md: "80%", lg: "40%" }}
                  //   display={{ base: "none", md: "flex" }}
                  flexWrap={{ base: "wrap", md: "nowrap" }}
                  bg={"#FCFCFC"}
                  p={4}
                  gap={{ base: 4, md: 10 }}
                  borderRadius={5}
                >
                  <Box>
                    <Text fontSize={{ base: "14px", md: "18px" }}>
                      Published Date
                    </Text>
                    <Flex align={"center"} gap={1}>
                      <CalendarIcon />
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        {publishedDate}
                      </Text>
                    </Flex>
                  </Box>
                  <Divider
                    h={"auto"}
                    borderColor={"#CFCFCF"}
                    borderWidth={"1px"}
                    orientation="vertical"
                  />
                  <Box>
                    <Text fontSize={{ base: "14px", md: "16px" }}>
                      Deadline Date
                    </Text>
                    <Flex align={"center"} gap={1}>
                      <HourGlassIcon />
                      <Text fontSize={{ base: "14px", md: "14px" }}>
                        {deadlineDate}
                      </Text>
                    </Flex>
                  </Box>
                  <Divider
                    display={{ base: "none", md: "block" }}
                    h={"auto"}
                    borderColor={"#CFCFCF"}
                    borderWidth={"1px"}
                    orientation="vertical"
                  />

                  <Box>
                    <Text fontSize={{ base: "14px", md: "16px" }}>
                      No of Position/s
                    </Text>
                    <Flex align={"center"} gap={1}>
                      <UserIcon />
                      <Text fontSize={{ base: "14px", md: "14px" }}>
                        {noOfPositions}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
              <Button
                variant={"primary"}
                mt={5}
                borderRadius={"1px"}
                rightIcon={<DownRightArrow />}
                onClick={() => navigate("/careers/apply")}
              >
                Apply Now
              </Button>

              <Flex mt={10} flexDir={"column"} gap={2}>
                <Text
                  fontSize={{
                    base: "20px",
                    sm: "22px",
                    md: "24px",
                    lg: "26px",
                  }}
                >
                  About Company
                </Text>
                <Text
                  fontSize={{
                    base: "16px",
                    sm: "18px",
                    md: "20px",
                    lg: "22px",
                  }}
                >
                  Here, we build tailored software solutions to propel your
                  business forward. From concept to execution, we'll help you
                  soar above the competition with innovative technology stacks
                  designed to meet your unique needs. Let's elevate your digital
                  experience together
                </Text>
              </Flex>
            </Container>
          </Box>
        )
      )}
      <CareerDetailSection1 />
    </Flex>
  );
};
