
import { PieChart, Pie, Label, Tooltip } from "recharts";

interface ScoreChartProps {
  currentScore: number;
  maxScore?: number
}

const ScoreChart: React.FC<ScoreChartProps> = ({ currentScore, maxScore = 15 }) => {
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
            position="center"
            content={() => (
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-bluePurple text-3xl font-bold"
              >
                {currentScore}/{maxScore}
              </text>
            )}
          />
        </Pie>
        <Tooltip />
      </PieChart>
      <p className="mt-2 text-sm text-bluePurple">Your Current Score</p>
    </div>
  );
};

export default ScoreChart;
