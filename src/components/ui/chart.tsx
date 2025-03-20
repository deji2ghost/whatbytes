
import dynamic from "next/dynamic";
import { XAxis, Tooltip, Legend, Line } from "recharts";

interface ChartProps {
  data: { name: string; score: number; percentile: number }[];
  ticks: number[];
  domain: number[];
  color: string
  chartWidth: number
}

const DynamicLineChart = dynamic(
  () => import("recharts").then((mod) => mod.LineChart),
  { ssr: false }
);

const CustomChart: React.FC<ChartProps> = ({ data, ticks, domain, color, chartWidth }) => {

  return (
    <div className="flex justify-center rounded-lg">
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
