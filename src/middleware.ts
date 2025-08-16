import { authRequiredPathParamKey } from "containers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const jwt = req.cookies.get("__Host-access_token")?.value;

  // console.log("req.cookies: ", req.cookies)

  const isLoggedIn = !!jwt;
  const referrer = req.headers.get('referer');
  let referringPath = undefined
  if (referrer) {
    const url = new URL(referrer);
    url.searchParams.set(authRequiredPathParamKey, 'true');
    referringPath = url.pathname + url.search;
  }
  console.log("isLoggedIn: ", isLoggedIn, ", authRequired: ", referringPath)

  const isOnLogin = req.nextUrl.pathname.startsWith('/login');
  // const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard');
    if (isLoggedIn) {
      if (isOnLogin){
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }else{
      if (referringPath) {
        return NextResponse.redirect(new URL(referringPath, req.url));
      }else{
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

  return NextResponse.next();
}

export const config = {
 // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/start-your-build/:path*', '/dashboard/:path*', '/admin/:path*', '/login'], // Routes to protect
};
