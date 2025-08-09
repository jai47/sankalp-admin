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

// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { privateRoutes } from '../privateRoutes';

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    const { nextUrl } = req;

    const isLoggedIn = !!token;
    const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
    const isAuthRoute = nextUrl.pathname.startsWith('/auth');
    const isPublicRoute =
        !isPrivateRoute && isAuthRoute && !nextUrl.pathname.startsWith('/api');

    if (isPublicRoute) {
        // Redirect to login if trying to access a public route without being logged in
        return NextResponse.next();
    }

    if (isPrivateRoute && !isLoggedIn) {
        // Redirect to login if trying to access a private route without being logged in
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    if (isLoggedIn && isAuthRoute) {
        // Redirect to home if trying to access auth routes while logged in
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    console.log('URL:', nextUrl.pathname);
    console.log('Token:', token);
    console.log('User is logged in:', isLoggedIn);
    console.log('Is private route:', isPrivateRoute);
    console.log('Is auth route:', isAuthRoute);
    console.log('Is public route:', isPublicRoute);

    if (!token && nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
