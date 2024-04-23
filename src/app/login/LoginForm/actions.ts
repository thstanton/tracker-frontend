"use server";
import { login } from "@/lib/auth/auth.service";
import { z } from "zod";

const schema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
});

export async function handleSubmit(prevState: any, formData: FormData) {
  "use server";
  const result = schema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  if (!result.success) {
    return {
      message: result.error.errors.map((error) => error.message).join(", "),
    };
  }
  const { username, password } = result.data;
  return login(username, password);
}
