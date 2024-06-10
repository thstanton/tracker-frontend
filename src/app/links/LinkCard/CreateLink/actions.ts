"use server";
import { createLink, updateLink } from "@/lib/api/apiService";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const newSchema = z.object({
  name: z.string().min(1, "Please enter a name"),
  url: z
    .string({
      required_error: "URL is required",
    })
    .url("Please enter a valid URL"),
});

const updateSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1),
  url: z
    .string({
      required_error: "URL is required",
    })
    .url("Please enter a valid URL"),
  id: z.string({
    required_error: "Something went wrong",
  }),
});

export async function handleCreateLink(formData: FormData) {
  const result = newSchema.safeParse({
    name: formData.get("name"),
    url: formData.get("url"),
  });

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors.map((error) => error.message).join(", "),
    };
  }
  const { name, url } = result.data;
  const newLink = await createLink({ name, url });
  if (newLink) {
    revalidatePath("/links");
    return { success: true, message: "Link created" };
  }
  return { success: false, message: "Something went wrong" };
}

export async function handleUpdateLink(formData: FormData) {
  const result = updateSchema.safeParse({
    name: formData.get("name"),
    url: formData.get("url"),
    id: formData.get("id"),
  });

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors.map((error) => error.message).join(", "),
    };
  }
  const { name, url, id } = result.data;
  const updatedLink = await updateLink({ id, name, url });
  if (updatedLink) {
    revalidatePath("/links");
    return { success: true, message: "Link updated" };
  }
  return { success: false, message: "Something went wrong" };
}
