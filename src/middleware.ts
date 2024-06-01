import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated, storeToken } from "./lib/auth/auth.service";

export async function middleware(request: NextRequest) {
  "use server";
  const token = request.nextUrl.searchParams.get("token");
  console.log(token);
  if (token) {
    const response = NextResponse.redirect(new URL("/links", request.url));
    response.cookies.set("token", token);
    console.log("Attempting to store token");
    return response;
  }
  if (!isAuthenticated()) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/clicks", "/links"],
};
