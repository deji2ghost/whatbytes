import React from "react";

export interface FormInputProps{
    type: string, 
    name: string, 
    value: number | string, 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    number: number, 
    text: string, 
    bold: string,
    errors: string,
}