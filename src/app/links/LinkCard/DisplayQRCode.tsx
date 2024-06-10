"use client";
import { QRCodeSVG } from "qrcode.react";

interface DisplayQRCodeProps {
  slug: string;
  name: string;
  identifier?: string;
}

export default function DisplayQRCode({
  slug,
  name,
  identifier,
}: DisplayQRCodeProps) {
  return (
    <dialog id={`qr-code-modal-${slug}`} className="modal">
      <div className="modal-box flex min-h-96 flex-col items-center justify-center gap-3 text-stone-800">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <QRCodeSVG
          value={`${process.env.NEXT_PUBLIC_LINK_URL}/${slug}${identifier ? `?id=${identifier}` : ""}`}
          bgColor="#d6d3d1"
          fgColor="#1c1917"
          size={250}
          imageSettings={{
            src: `${process.env.NEXT_PUBLIC_ADMIN_URL}/cliki-icon.svg`,
            height: 50,
            width: 50,
            excavate: true,
          }}
        />
        <h3 className="font-sans text-sm">cliki.in/{slug}</h3>
      </div>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
    </dialog>
  );
}
