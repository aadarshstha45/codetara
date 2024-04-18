/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { UpRightArrow } from "../../assets/icons";
import {
  EmailIcon,
  MessageIcon,
  NameIcon,
  PhoneIcon,
} from "../../assets/icons/inputIcons";
import { ContactInput } from "../FormComponents/ContactInput";

export const Grid1 = () => {
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
      <CardBody gap={5} py={10} px={{ base: 8, sm: 12, md: 16, lg: 20 }}>
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
            icon={<MessageIcon />}
            label="Message"
            name="message"
            control={control}
          />

          <Button
            variant={"primary"}
            type="submit"
            rightIcon={<UpRightArrow stroke="white" />}
          >
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
