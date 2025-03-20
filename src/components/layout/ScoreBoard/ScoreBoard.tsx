import React from "react";
import { ScoreBoardProp } from "./ScoreBoardProp";

const ScoreBoard: React.FC<ScoreBoardProp> = ({
  icon,
  score,
  text,
  second,
}) => {
  return (
    <div
      className={`flex py-4 lg:px-8 gap-2 ${
        second ? "lg:border-x lg:border-foreground" : null
      }`}
    >
      <h1 className="h-[40px] w-[40px] flex justify-center items-center rounded-full border text-center bg-foreground border-textColor">
        {icon}
      </h1>
      <div className="flex flex-col gap-1">
        <p className="font-bold">{score}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
