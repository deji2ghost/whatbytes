import React from "react";
import { Input } from "@/components/ui/input";
import { FormInputProps } from "./FormInputProps";

const FormInput: React.FC<FormInputProps> = ({type, name, value, handleChange, number, text, bold}) => {
  return (
    <div className="flex items-center">
      <h1>{number}</h1>
      <p>
        {text} <span>{bold}</span>
      </p>
      <Input type={type} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default FormInput;