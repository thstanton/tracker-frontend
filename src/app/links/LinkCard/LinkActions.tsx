"use client";

import { useState } from "react";
import { IoCopyOutline, IoQrCodeOutline } from "react-icons/io5";
import DisplayQRCode from "./DisplayQRCode";
import { copyLink } from "@/lib/utils/copyLink";

interface LinkActionsProps {
  slug: string;
  name: string;
}

export default function LinkActions({ slug, name }: LinkActionsProps) {
  const [identifier, setIdentifier] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  function handleModal() {
    const modal = document.getElementById(
      `qr-code-modal-${slug}`,
    ) as HTMLDialogElement;
    modal?.showModal();
  }

  async function handleCopy() {
    await copyLink(identifier, slug);
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
        <div className="btn btn-outline" onClick={handleModal}>
          <IoQrCodeOutline />
        </div>
      </div>
      <p aria-live="polite" className="text-right text-sm">
        {copySuccess ? "Link copied to clipboard" : ""}
      </p>
      <DisplayQRCode slug={slug} name={name} identifier={identifier} />
    </>
  );
}
