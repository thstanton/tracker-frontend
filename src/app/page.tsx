import { isAuthenticated } from "@/lib/auth/auth.service";
import { redirect } from "next/navigation";

export default async function Home() {
  isAuthenticated() ? redirect("/links") : redirect("/login");
  return <div>page</div>;
}
