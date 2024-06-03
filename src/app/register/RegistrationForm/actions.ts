"use server";

import { register } from "@/lib/auth/authService";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Please enter a valid email address",
    })
    .email("Please enter a valid email address")
    .min(1),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string({
      required_error: "Please confirm your password",
    })
    .min(1),
});

export async function handleSubmit(prevState: any, formData: FormData) {
  "use server";
  const result = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!result.success) {
    return {
      message: result.error.errors.map((error) => error.message).join(", "),
    };
  }

  if (result.success && result.data.password !== result.data.confirmPassword) {
    return {
      message: "Passwords do not match",
    };
  }

  const { email, password } = result.data;

  return register(email, password);
}
