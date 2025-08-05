import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-screen flex items-center justify-around bg-[#fed7e2] z-50">
            <div className="flex items-center justify-center gap-3">
                <Image src="/logo.png" alt="Logo" width={60} height={60} />
                <div className="flex flex-col">
                    <p className="font-bold text-lg">
                        SHRK
                        <span className="text-yellow-500">.</span>
                    </p>
                    <p className="flex text-gray-500 text-xs gap-1">
                        <span>Communicate.</span>
                        <span>Collaborate.</span>
                        <span>Create.</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center text-md font-medium gap-8">
                <ul className="flex space-x-8 items-center font-extralight">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/#product" scroll={true}>
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing">Pricing Plans</Link>
                    </li>
                    <li>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
                <Link
                    href="/auth/login"
                    className="flex items-center justify-between gap-1 text-gray-500"
                >
                    <div className="relative w-6 h-6 bg-black border rounded-full mr-2 overflow-hidden">
                        <div className="absolute inset-0 top-[20%] left-[50%] translate-x-[-50%] w-2 h-2 bg-gray-100 rounded-full" />
                        <div className="absolute inset-0 top-[60%] left-[50%] translate-x-[-50%] w-4 h-4 bg-gray-100 rounded-full" />
                    </div>
                    <span>Login In</span>
                </Link>
                <Link
                    href="/pricing"
                    className="bg-yellow-400 p-2 border border-black rounded-md font-medium"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
