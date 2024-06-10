import { Click } from "../../../@types/tracker-types";

interface MobileClickTableProps {
  clicks: Click[] | undefined;
  className?: string;
}

interface MobileClickProps {
  click: Click;
}

export default function MobileClickTable({
  clicks,
  className,
}: MobileClickTableProps) {
  return (
    <div className={`flex w-full flex-col ${className}`}>
      {clicks?.map((click) => <MobileClick key={click.id} click={click} />)}
    </div>
  );
}

function MobileClick({ click }: MobileClickProps) {
  return (
    <div className="mt-3 border-b-[1px] border-solid border-stone-400 font-sans text-neutral">
      <div className="mb-3">
        <p className="text-sm font-light">
          {!click.isRead && <span className="badge badge-warning badge-xs" />}
          {new Date(click.createdAt).toLocaleString("en-GB")}
        </p>
        <p className="font-semibold">{click.destination.name}</p>
        <p className="text-sm text-stone-500">{click.destination.url}</p>
      </div>
      <div className="mb-3 flex justify-between">
        <p>IP: {click.ipAddress}</p>
        <p className={click.identifier && `badge-base-100 badge border-none`}>
          {click.identifier?.name}
        </p>
      </div>
    </div>
  );
}
