import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import ScoreChart from "@/components/ui/piechart";
import { CurrentProps } from "./questionProps";

const Question: React.FC<CurrentProps> = ({currentScore}) => {
  return (
    <CardWrapper>
      <div>
        <h1>Question Analysis</h1>
        <p>
          You scored {currentScore} questions out of 15. However it
          still needs some improvements
        </p>
      </div>
      <ScoreChart currentScore={currentScore} />
    </CardWrapper>
  );
};

export default Question;
