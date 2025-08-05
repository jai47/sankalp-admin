// const { NextResponse, NextRequest } = require('next/server');

// export function middleware(req) {
//     const url = req.nextUrl.clone();
//     const host = req.headers.get('host');
//     const subdomain = host?.split('.')[0];
//     console.log({ url, host, subdomain });
//     console.log('Triggered by:', req.nextUrl.pathname);
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/((?!api|_next|favicon.ico|static|images|fonts).*)'],
// };

import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
};
