"use client";

import dynamic from "next/dynamic";
import { LineChart, XAxis, Tooltip, Legend, Line } from "recharts";

interface ChartProps {
  data: { name: string; score: number; percentile: number }[];
}

const DynamicLineChart = dynamic(() => import("recharts").then((mod) => mod.LineChart), { ssr: false });


const CustomChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="p-4 rounded-lg">
      
        <DynamicLineChart width={500} height={300} data={data} margin={{ top: 24, right: 24, left: 24, bottom: 24 }}>
          <XAxis dataKey="score" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="percentile" stroke="#82ca9d" strokeWidth={2} />
        </DynamicLineChart>
      
    </div>
  );
};

export default CustomChart;
