import {
  fetchChartData,
  fetchClicks,
  fetchIdentifiers,
  fetchLinks,
  markAllAsRead,
} from "@/lib/api/apiService";
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
  await markAllAsRead();

  return (
    <ClickAnalytics
      clicks={clicks}
      links={links}
      identifiers={identifiers}
      initialChartData={chartData}
    />
  );
}
