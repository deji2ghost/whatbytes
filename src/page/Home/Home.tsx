"use client";
import FormInput from "@/components/layout/FormInput/FormInput";
import Graph from "@/components/layout/Graph/Graph";
import HtmlSection from "@/components/layout/HtmlSection/HtmlSection";
import Question from "@/components/layout/Question/Question";
import Statistics from "@/components/layout/Statistics/statistics";
import Syllabus from "@/components/layout/syllabus/Syllabus";
import { Button } from "@/components/ui/button";
import { sampleData } from "@/data/constants";
import useScoreHook from "@/hooks/useScoreHook";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { Suspense } from "react";

import HtmlPic from "../../../public/images.png";

const Modal = dynamic(() => import("@/components/ui/modal"), { ssr: false });

const HomePage = () => {
  
  const {
    isOpen,
    overall,
    tempForm,
    errors,
    handleUpdateModal,
    handleChange,
    handleSave,
  } = useScoreHook();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-Base">Skill Test</h1>
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="lg:w-[60%] flex flex-col gap-6">
          <HtmlSection handleUpdateModal={handleUpdateModal} />
          <Statistics
            iconRank="🏆"
            iconPercentile="📋"
            iconScore="✅"
            textAnswers="CORRECT ANSWERS"
            textPercentile="PERCENTILE"
            textRank="YOUR RANK"
            rank={overall.rank}
            percentile={overall.percentile}
            currentScore={overall.currentScore}
          />
          <Graph data={sampleData} percentile={overall.percentile} />
        </div>
        <div className="lg:w-[40%] flex flex-col gap-6 w-full">
          <Syllabus />
          <Question currentScore={overall.currentScore} />
        </div>
      </div>
      {isOpen && (
        <Suspense>
          <Modal
            isOpen={isOpen}
            onClose={() => handleUpdateModal(false)}
            header={
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Update Scores</h1>
              <div className="w-[7%]">
                      <Image src={HtmlPic} alt="html picture" />
                    </div>
            </div>
            }
            content={
              <div className="flex flex-col gap-8">
                <FormInput
                  number={1}
                  type="text"
                  name="rank"
                  text="Update your"
                  bold="Rank"
                  value={tempForm.rank}
                  handleChange={handleChange}
                  errors={errors.rank}
                  isNumeric={true}
                />
                <FormInput
                  number={2}
                  type="text"
                  name="percentile"
                  text="Update your"
                  bold="Percentile"
                  value={tempForm.percentile}
                  handleChange={handleChange}
                  errors={errors.percentile}
                  isNumeric={true}
                />
                <FormInput
                  number={3}
                  type="text"
                  name="currentScore"
                  text="Update your"
                  bold="Current Score (out of 15)"
                  value={tempForm.currentScore}
                  handleChange={handleChange}
                  errors={errors.currentScore}
                  isNumeric={true}
                />
              </div>
            }
            footer={
              <div className="flex items-center justify-end gap-6">
                <Button
                  variant={"outline"}
                  onClick={() => handleUpdateModal(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save &gt;</Button>
              </div>
            }
          />
        </Suspense>
      )}
    </div>
  );
};

export default HomePage;
