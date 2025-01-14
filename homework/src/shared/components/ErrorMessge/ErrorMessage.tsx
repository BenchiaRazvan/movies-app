import { FC } from "react";
import * as S from "./errorMessage.styles";

interface ErrorMessageProps {
  text?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ text }) => {
  if (!text) return null;
  return <S.Error>{text}</S.Error>;
};
