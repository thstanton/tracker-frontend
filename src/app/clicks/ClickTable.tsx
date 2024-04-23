"use client";
import Link from "next/link";
import { Click } from "../../../@types/tracker-types";

interface ClickTableProps {
  clicks: Click[] | undefined;
}

export default function ClickTable({ clicks }: ClickTableProps) {
  return (
    <div className="mb-10">
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
