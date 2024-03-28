"use server";

import { logout } from "@/lib/auth/auth.service";

export async function handleLogout() {
    return logout();
  }