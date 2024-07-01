/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

type InputProps = {
  label: string;
  control: Control<any>;
  name: string;
  type?: string;
  icon?: any;
};

export const ContactInput = ({
  label,
  control,
  name,
  type,
  icon,
}: InputProps) => {
  return (
    <FormControl mb={8}>
      <FormLabel fontSize={{ sm: "16px", md: "18px" }} fontWeight={450}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputGroup>
            <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
            {type === "textarea" ? (
              <Textarea
                bg={"#F9F9F9"}
                focusBorderColor="#919191"
                _hover={{ borderColor: "#919191" }}
                borderRadius={"6px"}
                border={"1px solid #919191"}
                value={value}
                onChange={onChange}
              />
            ) : (
              <Input
                bg={"#F9F9F9"}
                focusBorderColor="#919191"
                _hover={{ borderColor: "#919191" }}
                borderRadius={"6px"}
                border={"1px solid #919191"}
                value={value}
                onChange={onChange}
                type={type}
              />
            )}
          </InputGroup>
        )}
      />
    </FormControl>
  );
};
