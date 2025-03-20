"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Label, Tooltip } from "recharts";

interface ScoreChartProps {
  currentScore: number; // Score out of 15
}

const ScoreChart: React.FC<ScoreChartProps> = ({ currentScore }) => {
  const maxScore = 15;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Data for Pie Chart
  const chartData = [
    { name: "Achieved", value: currentScore, fill: "#3b82f6" }, // Blue for achieved score
    { name: "Remaining", value: maxScore - currentScore, fill: "#d1d5db" }, // Grey for remaining
  ];

  return (
    <div className="flex flex-col items-center">
      <PieChart width={250} height={250}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={90}
          strokeWidth={2}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {currentScore}/15
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
        <Tooltip />
      </PieChart>
      <p className="mt-2 text-sm text-gray-600">Your Current Score</p>
    </div>
  );
};

export default ScoreChart;
