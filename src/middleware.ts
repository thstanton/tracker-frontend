import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthenticated } from './lib/auth/auth.service'
 
export function middleware(request: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/clicks', '/links']
}