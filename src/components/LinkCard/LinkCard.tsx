import Link from "next/link";
import { Destination } from "../../../@types/tracker-types";
import CopyLink from "./CopyLink";
import LinkMenu from "./LinkMenu";

interface LinkCardProps {
  link: Destination;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <div key={link.id} className="card card-bordered border-neutral mb-3">
      <div className="card-body text-neutral">
        <div className="flex justify-between">
          <h2 className="text-xl font-zen font-semibold">{link.name}</h2>
          <LinkMenu link={link} />
        </div>
        <p className="text-sm font-semibold">
          localhost:3000/link/{link.userId}/{link.slug}
        </p>
        <Link href={link.url} className="text-sm">
          {link.url}
        </Link>
        <p>
          <span className="badge badge-neutral">{link._count?.clicks}</span>{" "}
          clicks
        </p>
        <div className="divider"></div>
        <CopyLink slug={link.slug} userId={link.userId} />
      </div>
    </div>
  );
}
