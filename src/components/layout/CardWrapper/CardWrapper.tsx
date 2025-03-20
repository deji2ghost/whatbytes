import React from "react"
import { WrapperProps } from "./Wrapper"
import { cn } from "@/lib/utils"

const CardWrapper: React.FC<WrapperProps> = ({children, className}) => {
  return (
    <div className={cn("border border-foreground p-3 rounded-[5px]", className)}>
      {children}
    </div>
  )
}

export default CardWrapper
