'use client';
import { useSession } from 'next-auth/react';
import React from 'react';

const EditCollegeDetails = () => {
    const { data: session } = useSession();

    return (
        <>
            <div>
                <h1 className="text-2xl font-light tracking-widest mb-2">
                    My Institute
                </h1>
                <p className="text-sm font-extralight text-gray-500 mb-4">
                    Edit your institute details in this section
                </p>
            </div>
            <span className="h-[1px] w-full bg-gray-200 block" />
            <div>
                <h2 className="text-xl font-light tracking-widest mt-4 mb-2">
                    Primary Details
                </h2>
                <p className="text-sm font-extralight text-gray-500 mb-4">
                    Update your institute information.
                </p>
                <form className="flex flex-wrap justify-between gap-4">
                    <div className="w-[48%]">
                        <p className="text-sm font-extralight text-gray-500 mb-4">
                            Institute Name
                        </p>
                        <input
                            type="text"
                            className="outline-none border p-2 w-full"
                        />
                    </div>

                    <div className="w-[48%]">
                        <p className="text-sm font-extralight text-gray-500 mb-4">
                            Address
                        </p>
                        <input
                            type="text"
                            className="outline-none border p-2 w-full"
                        />
                    </div>

                    <div className="w-[48%]">
                        <p className="text-sm font-extralight text-gray-500 mb-4">
                            Phone
                        </p>
                        <input
                            type="text"
                            className="outline-none border p-2 w-full"
                        />
                    </div>
                    <div className="w-[48%]">
                        <p className="text-sm font-extralight text-gray-500 mb-4">
                            Phone
                        </p>
                        <input
                            type="text"
                            className="outline-none border p-2 w-full"
                        />
                    </div>
                    <div className="w-[48%]">
                        <p className="text-sm font-extralight text-gray-500 mb-4">
                            Phone
                        </p>
                        <input
                            type="text"
                            className="outline-none border p-2 w-full"
                        />
                    </div>
                    <div className="w-full flex justify-end items-center mb-4">
                        <div className="flex gap-5">
                            <button className="cursor-pointer hover:text-red-400">
                                Discard
                            </button>
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black text-md font-light px-3 py-2 border hover:bg-black hover:text-white duration-200 cursor-pointer"
                            >
                                Update Info
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <span className="h-[1px] w-full bg-gray-200 block" />

            <div className="mb-4">
                <h1 className="text-xl font-light tracking-widest mb-2 mt-4">
                    Login info
                </h1>
                <p className="text-sm font-extralight text-gray-500 mb-4">
                    View and update your login email and password.
                </p>
                <div>
                    <h3 className="text-sm font-extralight">Login email:</h3>
                    <p className="text-sm font-extralight text-gray-500 mb-4">
                        {session?.user?.email}
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-extralight mb-2">Password:</h3>
                    <div className="flex gap-1 animate-bounce">
                        <span className="w-2 h-2 bg-black rounded-full block" />
                        <span className="w-2 h-2 bg-black rounded-full block" />
                        <span className="w-2 h-2 bg-black rounded-full block" />
                        <span className="w-2 h-2 bg-black rounded-full block" />
                        <span className="w-2 h-2 bg-black rounded-full block" />
                        <span className="w-2 h-2 bg-black rounded-full block" />
                    </div>

                    <button
                        type="submit"
                        className="bg-red-400 text-white text-md font-light px-2 py-1 hover:bg-black hover:text-white duration-200 cursor-pointer mt-9"
                    >
                        Change password
                    </button>
                </div>
            </div>
            <span className="h-[1px] w-full bg-gray-200 block" />
        </>
    );
};

export default EditCollegeDetails;
