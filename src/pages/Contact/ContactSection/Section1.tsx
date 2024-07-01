/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpRightArrow } from "@/assets/ArrowIcon";
import { EmailIcon, NameIcon, PhoneIcon } from "@/assets/InputIcon";
import { ContactInput } from "@/components/Form/ContactInput";
import {
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Section1 = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <Card bg={"#D9D9D9"} borderRadius={0} shadow={"none"}>
      <CardBody py={10} px={{ base: 2, sm: 8, lg: 16 }}>
        <Text
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight={600}
        >
          Let's Talk Business
        </Text>
        <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
          If you have any questions or need a complimentary quote, simply
          complete the form provided, and we'll reach out to you promptly.
        </Text>
        <Flex justify={"center"} mt={4}>
          <Container maxW={{ base: "100%", md: "100%", xl: "80%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ContactInput
                icon={<NameIcon />}
                label="Name"
                name="name"
                control={control}
              />
              <ContactInput
                icon={<EmailIcon />}
                label="Email"
                name="email"
                control={control}
              />
              <ContactInput
                icon={<PhoneIcon />}
                label="Phone"
                name="phone"
                control={control}
              />
              <ContactInput
                type="textarea"
                label="Message"
                name="message"
                control={control}
              />

              <Button
                colorScheme={"primary"}
                borderRadius={1}
                type="submit"
                rightIcon={<UpRightArrow stroke="white" />}
              >
                Submit
              </Button>
            </form>
          </Container>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Section1;
