"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { XAxis, Tooltip, Legend, Line } from "recharts";

interface ChartProps {
  data: { name: string; score: number; percentile: number }[];
  ticks: number[];
  domain: number[];
  color: string
}

const DynamicLineChart = dynamic(
  () => import("recharts").then((mod) => mod.LineChart),
  { ssr: false }
);

const CustomChart: React.FC<ChartProps> = ({ data, ticks, domain, color }) => {
  const [chartWidth, setChartWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      setChartWidth(window.innerWidth < 768 ? 300 : 500);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [chartWidth]);

  return (
    <div className="p-4 rounded-lg">
      <DynamicLineChart
        width={chartWidth}
        height={300}
        data={data}
        margin={{ top: 24, right: 24, left: 24, bottom: 24 }}
      >
        <XAxis
          dataKey="score"
          type="number"
          domain={domain}
          ticks={ticks}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="percentile"
          stroke={color}
          strokeWidth={2}
        />
      </DynamicLineChart>
    </div>
  );
};

export default CustomChart;
