import CustomChart from "@/components/ui/chart";
import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { GraphProp } from "./Graph";

const Graph: React.FC<GraphProp> = ({percentile, data}) => {
  return (
    <CardWrapper>
      <h1>Comparison Graph</h1>
      <div className="flex items-center">
        <p>
          You scored {percentile} percentile which is lower than the
          average percentile 72% of all the engineers who took this assessment
        </p>
        <div>📈</div>
      </div>
      <CustomChart
        data={data}
        xAxisKey="name"
        yAxisKey="score"
        title="Student Performance"
        description="Scores and percentiles of students in the last exam"
        footerText="Performance trending up by 5%"
      />
    </CardWrapper>
  );
};

export default Graph;
