"use server";
import { login } from "@/lib/auth/auth.service";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    required_error: "Email is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
});

export async function handleSubmit(prevState: any, formData: FormData) {
  "use server";
  const result = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!result.success) {
    return {
      message: result.error.errors.map((error) => error.message).join(", "),
    };
  }
  const { email, password } = result.data;
  return login(email, password);
}
