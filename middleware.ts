import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const subdomainMap = {
  training: "/training",
  materials: "/materials",
  books: "/books",
  admin: "/admin"
} as const;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0];
  const path = request.nextUrl.pathname;

  if (
    path.startsWith("/_next") ||
    path.startsWith("/api") ||
    path.includes(".") ||
    hostname === "localhost"
  ) {
    return NextResponse.next();
  }

  const parts = hostname.split(".");

  if (parts.length > 2) {
    const subdomain = parts[0] as keyof typeof subdomainMap;
    const basePath = subdomainMap[subdomain];

    if (basePath && !path.startsWith(basePath)) {
      const url = request.nextUrl.clone();
      url.pathname = `${basePath}${path === "/" ? "" : path}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
