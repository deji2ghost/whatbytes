"use client";
import CardWrapper from "@/components/layout/CardWrapper/CardWrapper";
import FormInput from "@/components/layout/FormInput/FormInput";
import Graph from "@/components/layout/Graph/Graph";
import HtmlSection from "@/components/layout/HtmlSection/HtmlSection";
import Statistics from "@/components/layout/Statistics/statistics";
import { Button } from "@/components/ui/button";
import ScoreChart from "@/components/ui/piechart";
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

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    currentScore: "",
  });

  const [tempForm, setTempForm] = useState(overall);

  const handleUpdateModal = (value: boolean) => {
    setIsopen(value);
    setTempForm(overall);
    setErrors({ rank: "", percentile: "", currentScore: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const parsedValue = name === "rank" ? value : parseInt(value, 10) || 0;
    setTempForm({ ...tempForm, [name]: parsedValue });

    setErrors({ ...errors, [name]: "" });

  };

  const handleSave = () => {
    const newErrors = { rank: "", percentile: "", currentScore: "" };
    let isValid = true;

    // Validation for Rank
    if (!tempForm.rank) {
      newErrors.rank = "Select a rank";
      isValid = false;
    }

    // Validation for Percentile
    if (!tempForm.percentile || tempForm.percentile < 1 || tempForm.percentile > 100) {
      newErrors.percentile = "Pick a number from 1 - 100";
      isValid = false;
    }

    // Validation for Current Score
    if (!tempForm.currentScore || tempForm.currentScore < 1 || tempForm.currentScore > 15) {
      newErrors.currentScore = "Pick a number from 1 - 15";
      isValid = false;
    }

    // If there are errors, update the state and stop saving
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, update the scores
    setOverall(tempForm);
    setIsopen(false);
  };

  const sampleData = [
    { name: "Alice", score: 85, percentile: 90 },
    { name: "Bob", score: 78, percentile: 85 },
    { name: "Charlie", score: 92, percentile: 95 },
    { name: "David", score: 88, percentile: 92 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-Lg">Skill Test</h1>
      <div className="flex items-start gap-6">
        <div className="w-[60%] flex flex-col gap-6">
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
                    />
                  </div>
                }
                footer={
                  <div className="flex items-center justify-end">
                    <Button variant={"outline"} onClick={()=>handleUpdateModal(false)}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                  </div>
                }
              />
            </Suspense>
          )}
        </div>
        <div className="w-[40%]">
          <CardWrapper>
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
          </CardWrapper>
          <div>
            <div>
              <h1>Question Analysis</h1>
            </div>
            <ScoreChart currentScore={overall.currentScore}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
