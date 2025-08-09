'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { signIn } from 'next-auth/react';

const page = () => {
    const [isEmail, setIsEmail] = useState(false);
    const credientialAction = (FormData) => {
        const email = FormData.get('email');
        const password = FormData.get('password');
        if (!email || !password) {
            return;
        }

        fetch('/api/user/create', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div className="relative h-screen w-screen flex items-center justify-center bg-white font-extralight">
            <Link href="/" className="absolute top-6 right-6">
                <RxCross1 size={20} />
            </Link>
            <div className="w-1/5 h-fit">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <h1 className="text-5xl mb-2">Sign Up</h1>
                    <p>
                        Already a member?{' '}
                        <Link href="/auth/login" className="text-amber-600">
                            Login
                        </Link>
                    </p>
                </div>
                {isEmail ? (
                    <form action={credientialAction}>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            className="border-b border-gray-500 outline-none p-1 mb-4 w-full"
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            className="border-b border-gray-500 outline-none p-1 mb-4 w-full"
                        />
                        <button
                            type="submit"
                            className="w-full bg-amber-700 text-white py-2 cursor-pointer"
                        >
                            Sign In
                        </button>
                        <div>
                            <div className="flex items-center justify-between gap-4 my-4">
                                <span className="w-2/5 h-[1px] bg-gray-300 block" />
                                <span className="text-gray-500">or</span>
                                <span className="w-2/5 h-[1px] bg-gray-300 block" />
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <button
                                    onClick={() => signIn('google')}
                                    className="cursor-pointer"
                                >
                                    <FcGoogle size={30} />
                                </button>
                                <button className="cursor-pointer">
                                    <FaGithub size={30} />
                                </button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => signIn('google')}
                                className="border border-gray-300 flex justify-center items-center py-2 px-4 gap-4 cursor-pointer"
                            >
                                <FcGoogle size={30} />{' '}
                                <p>Sign up with Google</p>
                            </button>
                            <button className="border border-gray-300 bg-black text-white flex justify-center items-center py-2 px-4 gap-4 cursor-pointer mb-3">
                                <FaGithub size={30} />{' '}
                                <p>Sign up with GitHub</p>
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center justify-between gap-4 my-4">
                                <span className="w-2/5 h-[1px] bg-gray-300 block" />
                                <span className="text-gray-500">or</span>
                                <span className="w-2/5 h-[1px] bg-gray-300 block" />
                            </div>

                            <button
                                className="w-full border border-gray-300 flex justify-center items-center py-2 px-4 gap-4 cursor-pointer"
                                onClick={() => setIsEmail(true)}
                            >
                                Sign up with email
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;
