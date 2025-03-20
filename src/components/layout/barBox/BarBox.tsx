import { Progress } from "@/components/ui/progress";
import React from "react";
import { BarProps } from "./barProps";

const BarBox: React.FC<BarProps> = ({
  barColor,
  paragraph,
  value,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-textColor">{paragraph}</h1>
      <Progress barColor={barColor} value={value} className={className} />
    </div>
  );
};

export default BarBox;
