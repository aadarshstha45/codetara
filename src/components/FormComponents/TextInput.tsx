/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

type InputProps = {
  label: string;
  control: Control<any>;
  name: string;
  type?: string;
};

export const TextInput = ({ label, control, name, type }: InputProps) => {
  return (
    <FormControl mb={8}>
      <FormLabel fontSize={{ sm: "16px", md: "18px" }} fontWeight={450}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            focusBorderColor="#000"
            _hover={{ borderColor: "#000" }}
            borderRadius={"6px"}
            border={"1px solid #000"}
            value={value}
            onChange={onChange}
            type={type}
          />
        )}
      />
    </FormControl>
  );
};
