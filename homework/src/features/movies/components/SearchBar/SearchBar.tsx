import { FC } from "react";
import { InputField } from "../../../../shared/components/InputField/ErrorMessage";

interface SearchBarProps {
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <InputField
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    ></InputField>
  );
};
