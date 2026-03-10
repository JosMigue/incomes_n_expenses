import { auth } from "@/app/lib/db/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { pathname } = req.nextUrl

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/user/profile/:path*",
    "/api/incomes/:path*",
    "/api/expenses/:path*",
  ],
}