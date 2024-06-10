"use client";
import { useState, useMemo } from "react";
import {
  ChartData,
  Click,
  Destination,
  Identifier,
} from "../../../@types/tracker-types";
import ClickChart from "./ClickChart";
import ClickTable from "./ClickTable";
import MobileClickTable from "./MobileClickTable";
import { fetchChartData } from "@/lib/api/apiService";

interface ClickAnalyticsProps {
  clicks: Click[] | undefined;
  links: Destination[] | undefined;
  identifiers: Identifier[] | undefined;
  initialChartData: ChartData[] | undefined;
}

export default function ClickAnalytics({
  clicks,
  links,
  identifiers,
  initialChartData,
}: ClickAnalyticsProps) {
  const [chartData, setChartData] = useState<ChartData[] | undefined>(
    initialChartData,
  );
  const [dateFilter, setDateFilter] = useState(7);
  const [linkFilter, setLinkFilter] = useState(0);
  const [identifierFilter, setIdentifierFilter] = useState(0);
  const filteredClicks = useMemo(
    () =>
      clicks?.filter(
        (click) =>
          (linkFilter === click.destinationId || linkFilter === 0) &&
          (identifierFilter === click.identifierId || identifierFilter === 0) &&
          new Date(click.createdAt).getTime() >
            Date.now() - dateFilter * 24 * 60 * 60 * 1000,
      ),
    [clicks, linkFilter, identifierFilter, dateFilter],
  );

  const filteredChartData = useMemo(
    () => chartData?.slice(chartData.length - dateFilter),
    [chartData, dateFilter],
  );

  async function handleLinkFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    const filteredChartData = await fetchChartData(parseInt(e.target.value));
    setChartData(filteredChartData);
    setLinkFilter(parseInt(e.target.value));
  }
  async function handleIdentifierFilter(
    e: React.ChangeEvent<HTMLSelectElement>,
  ) {
    setIdentifierFilter(parseInt(e.target.value));
  }
  function handleDateFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setDateFilter(parseInt(e.target.value));
  }

  return (
    <div className="w-full">
      <select
        className="select select-bordered mb-3 max-w-xs"
        onChange={handleDateFilter}
      >
        <option value="7">7 days</option>
        <option value="14">14 days</option>
        <option value="28">28 days</option>
        <option value="90">90 days</option>
        <option value="365">365 days</option>
      </select>
      <ClickChart chartData={filteredChartData} />

      <div className="divider"></div>

      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-evenly">
        <div className="flex items-center gap-2">
          <label className="text-sm">Filter link:</label>
          <select
            className="select select-bordered select-sm"
            onChange={handleLinkFilter}
          >
            <option value="0">All</option>
            {links?.map((link) => (
              <option key={link.id} value={link.id}>
                {link.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Filter identifier:</label>
          <select
            className="select select-bordered select-sm"
            onChange={handleIdentifierFilter}
          >
            <option value="0">All</option>
            {identifiers?.map((identifier) => (
              <option key={identifier.id} value={identifier.id}>
                {identifier.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <MobileClickTable clicks={filteredClicks} className="lg:hidden" />
      <ClickTable clicks={filteredClicks} className="hidden lg:block" />
    </div>
  );
}
