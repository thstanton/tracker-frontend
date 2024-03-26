"use client";
import { IoMenu, IoPencilOutline, IoTrash } from "react-icons/io5";
import { Destination } from "../../../@types/tracker-types";
import { handleDeleteLink } from "./actions";

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
          <button>
            <IoPencilOutline /> Edit
          </button>
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
