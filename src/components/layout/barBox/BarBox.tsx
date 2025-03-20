import { Progress } from "@/components/ui/progress";
import React from "react";
import { BarProps } from "./barProps";

const BarBox: React.FC<BarProps> = ({barColor, paragraph, value, className}) => {
  return (
    <div>
      <h1>{paragraph}</h1>
      <Progress barColor={barColor} value={value} className={className}/>
    </div>
  );
};

export default BarBox;
