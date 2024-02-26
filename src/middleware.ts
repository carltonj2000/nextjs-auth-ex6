import * as jose from "jose";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = cookies().get("Authorization");
  if (!cookie) return NextResponse.redirect(new URL("/login", request.url));

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const { payload } = await jose.jwtVerify(cookie.value, secret);
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/protected/:path*",
};
