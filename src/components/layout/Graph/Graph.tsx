import CustomChart from "@/components/ui/chart";
import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { GraphProp } from "./graphProps";

const Graph: React.FC<GraphProp> = ({ percentile, data }) => {
  return (
    <CardWrapper>
      <h1 className="font-bold">Comparison Graph</h1>
      <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-4">
        <p className="text-textColor">
          <span className="font-extrabold">
            You scored {percentile}% percentile
          </span>{" "}
          which is lower than the average percentile 72% of all the engineers
          who took this assessment
        </p>
        <div className="h-[40px] w-[50px] lg:w-[65px] flex justify-center items-center rounded-full border text-center bg-foreground border-textColor">
          📈
        </div>
      </div>
      <CustomChart color="#633CFF" domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} data={data} />
    </CardWrapper>
  );
};

export default Graph;
