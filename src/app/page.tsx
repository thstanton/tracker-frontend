import { redirect } from "next/navigation";

interface HomePageProps {
  searchParams: {
    token?: string;
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  return redirect("/links");
}
