import '@/app/globals.css';
import { SessionProvider } from 'next-auth/react';
// import { auth } from '@/auth';
// import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Pricing - My App',
};

export default async function RootLayout({ children }) {
    // const session = await auth();

    // if (session) {
    //     redirect('/');
    //     return (
    //         <html lang="en">
    //             <body>{/* Optional: loading UI */}</body>
    //         </html>
    //     );
    // }
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
