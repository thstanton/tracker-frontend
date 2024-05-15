import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated, storeToken } from "./lib/auth/auth.service";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!isAuthenticated() && token) {
    storeToken(token);
    return NextResponse.redirect(new URL("/links", request.url));
  }
  if (!isAuthenticated()) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/clicks", "/links"],
};
