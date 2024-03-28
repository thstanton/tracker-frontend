"use client";
import Link from "next/link";
import { Click, Destination, Identifier } from "../../../@types/tracker-types";
import { useState } from "react";

interface ClickTableProps {
  clicks: Click[] | undefined;
  links: Destination[] | undefined;
  identifiers: Identifier[] | undefined;
}

export default function ClickTable({
  clicks,
  links,
  identifiers,
}: ClickTableProps) {
  const [filteredClicks, setFilteredClicks] = useState<Click[] | undefined>(
    clicks,
  );

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value === "all") {
      setFilteredClicks(clicks);
    } else {
      const filtered = clicks?.filter((click) => click.destinationId === parseInt(value));
      setFilteredClicks(filtered);
    }
  }

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <label className="text-sm">Filter link:</label>
        <select className="select select-bordered select-sm" onChange={handleFilter}>
          <option value="all">All</option>
          {links?.map((link) => (
            <option key={link.id} value={link.id}>
              {link.name}
            </option>
          ))}
        </select>
        <label className="text-sm">Filter identifier:</label>
        <select className="select select-bordered select-sm" onChange={handleFilter}>
          <option value="all">All</option>
          {identifiers?.map((identifier) => (
            <option key={identifier.id} value={identifier.id}>
              {identifier.name}
            </option>
          ))}
        </select>
      </div>
      <table className="table table-lg w-full">
        <thead className="">
          <tr className="border-none">
            <th className="font-zen font-semibold text-stone-500">
              Date / Time
            </th>
            <th className="font-zen font-semibold text-stone-500">Link name</th>
            <th className="font-zen font-semibold text-stone-500">Link URL</th>
            <th className="font-zen font-semibold text-stone-500">
              IP Address
            </th>
            <th className="font-zen font-semibold text-stone-500">
              Identifier
            </th>
          </tr>
        </thead>
        <tbody className="border-neutral">
          {filteredClicks?.map((click) => (
            <tr key={click.id} className="border-stone-400 text-neutral">
              <td className="text-sm">
                {new Date(click.createdAt).toLocaleString()}
              </td>
              <td className="text-sm">{click.destination.name}</td>
              <td className="text-sm">
                <Link href={click.destination.url}>
                  {click.destination.url}
                </Link>
              </td>
              <td className="text-sm">{click.ipAddress}</td>
              <td className="text-sm">
                <span
                  className={
                    click.identifier && `badge-base-100 badge border-none`
                  }
                >
                  {click.identifier?.name}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
