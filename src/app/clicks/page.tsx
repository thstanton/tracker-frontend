import {
  fetchChartData,
  fetchClicks,
  fetchIdentifiers,
  fetchLinks,
} from "@/lib/api/api.service";
import ClickAnalytics from "./ClickAnalytics";

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
    <ClickAnalytics
      clicks={clicks}
      links={links}
      identifiers={identifiers}
      chartData={chartData}
    />
  );
}
