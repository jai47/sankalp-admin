import SectionRenderer from '@/components/Dashboard/SectionRenderer';
import Footer from '@/components/Footer/Footer';
import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

const page = async () => {
    const session = await auth();
    return (
        <>
            <div className="w-screen h-fit mt-18 flex flex-col items-center">
                <div className="w-3/5">
                    <h1 className="text-4xl font-medium mt-10">
                        Account Settings
                    </h1>
                    <div>
                        <SectionRenderer />
                    </div>
                </div>
            </div>
            <div className="w-full h-fit relative mt-36">
                <div className="absolute inset-0 -top-20 w-full overflow-hidden transform -scale-x-100">
                    <svg
                        className="w-full h-20"
                        viewBox="0 0 1440 100"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#facc15"
                            d="M0,40 C400,100 1000,0 1440,60 L1440,100 L0,100 Z"
                        ></path>
                    </svg>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
