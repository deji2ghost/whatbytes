import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { StatisticsProp } from "./statisticsProps"

const Statistics: React.FC<StatisticsProp> = ({rank, percentile, currentScore, textRank, textPercentile, textAnswers, iconRank, iconPercentile, iconScore}) => {
  return (
    <CardWrapper>
      <h1 className="font-bold">Quick Statistics</h1>
      <div className="flex items center">
        <ScoreBoard icon={iconRank} text={textRank} score={`${rank}`} />
        <ScoreBoard icon={iconPercentile} text={textPercentile} score={`${percentile}%`} />
        <ScoreBoard
          icon={iconScore}
          text={textAnswers}
          score={`${currentScore}/15`}
        />
      </div>
    </CardWrapper>
  );
};

export default Statistics;
