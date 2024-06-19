import Link from "next/link";
import { Destination } from "../../../../@types/tracker-types";
import LinkMenu from "./LinkMenu";
import DisplayQRCode from "./DisplayQRCode";
import LinkActions from "./LinkActions";
import Card from "@/components/Card";

interface LinkCardProps {
  link: Destination;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    // TODO: Add recent clicks
    // TODO: Link to clicks should filter clicks
    <Card key={link.id}>
      <div className="card-body text-neutral">
        <div className="flex justify-between">
          <h2 className="font-zen text-xl font-medium">{link.name}</h2>
          <LinkMenu link={link} />
        </div>
        <p className="text-sm font-semibold">cliki.in/{link.slug}</p>
        <Link href={link.url} className="text-sm">
          {link.url.length > 50 ? link.url.slice(0, 50) + "..." : link.url}
        </Link>
        <Link href="/clicks">
          <p>
            <span className="badge badge-neutral">{link._count?.clicks}</span>{" "}
            clicks
          </p>
        </Link>
        <div className="divider"></div>
        <LinkActions slug={link.slug} name={link.name} />
      </div>
    </Card>
  );
}
