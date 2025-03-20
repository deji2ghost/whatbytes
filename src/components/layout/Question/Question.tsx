import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { CurrentProps } from "./questionProps";
import dynamic from "next/dynamic";

const ScoreChart = dynamic(() => import("@/components/ui/piechart"), { ssr: false })

const Question: React.FC<CurrentProps> = ({ currentScore }) => {
  return (
    <CardWrapper>
      <div>
        <h1 className="font-bold">Question Analysis</h1>
        <p className="text-textColor">
          <span className="font-extrabold">
            You scored {currentScore} questions out of 15.
          </span>
          However it still needs some improvements
        </p>
      </div>
      <ScoreChart currentScore={currentScore} />
    </CardWrapper>
  );
};

export default Question;
