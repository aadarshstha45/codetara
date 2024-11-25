/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddIcon, DOCX, PDF } from "@/assets/Icon";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { Control, Controller, FieldErrors } from "react-hook-form";

type DropzoneProps = {
  name: string;
  control: Control<any>;
  onDrop?: (acceptedFiles: any) => void;
  label?: string;
  onDelete: () => void;
  file: File | null;
  errors?: FieldErrors;
  isRequired?: boolean;
  helperText?: string;
  message?: string;
};

export default function DropzoneComponent({
  name,
  control,
  message,
  onDrop,
  label,
  file,
  onDelete,
  isRequired,
  helperText,
  errors,
}: DropzoneProps) {
  const { colorMode } = useColorMode();
  return (
    <FormControl mb={4} isRequired={isRequired}>
      <FormLabel fontSize={{ sm: "16px", md: "18px" }} fontWeight={450}>
        {label}
      </FormLabel>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Dropzone
            onDrop={(acceptedFiles) => {
              field.onChange(acceptedFiles[0]); // Update form controller value
              onDrop && onDrop(acceptedFiles);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <Flex
                minH={40}
                mb={4}
                flexDir="column"
                {...getRootProps()}
                border={"1px solid #000"}
                p={6}
                bg={"transparent"}
                _hover={{
                  bg: "#FFFFFA",
                }}
                cursor={"pointer"}
                borderColor={"gray.500"}
                gap={4}
                align={"center"}
                textAlign={"center"}
                justify={"center"}
                borderRadius={"lg"}
              >
                <input {...getInputProps()} />
                {!file && (
                  <Flex flexDir={"column"} gap={2} align={"center"}>
                    <AddIcon />
                    <Text>Select a file </Text>
                  </Flex>
                )}

                {file && (
                  <Flex
                    align="center"
                    gap={2}
                    flexDir="column"
                    position="relative"
                    overflow={"hidden"}
                  >
                    {file.type === "application/pdf" ? (
                      <Image
                        p={4}
                        w={{ base: "auto", sm: "200px" }}
                        h={"200px"}
                        objectFit="cover"
                        border={"1px"}
                        borderColor={"gray.500"}
                        borderRadius={"5px"}
                        src={PDF}
                        alt={file.name}
                      />
                    ) : file.type ===
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                      <Image
                        p={4}
                        w={{ base: "auto", sm: "200px" }}
                        h={"200px"}
                        objectFit="cover"
                        border={"1px"}
                        borderColor={"gray.500"}
                        borderRadius={"5px"}
                        src={DOCX}
                        alt={file.name}
                      />
                    ) : null}

                    <Text
                      pos={"absolute"}
                      bottom={0}
                      left={0}
                      right={0}
                      bg={"white"}
                      opacity={0.9}
                      textColor={"black"}
                      fontSize={"sm"}
                      p={2}
                      overflow={"hidden"}
                      whiteSpace={"nowrap"} // Prevent text wrapping
                      textOverflow={"ellipsis"} // Truncate text with ellipsis
                    >
                      {file.name}
                    </Text>
                    <IconButton
                      alignSelf={"center"}
                      aria-label="Delete Image"
                      icon={<DeleteIcon />}
                      bg={"white"}
                      borderRadius={5}
                      opacity={0.8}
                      textColor="black"
                      size="sm"
                      position="absolute"
                      top={0}
                      right={0}
                      onClick={(event) => {
                        event.stopPropagation();
                        onDelete();
                        field.onChange(null);
                      }}
                    />
                  </Flex>
                )}
              </Flex>
            )}
          </Dropzone>
        )}
      />
      {message && (
        <FormHelperText
          color={colorMode === "light" ? "gray.800" : "gray.100"}
          fontSize="sm"
          textColor={"red.500"}
          fontStyle={"italic"}
        >
          {message}
        </FormHelperText>
      )}

      {helperText && (
        <FormHelperText
          color={colorMode === "light" ? "gray.800" : "gray.100"}
          fontSize="xs"
          fontStyle={"italic"}
        >
          {helperText}
        </FormHelperText>
      )}
      {errors && (
        <FormHelperText color="red.500" fontStyle={"italic"}>
          {(errors[name] as any)?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}