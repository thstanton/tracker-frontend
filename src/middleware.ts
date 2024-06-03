import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./lib/auth/authService";

export async function middleware(request: NextRequest) {
  "use server";
  const token = request.nextUrl.searchParams.get("token");
  if (token) {
    const response = NextResponse.redirect(new URL("/links", request.url));
    response.cookies.set("token", token);
    return response;
  }
  if (!isAuthenticated()) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/clicks", "/links"],
};
