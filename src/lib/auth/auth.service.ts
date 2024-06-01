import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function register(
  username: string,
  email: string,
  password: string,
) {
  "use server";
  try {
    const response = await fetch(`${process.env.API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (response.ok) {
      const { access_token, userId } = await response.json();
      cookies().set({
        name: "token",
        value: access_token,
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 24 * 30),
      });
    } else {
      const error = await response.json();
      console.log(error);
      return {
        message:
          error.statusCode === 409
            ? "A user with this email address already exists"
            : "Something went wrong",
      };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
  redirect("/links");
}

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
      const { access_token } = await response.json();
      storeToken(access_token);
    } else {
      const error = await response.json();
      console.log(error);
      return {
        message: "Invalid username or password",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Something went wrong",
    };
  }
  redirect("/links");
}

export async function validateEmail(destination: string) {
  "use server";
  const response = await fetch(`${process.env.AUTH_URL}/magic-link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ destination }),
  });
  const json = await response.json();
  if (response.status === 201) {
    redirect("/login/check-email");
  } else if (response.status === 401) {
    redirect("/register");
  } else if (response.status === 400) {
    return {
      message: "Invalid email address",
    };
  } else {
    console.log(json);
    return {
      message: "Something went wrong 1",
    };
  }
}

export async function storeToken(token: string) {
  "use server";
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60 * 24 * 30),
  });
}

export async function logout() {
  cookies().delete("token");
  redirect("/login");
}

export function getToken() {
  return cookies().get("token")?.value;
}

export function isAuthenticated() {
  return !!getToken();
}
