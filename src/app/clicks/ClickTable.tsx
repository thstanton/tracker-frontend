"use client";
import Link from "next/link";
import { Click } from "../../../@types/tracker-types";

interface ClickTableProps {
  clicks: Click[] | undefined;
  className?: string;
}

interface ClickTableRowProps {
  click: Click;
}

export default function ClickTable({ clicks, className }: ClickTableProps) {
  return (
    <div className={`mb-10 ${className}`}>
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
          {clicks?.map((click) => (
            <ClickTableRow key={click.id} click={click} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ClickTableRow({ click }: ClickTableRowProps) {
  return (
    <tr key={click.id} className=" border-stone-400 text-neutral">
      <td className="flex items-center gap-2 text-sm">
        {!click.isRead && <span className="badge badge-warning badge-xs" />}
        {new Date(click.createdAt).toLocaleString("en-GB")}
      </td>
      <td className="text-sm">{click.destination.name}</td>
      <td className="text-sm">
        <Link href={click.destination.url}>{click.destination.url}</Link>
      </td>
      <td className="text-sm">{click.ipAddress}</td>
      <td className="text-sm">
        <span
          className={click.identifier && `badge-base-100 badge border-none`}
        >
          {click.identifier?.name}
        </span>
      </td>
    </tr>
  );
}
