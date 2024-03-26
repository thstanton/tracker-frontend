"use server";
import { createLink } from "@/lib/api/api.service";
import { revalidatePath } from "next/cache";

export async function handleCreateLink(formData: FormData) {
  const name = formData.get("name")?.toString();
  const url = formData.get("url")?.toString();
  const slug = formData.get("slug")?.toString();
  if (!name || !url || !slug) {
    throw new Error("Name, URL, and slug are required");
  }
  const newLink = await createLink({ name, url, slug });
  if (newLink) {
    revalidatePath("/");
  }
}
