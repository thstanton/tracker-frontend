"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

interface CopyLinkProps {
  slug: string;
  userId: number;
}

export default function CopyLink({ slug }: CopyLinkProps) {
  const [identifier, setIdentifier] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  async function handleCopy() {
    await navigator.clipboard.writeText(
      identifier.length
        ? `${process.env.NEXT_PUBLIC_LINK_URL}/${slug}/?id=${identifier}`
        : `${process.env.NEXT_PUBLIC_LINK_URL}/${slug}`,
    );
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  }
  return (
    <>
      <label className="text-xs" htmlFor="identifier">
        Add an identifier & copy
      </label>
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
      <p aria-live="polite" className="text-right text-sm">
        {copySuccess ? "Link copied to clipboard" : ""}
      </p>
    </>
  );
}
