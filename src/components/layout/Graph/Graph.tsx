import CustomChart from "@/components/ui/chart";
import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { GraphProp } from "./graphProps";

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
      />
    </CardWrapper>
  );
};

export default Graph;
