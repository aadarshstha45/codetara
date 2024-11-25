import { DownRightArrow, LeftArrow } from "@/assets/ArrowIcon";
import { CalendarIcon, HourGlassIcon, UserIcon } from "@/assets/Icon";
import { positionData } from "@/staticData";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { createBrowserHistory } from "history";
import { useNavigate, useParams } from "react-router-dom";
import { DetailSection } from "./DetailSection";

const CareerDetails = () => {
  const { id } = useParams();

  const history = createBrowserHistory();
  const navigate = useNavigate();

  const data = positionData.find((item) => item.id === parseInt(id!));

  return (
    <Flex flexDir={"column"}>
      <Box bgGradient={"linear-gradient(270deg, #E0C3E8 0%, #C1CAEF 100%);"}>
        <Container maxW={{ base: "95vw", md: "85vw" }} py={5}>
          <Flex flexDir={"column"} gap={4}>
            <Button
              // size={{ base: "xs", sm: "sm", md: "md" }}
              p={0}
              fontSize={"sm"}
              w={"fit-content"}
              variant={"outline"}
              borderColor={"transparent"}
              _hover={{ bg: "transparent" }}
              leftIcon={<LeftArrow />}
              onClick={() => history.back()}
            >
              Back to careers
            </Button>
            <Text
              fontSize={{ base: "20px", sm: "35px", md: "30px", lg: "35px" }}
              fontWeight={600}
              lineHeight={"normal"}
              textTransform={"capitalize"}
              borderBottom={"2px solid #000"}
              w={"fit-content"}
            >
              {data?.title}
            </Text>

            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
              <GridItem colSpan={1}>
                <Flex
                  justify="start"
                  flexWrap={{ base: "wrap", sm: "nowrap" }}
                  gap={{ base: 4, sm: 5, md: 10 }}
                >
                  <Box order={{ base: 3, sm: 1 }} w={"fit-content"}>
                    <Text
                      fontSize={{
                        base: "18px",
                        sm: "20px",
                        md: "22px",
                        lg: "24px",
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
                      {data?.location}
                    </Text>
                  </Box>
                  <Box order={2} ml={{ base: 10, sm: 0 }} w={"fit-content"}>
                    <Text
                      fontSize={{
                        base: "18px",
                        sm: "20px",
                        md: "22px",
                        lg: "24px",
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
                      {data?.level}
                    </Text>
                  </Box>
                  <Box order={1} w={"fit-content"}>
                    <Text
                      fontSize={{
                        base: "18px",
                        sm: "20px",
                        md: "22px",
                        lg: "24px",
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
                      {data?.salary}
                    </Text>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem colSpan={1} w={{ base: "full", sm: "fit-content" }}>
                <Flex
                  //   display={{ base: "none", md: "flex" }}
                  w={"full"}
                  flexWrap={{ base: "wrap", sm: "nowrap" }}
                  bg={"#FCFCFC"}
                  p={4}
                  align={"center"}
                  gap={{ base: 2, sm: 4, md: 6 }}
                  justify={"space-between"}
                  borderRadius={5}
                >
                  <Box>
                    <Text
                      display={{ base: "none", sm: "flex" }}
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      Published Date
                    </Text>
                    <Flex
                      align={"center"}
                      gap={1}
                      flexDir={{ base: "column", sm: "row" }}
                    >
                      <CalendarIcon />
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        {data?.publishedDate}
                      </Text>
                    </Flex>
                  </Box>

                  <Box>
                    <Text
                      display={{ base: "none", sm: "flex" }}
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      No of Position/s
                    </Text>
                    <Flex
                      align={"center"}
                      gap={1}
                      flexDir={{ base: "column", sm: "row" }}
                    >
                      <UserIcon />
                      <Text fontSize={{ base: "14px", md: "14px" }}>
                        {data?.noOfPositions}
                      </Text>
                    </Flex>
                  </Box>

                  <Box>
                    <Text
                      display={{ base: "none", sm: "flex" }}
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      Deadline Date
                    </Text>
                    <Flex
                      align={"center"}
                      gap={1}
                      flexDir={{ base: "column", sm: "row" }}
                    >
                      <HourGlassIcon />
                      <Text fontSize={{ base: "14px", md: "14px" }}>
                        {data?.deadlineDate}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </GridItem>
            </SimpleGrid>

            <Button
              colorScheme={"primary"}
              mt={5}
              w={"fit-content"}
              borderRadius={"1px"}
              rightIcon={<DownRightArrow />}
              onClick={() =>
                navigate("/careers/apply", {
                  state: { id: data?.id },
                })
              }
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
                business forward. From concept to execution, we'll help you soar
                above the competition with innovative technology stacks designed
                to meet your unique needs. Let's elevate your digital experience
                together
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <DetailSection />
    </Flex>
  );
};

export default CareerDetails;
