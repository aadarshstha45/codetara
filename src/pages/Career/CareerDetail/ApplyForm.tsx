/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpRightArrow } from "@/assets/ArrowIcon";
import DropzoneComponent from "@/components/Form/DropzoneComponent";
import { TextInput } from "@/components/Form/TextInput";
import { ApplicationSchema } from "@/utils/schema";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
const ApplyForm = () => {
  const { id } = useLocation().state;
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobId: id!,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      github: "",
      file: undefined,
    },
    resolver: yupResolver(ApplicationSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    console.log({
      data,
    });
    reset();
    setFile(null);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (
      file.type !== "application/pdf" &&
      file.type !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      // Show error message for invalid file type
      setErrorMessage("Only PDF and DOCX files are allowed.");
    } else {
      // Clear any previous error message
      setErrorMessage("");
      // Pass the valid file to the parent component
      setFile(file);
    }
  };

  return (
    <Box bg={"#F1F1F1"}>
      <Container maxW={{ base: "95vw", md: "85vw" }} py={5}>
        <Flex justify={"center"}>
          <Card
            alignItems={"center"}
            w={{ base: "100%", md: "90%", lg: "1027px" }}
            borderRadius={0}
            pt={2}
            pb={20}
            px={{ base: 2, sm: 5, md: 20, lg: 32 }}
          >
            <CardBody alignContent={"center"} w={"full"}>
              <Flex flexDir={"column"} alignItems={"center"} mb={5}>
                <Text
                  fontSize={{
                    base: "32px",
                    sm: "36px",
                    md: "40px",
                    lg: "44px",
                  }}
                  fontWeight={450}
                >
                  Job Application
                </Text>
                <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={450}>
                  Tell us more about yourself so we can get back to you with
                  more information.
                </Text>
              </Flex>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input type="hidden" name="jobId" value={id} readOnly />

                <TextInput
                  errors={errors}
                  isRequired
                  control={control}
                  label={"First Name"}
                  name={"firstName"}
                />
                <TextInput
                  errors={errors}
                  isRequired
                  control={control}
                  label={"Last Name"}
                  name={"lastName"}
                />
                <TextInput
                  errors={errors}
                  isRequired
                  control={control}
                  label={"Email"}
                  name={"email"}
                />
                <TextInput
                  errors={errors}
                  isRequired
                  control={control}
                  label={"Phone Number"}
                  name={"phone"}
                />
                <DropzoneComponent
                  errors={errors}
                  isRequired
                  control={control}
                  name="file"
                  file={file}
                  onDrop={handleDrop}
                  label="Upload your resume [ PDF, DOCX ]"
                  onDelete={() => setFile(null)}
                  message={errorMessage}
                />
                <TextInput
                  errors={errors}
                  control={control}
                  label={"Github Link"}
                  name={"github"}
                />
                <Button
                  type="submit"
                  variant={"transparent"}
                  border={"1px solid #253470"}
                  color={"#253470"}
                  rightIcon={<UpRightArrow stroke="#253470" />}
                  px={2}
                >
                  Apply
                </Button>
              </form>
            </CardBody>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
};

export default ApplyForm;
