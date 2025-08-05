'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const { data: session } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav className="fixed top-0 w-screen flex items-center justify-around bg-white z-50">
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
                {session ? (
                    <div className="relative" ref={dropdownRef}>
                        {session?.user?.image ? (
                            <img
                                src={session?.user?.image}
                                alt="Profile"
                                className="w-8 h-8 rounded-full cursor-pointer"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            />
                        ) : (
                            <div
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
                            >
                                <span>
                                    {session?.user?.email[0]?.toUpperCase()}
                                </span>
                            </div>
                        )}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 z-50">
                                <Link
                                    href="/dashboard?section=profile"
                                    className="block px-4 py-2 text-sm font-light hover:text-gray-500"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                    }}
                                >
                                    Account Settings
                                </Link>
                                <Link
                                    href="/dashboard?section=subscriptions"
                                    className="block px-4 py-2 text-sm font-light hover:text-gray-500"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                    }}
                                >
                                    My Subscriptions
                                </Link>
                                <div className="w-full flex items-center justify-center">
                                    <span className="w-4/5 block h-[1px] bg-gray-200 my-1" />
                                </div>
                                <button
                                    onClick={() => signOut()}
                                    className="w-full text-left px-4 py-2 text-sm font-light hover:text-red-400 cursor-pointer"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        href="/api/auth/signin"
                        className="flex items-center justify-between gap-1 text-gray-500"
                    >
                        <div className="relative w-6 h-6 bg-black border rounded-full mr-2 overflow-hidden">
                            <div className="absolute inset-0 top-[20%] left-[50%] translate-x-[-50%] w-2 h-2 bg-white rounded-full" />
                            <div className="absolute inset-0 top-[60%] left-[50%] translate-x-[-50%] w-4 h-4 bg-white rounded-full" />
                        </div>
                        <span>Login In</span>
                    </Link>
                )}
                <Link
                    href="/pricing"
                    className="bg-yellow-400 p-2 border border-black rounded-md font-medium hover:bg-black hover:text-white duration-100"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
