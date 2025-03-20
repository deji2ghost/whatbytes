import React from "react";
import BarBox from "../barBox/BarBox";
import CardWrapper from "../CardWrapper/CardWrapper";

const Syllabus = () => {
  return (
    <CardWrapper className="flex flex-col gap-5">
      <h1 className="font-bold">Syllabus Wise Analysis</h1>
      <div className="flex flex-col gap-5">
        <BarBox
          value={80}
          paragraph="Html Tools, Forms, History"
          barColor="bg-bluePurple"
          className="bg-bluePurple/20"
        />
        <BarBox
          value={60}
          paragraph="Tags & References in Html"
          barColor="bg-orange-500"
          className="bg-orange-500/20"
        />
        <BarBox
          value={24}
          paragraph="Tables & References in Html"
          barColor="bg-warning"
          className="bg-warning/20"
        />
        <BarBox
          value={96}
          paragraph="Tables & Css Basics"
          barColor="bg-green-700"
          className="bg-green-700/20"
        />
      </div>
    </CardWrapper>
  );
};

export default Syllabus;
