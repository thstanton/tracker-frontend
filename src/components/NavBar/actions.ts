"use server";

import { logout } from "@/lib/auth/authService";

export async function handleLogout() {
  return logout();
}
