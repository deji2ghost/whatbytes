"use client";

import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { TrendingUp } from "lucide-react";

interface ChartProps {
  data: { name: string; score: number; percentile: number }[];
  xAxisKey: "name";
  yAxisKey: "score" | "percentile";
  title: string;
  description: string;
  footerText?: string;
}

const CustomChart: React.FC<ChartProps> = ({ data, xAxisKey, yAxisKey, title, description, footerText }) => {
  return (
    <div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div>
        <LineChart width={500} height={300} data={data} margin={{ top: 24, right: 24, left: 24, bottom: 24 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="percentile" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </div>
      {footerText && (
        <div className="flex items-center gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            {footerText} <TrendingUp className="h-4 w-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomChart;