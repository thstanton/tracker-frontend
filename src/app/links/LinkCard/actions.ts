"use server";

import { deleteLink } from "@/lib/api/apiService";
import { revalidatePath } from "next/cache";

export async function handleDeleteLink(id: number) {
  await deleteLink(id);
  revalidatePath("/");
}
