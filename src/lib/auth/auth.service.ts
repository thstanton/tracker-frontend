import { cookies } from "next/headers";

export async function login(username: string, password: string) {
  "use server";
  try {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const { access_token, userId } = await response.json();
      cookies().set({ name: "token", value: access_token, httpOnly: true });
      return userId;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function logout() {
  return cookies().delete("token");
}

export function getToken() {
  return cookies().get("token")?.value;
}

export function isAuthenticated() {
  return !!getToken();
}
