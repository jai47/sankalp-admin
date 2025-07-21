import Navbar from '@/components/Pricing/Navbar';
import '@/app/globals.css';

export const metadata = {
    title: 'Pricing - My App',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
