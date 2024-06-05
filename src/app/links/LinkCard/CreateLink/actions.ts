"use server";
import { createLink, updateLink } from "@/lib/api/apiService";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// ! TODO Add Zod validation and error handling

export async function handleCreateLink(formData: FormData) {
  const name = formData.get("name")?.toString();
  const url = formData.get("url")?.toString();
  if (!name || !url) {
    throw new Error("Name, URL, and slug are required");
  }
  const newLink = await createLink({ name, url });
  if (newLink) {
    revalidatePath("/");
  }
}

export async function handleUpdateLink(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const url = formData.get("url")?.toString();

  if (!id || !name || !url) {
    throw new Error("Name, URL, and slug are required");
  }
  const newLink = await updateLink({ id, name, url });
  if (newLink) {
    redirect("/links");
  }
}
