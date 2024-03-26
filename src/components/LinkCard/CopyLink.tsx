"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

interface CopyLinkProps {
  slug: string;
  userId: number;
}

export default function CopyLink({ slug, userId }: CopyLinkProps) {
  const [identifier, setIdentifier] = useState("");
  async function handleCopy() {
    await navigator.clipboard.writeText(
      identifier.length
        ? `tracktr.io/${userId}/${slug}/?id=${identifier}`
        : `tracktr.io/${userId}/${slug}`,
    );
  }
  return (
    <>
    <label className="text-xs" htmlFor="identifier">Add an identifier & copy</label>
    <div className="flex gap-2">
      <input
        type="text"
        name="identifier"
        placeholder="Add Identifier"
        className="input input-bordered w-full"
        onChange={(e) => setIdentifier(e.target.value)}
        value={identifier}
      />
      <div className="btn btn-outline" onClick={handleCopy}>
        <IoCopyOutline />
      </div>
    </div>
    </>
  );
}
