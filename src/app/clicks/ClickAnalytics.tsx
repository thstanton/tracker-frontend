"use client";
import { useState, useEffect } from "react";
import {
  ChartData,
  Click,
  Destination,
  Identifier,
} from "../../../@types/tracker-types";
import ClickChart from "./ClickChart";
import ClickTable from "./ClickTable";

interface ClickAnalyticsProps {
  clicks: Click[] | undefined;
  links: Destination[] | undefined;
  identifiers: Identifier[] | undefined;
  chartData: ChartData[] | undefined;
}

export default function ClickAnalytics({
  clicks,
  links,
  identifiers,
  chartData,
}: ClickAnalyticsProps) {
  const [filteredClicks, setFilteredClicks] = useState<Click[] | undefined>(
    clicks,
  );
  const [linkFilter, setLinkFilter] = useState(0);
  const [identifierFilter, setIdentifierFilter] = useState(0);

  function handleLinkFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setLinkFilter(parseInt(e.target.value));
  }
  function handleIdentifierFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setIdentifierFilter(parseInt(e.target.value));
  }

  useEffect(() => {
    function handleFilter() {
      const newFilteredClicks = clicks?.filter(
        (click) =>
          (linkFilter === click.destinationId || linkFilter === 0) &&
          (identifierFilter === click.identifierId || identifierFilter === 0),
      );
      setFilteredClicks(newFilteredClicks);
    }
    handleFilter();
  }, [linkFilter, identifierFilter, clicks]);

  return (
    <div>
      <ClickChart chartData={chartData} />

      <div className="divider"></div>

      <div className="flex items-center justify-evenly">
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

      <ClickTable clicks={filteredClicks} />
    </div>
  );
}
