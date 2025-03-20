"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Label, Tooltip } from "recharts";

interface ScoreChartProps {
  currentScore: number;
}

const ScoreChart: React.FC<ScoreChartProps> = ({ currentScore }) => {
  const maxScore = 15;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const chartData = [
    { name: "Achieved", value: currentScore, fill: "#633CFF" }, 
    { name: "Remaining", value: maxScore - currentScore, fill: "#ddd" },
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
