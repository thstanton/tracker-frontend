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
  return (
    // TODO: Fix x-axis labels (cut-off on right), fix y-axis labels (integers only), apply time period filter to table as well as chart
    <div>
      <ResponsiveContainer width="100%" height={300} className={"mb-3 w-full"}>
        <LineChart width={500} height={300} data={chartData}>
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
          />
          <YAxis
            className="font-zen text-xs text-stone-500"
            dataKey="count"
            allowDecimals={false}
          />
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
