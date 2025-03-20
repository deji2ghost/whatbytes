import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
    type={type} 
    inputMode="numeric"
    pattern="[0-9]*"
    onInput={(e) => {
      e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); // Removes non-numeric characters
    }}
      data-slot="input"
      className={cn(
        "border border-bluePurple rounded-[6px] p-1 outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
