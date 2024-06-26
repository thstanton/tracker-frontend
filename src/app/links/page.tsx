import LinkForm from "@/app/links/LinkCard/CreateLink/LinkForm";
import LinkCard from "@/app/links/LinkCard/LinkCard";
import { fetchLinks } from "@/lib/api/apiService";

export default async function page() {
  const links = await fetchLinks();
  return (
    <div className="flex flex-col gap-2">
      <LinkForm />
      {links?.map((link) => <LinkCard key={link.id} link={link} />)}
    </div>
  );
}
