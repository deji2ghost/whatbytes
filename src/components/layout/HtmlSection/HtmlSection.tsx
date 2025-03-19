import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { HtmlProps } from "./htmlprops";
import { Button } from "@/components/ui/button";

const HtmlSection: React.FC<HtmlProps> = ({handleUpdateModal}) => {
  return (
    <CardWrapper className="flex items-start">
      <div>Html icon</div>
      <div>
        <h1>Hyper Text Markup Language</h1>
      </div>
      <Button onClick={handleUpdateModal}>Update</Button>
    </CardWrapper>
  );
};

export default HtmlSection;
