import { NextResponse, type NextRequest } from 'next/server';

const gone = /^\/services\/best-software-agency-(mumbai|hyderabad|pune|chennai|chandigarh|delhi)$/;

export function middleware(request: NextRequest) {
  if (gone.test(request.nextUrl.pathname)) return new NextResponse('Gone', { status: 410 });
  return NextResponse.next();
}

export const config = { matcher: ['/services/:path*'] };
