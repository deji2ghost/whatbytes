"use client";
import FormInput from "@/components/layout/FormInput/FormInput";
import Graph from "@/components/layout/Graph/Graph";
import HtmlSection from "@/components/layout/HtmlSection/HtmlSection";
import Statistics from "@/components/layout/Statistics/statistics";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";

const Modal = dynamic(() => import("@/components/ui/modal"), { ssr: false });

const HomePage = () => {
  const [isOpen, setIsopen] = useState(false);

  const [overall, setOverall] = useState({
    rank: 1,
    percentile: 30,
    currentScore: 10,
  });

  const handleUpdateModal = () => {
    console.log("clicked");
    setIsopen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setOverall({
      ...overall,
      [name]: value,
    });
  };

  const sampleData = [
    { name: "Alice", score: 85, percentile: 90 },
    { name: "Bob", score: 78, percentile: 85 },
    { name: "Charlie", score: 92, percentile: 95 },
    { name: "David", score: 88, percentile: 92 },
  ];

  return (
    <div>
      <h1>Skill Test</h1>
      <div className="flex items-start">
        <div className="w-[60%]">
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
          {/* <CardWrapper>
            <h1>Comparison Graph</h1>
            <div className="flex items-center">
              <p>
                You scored {overall.percentile} percentile which is lower than
                the average percentile 72% of all the engineers who took this
                assessment
              </p>
              <div>📈</div>
            </div>
            <CustomChart
              data={sampleData}
              xAxisKey="name"
              yAxisKey="score"
              title="Student Performance"
              description="Scores and percentiles of students in the last exam"
              footerText="Performance trending up by 5%"
            />
          </CardWrapper> */}
          <Graph
            data={sampleData}
            percentile={overall.percentile}
          />
          {isOpen && (
            <Suspense>
              <Modal
                isOpen={isOpen}
                onClose={() => setIsopen(false)}
                header="Update Scores"
                content={
                  <div className="flex flex-col">
                    <FormInput
                      number={1}
                      type="text"
                      name="rank"
                      text="Update your"
                      bold="Rank"
                      value={overall.rank}
                      handleChange={handleChange}
                    />
                    <FormInput
                      number={2}
                      type="text"
                      name="percentile"
                      text="Update your"
                      bold="Percentile"
                      value={overall.percentile}
                      handleChange={handleChange}
                    />
                    <FormInput
                      number={3}
                      type="text"
                      name="currentScore"
                      text="Update your"
                      bold="Current Score (out of 15)"
                      value={overall.currentScore}
                      handleChange={handleChange}
                    />
                  </div>
                }
                footer={
                  <div className="flex items-center justify-end">
                    <Button>Cancel</Button>
                    <Button>Save</Button>
                  </div>
                }
              />
            </Suspense>
          )}
        </div>
        <div className="w-[40%]">
          <div>
            <h1>Syllabus Wise Analysis</h1>
            <div>
              <div>
                <h1>Html css</h1>
                <Progress value={80}/>
              </div>
              <div>
                <h1>Html css</h1>
                <Progress value={60}/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
