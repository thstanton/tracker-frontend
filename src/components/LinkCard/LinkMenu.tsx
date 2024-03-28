"use client";
import { IoMenu, IoPencilOutline, IoTrash } from "react-icons/io5";
import { Destination } from "../../../@types/tracker-types";
import { handleDeleteLink } from "./actions";
import { redirect } from "next/navigation";
import Link from "next/link";

interface LinkMenuProps {
  link: Destination;
}

export default function LinkMenu({ link }: LinkMenuProps) {
  return (
    <details className="dropdown dropdown-end relative">
      <summary className="btn btn-circle btn-outline btn-sm">
        <IoMenu />
      </summary>
      <ul className="menu dropdown-content z-[1] rounded-box bg-base-100 p-2 shadow">
        <li>
          <Link href={`/edit/link/${link.id}`}>
            <button className="flex items-center gap-2">
              <IoPencilOutline /> Edit
            </button>
          </Link>
        </li>
        <li>
          <button onClick={() => handleDeleteLink(link.id)}>
            <IoTrash /> Delete
          </button>
        </li>
      </ul>
    </details>
  );
}
