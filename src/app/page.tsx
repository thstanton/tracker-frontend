import { fetchLinks } from "@/lib/api/api.service";
import { isAuthenticated } from "@/lib/auth/auth.service";
import LoginForm from "@/components/LoginForm";
import LinkCard from "@/components/LinkCard/LinkCard";
import CreateLinkForm from "@/components/CreateLink/CreateLinkForm";

export default async function Home() {
  const links = isAuthenticated() ? await fetchLinks() : undefined;
  return (
    <main className="flex flex-col items-center justify-center">
      {isAuthenticated() ? (
        <div>
          <CreateLinkForm />
          {links?.map((link) => <LinkCard key={link.id} link={link} />)}
        </div>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}
