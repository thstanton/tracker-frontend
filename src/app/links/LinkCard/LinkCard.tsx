import Link from "next/link";
import { Destination } from "../../../../@types/tracker-types";
import CopyLink from "./CopyLink";
import LinkMenu from "./LinkMenu";

interface LinkCardProps {
  link: Destination;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <div key={link.id} className="card card-bordered mb-3 border-neutral">
      <div className="card-body text-neutral">
        <div className="flex justify-between">
          <h2 className="font-zen text-xl font-medium">{link.name}</h2>
          <LinkMenu link={link} />
        </div>
        <p className="text-sm font-semibold">
          cliki.up.railway.app/link/{link.userId}/{link.slug}
        </p>
        <Link href={link.url} className="text-sm">
          {link.url}
        </Link>
        <Link href="/clicks">
          <p>
            <span className="badge badge-neutral">{link._count?.clicks}</span>{" "}
            clicks
          </p>
        </Link>
        <div className="divider"></div>
        <CopyLink slug={link.slug} userId={link.userId} />
      </div>
    </div>
  );
}
