// Next
import { NextResponse } from "next/server";

// Authentication
import { auth } from "@/auth";

// Types
import type { NextRequest } from "next/server";

// ========================================================================================================

export default async function myMiddleware(request: NextRequest) {
  //============================================
  //  Session
  //============================================
  const session = await auth();
  const role = session?.user?.role;
  // console.log("session", session);

  //============================================
  //  Paths
  //============================================
  const url = request.nextUrl.clone();
  const isProtectedRoute = url.pathname.startsWith("/admin");
  const isAlreadyLogedIn = url.pathname.startsWith("/signin");

  // ============================================
  // Redirects from /signin to / if logged in
  // ============================================
  if (session && isAlreadyLogedIn) {
    url.pathname = "/";
    console.log("Redirect: Logged-in user trying to access login page");
    return NextResponse.redirect(url);
  }

  //============================================
  //  Admin Protected Routes
  //============================================
  if (isProtectedRoute) {
    if (role !== "admin") {
      url.pathname = "/";
      console.log("Redirect: Non-user trying to access user-specific page");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
