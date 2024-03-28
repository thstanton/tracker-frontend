import ClickChart from "@/components/ClickChart/ClickChart";
import ClickTable from "@/components/ClickTable/ClickTable";
import {
  fetchChartData,
  fetchClicks,
  fetchIdentifiers,
  fetchLinks,
} from "@/lib/api/api.service";

interface ClickPageProps {
  searchParams: {
    slug: string;
    id: string;
  };
}

export default async function page({ searchParams }: ClickPageProps) {
  const clicks = await fetchClicks();
  const chartData = await fetchChartData();
  const links = await fetchLinks();
  const identifiers = await fetchIdentifiers();

  return (
    <div>
      <ClickChart chartData={chartData} />
      <div className="divider"></div>
      <ClickTable clicks={clicks} links={links} identifiers={identifiers} />
    </div>
  );
}
