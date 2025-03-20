import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { HtmlProps } from "./htmlprops";
import { Button } from "@/components/ui/button";

const HtmlSection: React.FC<HtmlProps> = ({handleUpdateModal}) => {
  return (
    <CardWrapper className="flex items-start justify-between">
      <div>Html icon</div>
      <div className="flex flex-col items-start">
        <h1>Hyper Text Markup Language</h1>
        <div className="flex items-center">
          <p>Questions: 08</p>
          <p>Durations: 15mins</p>
          <p>Submitted on 5 June 2021</p>
        </div>
      </div>
      <Button onClick={()=>handleUpdateModal(true)}>Update</Button>
    </CardWrapper>
  );
};

export default HtmlSection;
