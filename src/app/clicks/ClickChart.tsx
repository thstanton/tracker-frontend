"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData } from "../../../@types/tracker-types";
import { useState } from "react";

interface ClickChartProps {
  chartData: ChartData[] | undefined;
}

export default function ClickChart({ chartData }: ClickChartProps) {
  const [filteredData, setFilteredData] = useState<ChartData[]>(
    chartData?.slice(0, 7) || [],
  );

  return (
    <div>
      <select
        className="select select-bordered mb-3 max-w-xs"
        onChange={(e) =>
          setFilteredData(chartData?.slice(0, parseInt(e.target.value)) || [])
        }
      >
        <option value="7">7 days</option>
        <option value="14">14 days</option>
        <option value="28">28 days</option>
        <option value="90">90 days</option>
        <option value="365">365 days</option>
      </select>
      <ResponsiveContainer width="100%" height={300} className={"mb-3"}>
        <LineChart width={500} height={300} data={filteredData}>
          <CartesianGrid vertical={false} />
          <Line type="monotone" dataKey="count" stroke="#8884d8" dot={false} />
          <XAxis
            className="font-zen text-xs text-stone-500"
            dataKey="date"
            tickFormatter={(tick) =>
              new Date(tick).toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
              })
            }
            tickMargin={10}
            interval={"equidistantPreserveStart"}
            reversed
          />
          <YAxis className="font-zen text-xs text-stone-500" dataKey="count" />
          <Tooltip
            labelFormatter={(date) =>
              new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
