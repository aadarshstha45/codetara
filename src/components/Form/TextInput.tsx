/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Control, Controller, FieldErrors } from "react-hook-form";

type InputProps = {
  label?: string;
  control: Control<any>;
  name: string;
  type?: string;
  isRequired?: boolean;
  errors: FieldErrors;
  isReadOnly?: boolean;
};

export const TextInput = ({
  label,
  control,
  name,
  type,
  isRequired,
  errors,
  isReadOnly,
}: InputProps) => {
  return (
    <FormControl mb={8} isRequired={isRequired} isReadOnly={isReadOnly}>
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
      {errors[name] && (
        <FormHelperText
          color="red"
          fontSize="14px"
          fontStyle={"italic"}
          fontWeight={450}
        >
          {(errors[name] as any).message}
        </FormHelperText>
      )}
    </FormControl>
  );
};
