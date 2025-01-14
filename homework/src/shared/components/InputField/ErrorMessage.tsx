import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";
import { ErrorMessage } from "../ErrorMessge/ErrorMessage";

type InputFieldProps = TextFieldProps & {
  errorMessage?: string;
};

export const InputField: FC<InputFieldProps> = ({ errorMessage, ...props }) => {
  return (
    <>
      <TextField {...props} />
      <ErrorMessage text={errorMessage} />
    </>
  );
};
