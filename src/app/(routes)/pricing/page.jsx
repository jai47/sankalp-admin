import PricingPlans from '@/components/Pricing/PricingPlans';
import React from 'react';

const page = () => {
    return (
        <>
            <div className="relative w-screen h-80 bg-[#fed7e2] flex flex-col items-center justify-center">
                <h1 className="text-6xl font-light font-sans mb-8">
                    Explore our Pricing Plans
                </h1>
                <p className="text-md font-light font-sans mb-8">
                    Use this area to describe one of your memberships.
                </p>
            </div>
            <div className="relative w-screen h-screen bg-white flex items-center justify-center">
                <div className=" absolute top-0 h-20 w-full -scale-y-100 overflow-hidden z-0">
                    <svg
                        className="w-full h-20"
                        viewBox="0 0 1440 100"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#fed7e2"
                            d="M0,40 C400,100 1000,0 1440,60 L1440,100 L0,100 Z"
                        ></path>
                    </svg>
                </div>
                <div className="absolute -top-10 flex w-4/5 items-center justify-around px-36 z-10 gap-8">
                    <PricingPlans
                        plan="Standard"
                        price="30"
                        description="Use this area to describe one of your memberships."
                        duration="6"
                        benefits={['5000 Users', 'Upto 5 Clubs']}
                    />
                    <PricingPlans
                        plan="Premium"
                        price="60"
                        description="Use this area to describe one of your memberships."
                        duration="12"
                        benefits={[
                            '10,000 Users',
                            'Upto 15 Clubs',
                            'Unlimited Certificates',
                        ]}
                        valueFor={true}
                    />
                    <PricingPlans
                        plan="Enterprise"
                        price="100"
                        description="Use this area to describe one of your memberships."
                        duration="24"
                        benefits={[
                            'everything in previous plan',
                            'Unlimited Users',
                            'Unlimited Clubs',
                            'Unlimited Clubs',
                        ]}
                    />
                </div>
            </div>
        </>
    );
};

export default page;
