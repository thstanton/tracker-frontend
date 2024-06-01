"use server";
import { validateEmail } from "@/lib/auth/auth.service";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    required_error: "Email is required",
  }),
});

export async function handleSubmit(prevState: any, formData: FormData) {
  "use server";
  const result = schema.safeParse({
    email: formData.get("email"),
  });
  if (!result.success) {
    return {
      message: result.error.errors.map((error) => error.message).join(", "),
    };
  }
  const { email } = result.data;
  return validateEmail(email);
}
