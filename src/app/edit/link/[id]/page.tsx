import LinkForm from "@/app/links/LinkCard/CreateLink/LinkForm";
import { fetchLink } from "@/lib/api/apiService";

interface EditLinkPageProps {
  params: {
    id: string;
  };
}

export default async function page({ params }: EditLinkPageProps) {
  const { id } = params;
  const link = await fetchLink(parseInt(id));

  return (
    <div>
      <LinkForm link={link} />
    </div>
  );
}
