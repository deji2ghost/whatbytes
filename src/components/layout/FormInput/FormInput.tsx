import React from "react";
import { Input } from "@/components/ui/input";
import { FormInputProps } from "./FormInputProps";

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  handleChange,
  number,
  text,
  bold,
  errors,
  isNumeric
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-[10px]">
        <h1 className="bg-bluePurple w-[50px] h-auto rounded-full text-center text-background">
          {number}
        </h1>
        <p className="text-left w-full">
          {text} <span>{bold}</span>
        </p>
        <Input type={type} isNumeric={isNumeric} name={name} value={value} onChange={handleChange} />
      </div>
      {errors && <p className="text-warning text-right">{errors}</p>}
    </div>
  );
};

export default FormInput;
