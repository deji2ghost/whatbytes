import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isNumeric?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isNumeric, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        inputMode={isNumeric ? "numeric" : undefined}
        pattern={isNumeric ? "[0-9]*" : undefined}
        onInput={(e) => {
          if (isNumeric) {
            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
          }
        }}
        data-slot="input"
        className={cn(
          "border border-bluePurple rounded-[6px] p-1 outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
