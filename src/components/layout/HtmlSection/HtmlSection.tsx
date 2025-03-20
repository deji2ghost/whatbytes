import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { HtmlProps } from "./htmlprops";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HtmlPic from "../../../../public/images.png"

const HtmlSection: React.FC<HtmlProps> = ({handleUpdateModal}) => {
  return (
    <CardWrapper className="flex flex-col gap-4 lg:flex-row items-start justify-between">
      <div className="w-[7%]"><Image src={HtmlPic} alt="html picture"/></div>
      <div className="flex flex-col gap-1 items-start">
        <h1 className="font-bold">Hyper Text Markup Language</h1>
        <div className="text-textColor flex items-center">
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
