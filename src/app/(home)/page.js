import Image from 'next/image';
import React from 'react';
import heroImage from '@/assets/heroImage.png';
import serviceImage from '@/assets/offerings1.png';
import PricingPlans from '@/components/Pricing/PricingPlans';
import Link from 'next/link';
import flower1 from '@/assets/floral/flower1.svg';
import flower2 from '@/assets/floral/flower2.svg';
import flower3 from '@/assets/floral/flower3.svg';
import footerImage from '@/assets/Illustrations/footer.svg';

const Home = () => {
    return (
        <div className="flex flex-col h-auto">
            <div className="h-screen">
                <div className="h-[92%] flex items-center justify-between p-40">
                    <div className="flex flex-col items-start justify-center w-1/2">
                        <div className="w-fit">
                            <h1 className="text-6xl font-sans font-extralight mb-4 tracking-wide">
                                Communicate.
                            </h1>
                            <h1 className="text-6xl font-sans font-extralight mb-8 tracking-wide">
                                Collaborate. Create.
                            </h1>
                            <p className="text-lg text-gray-500 mb-10">
                                SHRK provides an effective and powerful way to{' '}
                                <br />
                                manage your clubs
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded-lg cursor-pointer">
                                Get Started
                            </button>
                        </div>
                        <div className="flex gap-14 mt-20">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={'/speed.png'}
                                    width={35}
                                    height={35}
                                    alt="Speed Icon"
                                />
                                <p className="text-sm text-gray-500">
                                    Flexibility & <br />
                                    Scalability
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image
                                    src={'/speed.png'}
                                    width={35}
                                    height={35}
                                    alt="Speed Icon"
                                />
                                <p className="text-sm text-gray-500">
                                    Speed & <br />
                                    Security
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image
                                    src={'/speed.png'}
                                    width={35}
                                    height={35}
                                    alt="Speed Icon"
                                />
                                <p className="text-sm text-gray-500">
                                    Better <br />
                                    Collaboration
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={heroImage}
                        width={600}
                        alt="Hero Image"
                        className="transform -scale-x-100"
                    />
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 -top-20 w-full overflow-hidden">
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
                <div
                    className="h-96 w-screen flex items-center justify-around"
                    style={{ backgroundColor: '#facc15' }}
                >
                    <h2 className=" text-4xl font-light tracking-wide">
                        With the Right <br /> Software, Great <br /> Things Can
                        Happen
                    </h2>
                    <p className="w-1/3 text-md font-light">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It’s easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Feel free to drag and drop me anywhere you like on
                        your page. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                    </p>
                </div>
            </div>

            <div
                className="h-screen w-screen flex flex-col items-center justify-center"
                id="product"
            >
                <div className="w-4/5">
                    <div className="flex flex-col items-start justify-center w-1/2 gap-8  pl-8">
                        <h2 className="text-4xl font-light tracking-wide">
                            What We Offer
                        </h2>
                        <p className="w-4/5 font-light text-sm">
                            I'm a paragraph. Click here to add your own text and
                            edit me. It’s easy. Just click “Edit Text” or double
                            click me to add your own content and make changes to
                            the font.
                        </p>
                    </div>
                    <div className="flex mt-20 justify-around">
                        <div className="w-1/5">
                            <Image
                                src={serviceImage}
                                alt="Service"
                                width={250}
                            />

                            <h2 className="font-medium text-2xl mt-8">
                                Workflows <br /> That Work
                            </h2>
                            <p className="mt-7 text-gray-500 font-light text-sm">
                                I'm a paragraph. Click here to add your own text
                                and edit me. I’m a great place for you to tell a
                                story and let your users know a little more
                                about you.
                            </p>
                        </div>
                        <div className="w-1/5">
                            <Image
                                src={serviceImage}
                                alt="Service"
                                width={250}
                            />

                            <h2 className="font-medium text-2xl mt-8">
                                All-In-One <br /> Solution
                            </h2>
                            <p className="mt-7 text-gray-500 font-light text-sm">
                                I'm a paragraph. Click here to add your own text
                                and edit me. I’m a great place for you to tell a
                                story and let your users know a little more
                                about you.
                            </p>
                        </div>
                        <div className="w-1/5">
                            <Image
                                src={serviceImage}
                                alt="Service"
                                width={250}
                            />

                            <h2 className="font-medium text-2xl mt-8">
                                Comprehensive <br /> Customer Support
                            </h2>
                            <p className="mt-7 text-gray-500 font-light text-sm">
                                I'm a paragraph. Click here to add your own text
                                and edit me. I’m a great place for you to tell a
                                story and let your users know a little more
                                about you.
                            </p>
                        </div>
                        <div className="w-1/5">
                            <Image
                                src={serviceImage}
                                alt="Service"
                                width={250}
                            />

                            <h2 className="font-medium text-2xl mt-8">
                                Smart <br /> Automation Tools
                            </h2>
                            <p className="mt-7 text-gray-500 font-light text-sm">
                                I'm a paragraph. Click here to add your own text
                                and edit me. I’m a great place for you to tell a
                                story and let your users know a little more
                                about you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <svg
                    className="w-full h-20"
                    viewBox="0 0 1440 100"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#fed7e2"
                        d="M0,100 C400,100 1000,90 1440,20 L1440,100 L0,100 Z"
                    ></path>
                </svg>
                <div className="bg-[#fed7e2] h-fit py-20 flex flex-col justify-center items-center">
                    <div className="w-4/5 flex justify-between items-center pl-8">
                        <div className="w-2/5">
                            <h2 className="text-4xl font-light mb-10 tracking-wide">
                                Trusted Among Institute's Leaders
                            </h2>
                            <p className="w-4/5 font-light text-sm mb-14">
                                I'm a paragraph. Click here to add your own text
                                and edit me. It’s easy. Just click “Edit Text”
                                or double click me to add your own content and
                                make changes to the font.
                            </p>
                        </div>
                    </div>
                    <div className="w-4/5 h-fit grid grid-cols-4 justify-between">
                        {Array(8)
                            .fill('College')
                            .map((text, idx) => (
                                <div
                                    className="p-10 flex flex-col items-center gap-3"
                                    key={idx}
                                >
                                    <Image
                                        src={'/speed.png'}
                                        width={80}
                                        height={80}
                                        alt={'college'}
                                        className="brightness-50"
                                    />
                                    <p className="text-md">
                                        {text + ' ' + idx}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="h-fit w-screen flex flex-col items-center justify-center">
                <div className="h-fit w-screen py-24 flex items-center justify-center">
                    <div className="w-4/5">
                        <div className="flex flex-col items-start justify-center w-1/2 gap-8  pl-8">
                            <h2 className="text-4xl font-light tracking-wide">
                                What Our Client Says
                            </h2>
                        </div>
                        <div className="flex mt-20 justify-between px-8">
                            <div className="w-1/5 h-96 relative">
                                <div className="w-full h-full border-3 rounded-xl overflow-hidden">
                                    <div className="w-full h-[8%] bg-yellow-400 flex items-center gap-2 pl-4 border-b-3">
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                    </div>
                                    <div className="p-5">
                                        <p className="mt-7 text-gray-500 font-light text-sm">
                                            I'm a paragraph. Click here to add
                                            your own text and edit me. I’m a
                                            great place for you to tell a story
                                            and let your users know a little
                                            more about you.
                                        </p>
                                        <p className="text-right mt-20 text-gray-500 font-bold text-md">
                                            Jai Mishra,
                                            <br /> Echelon Institute
                                        </p>
                                    </div>
                                </div>
                                <Image
                                    src={flower1}
                                    alt="design"
                                    width={120}
                                    className="absolute bottom-0 -left-7"
                                />
                            </div>
                            <div className="w-1/5 h-96 relative">
                                <div className="w-full h-full border-3 rounded-xl overflow-hidden">
                                    <div className="w-full h-[8%] bg-yellow-400 flex items-center gap-2 pl-4 border-b-3">
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                    </div>
                                    <div className="p-5">
                                        <p className="mt-7 text-gray-500 font-light text-sm">
                                            I'm a paragraph. Click here to add
                                            your own text and edit me. I’m a
                                            great place for you to tell a story
                                            and let your users know a little
                                            more about you.
                                        </p>
                                        <p className="text-right mt-20 text-gray-500 font-bold text-md">
                                            Jai Mishra,
                                            <br /> Echelon Institute
                                        </p>
                                    </div>
                                </div>
                                <Image
                                    src={flower2}
                                    alt="design"
                                    width={160}
                                    className="absolute -bottom-15 -left-10"
                                />
                            </div>
                            <div className="w-1/5 h-96 relative">
                                <div className="w-full h-full border-3 rounded-xl overflow-hidden">
                                    <div className="w-full h-[8%] bg-yellow-400 flex items-center gap-2 pl-4 border-b-3">
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                        <span className="h-2 w-2 rounded-full bg-black" />
                                    </div>
                                    <div className="p-5">
                                        <p className="mt-7 text-gray-500 font-light text-sm">
                                            I'm a paragraph. Click here to add
                                            your own text and edit me. I’m a
                                            great place for you to tell a story
                                            and let your users know a little
                                            more about you.
                                        </p>
                                        <p className="text-right mt-20 text-gray-500 font-bold text-md">
                                            Jai Mishra,
                                            <br /> Echelon Institute
                                        </p>
                                    </div>
                                </div>
                                <Image
                                    src={flower3}
                                    alt="design"
                                    width={120}
                                    className="absolute -bottom-7 -left-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-fit w-screen mt-16">
                <div
                    className="h-3/4 w-full flex items-center justify-center pt-12"
                    style={{ background: '#f6f5f5' }}
                >
                    <div className="flex w-4/5  justify-between px-10">
                        <div className="w-2/5 mt-20">
                            <h2 className="text-4xl font-light mb-8 tracking-wide">
                                Explore Our <br />
                                Pricing Options
                            </h2>
                            <p className="w-4/5 font-light text-sm mb-14">
                                I'm a paragraph. Click here to add your own text
                                and edit me. It’s easy. Just click “Edit Text”
                                or double click me to add your own content and
                                make changes to the font. I’m a great place for
                                you to tell a story and let your users know a
                                little more about you.
                            </p>
                            <Link
                                href="/pricing"
                                className="bg-black text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-yellow-400 hover:text-black hover:border hover:border-black duration-100 cursor-pointer"
                            >
                                See More
                            </Link>
                        </div>
                        <div className="w-1/3">
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
                        </div>
                    </div>
                </div>
                <svg
                    className="w-full h-20"
                    viewBox="0 0 1440 400"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f6f5f5"
                        d="M0,50 C400,200 1000,350 1440,400 L1440,0 0,0 Z"
                    ></path>
                </svg>
            </div>
            <div className="h-fit w-screen flex flex-col items-center py-20 relative">
                <h2 className="text-4xl font-light tracking-wide text-center mb-10 mt-5">
                    Get Ready to Maximize Your Productivity With Our <br />
                    Workflow Solutions
                </h2>

                <Link
                    href="/pricing"
                    className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black hover:border hover:border-black duration-100 cursor-pointer mb-[30rem]"
                >
                    Get Started
                </Link>

                <Image
                    src={footerImage}
                    width={1000}
                    alt="graphics"
                    className="absolute -bottom-60 left-1/2 transform -translate-x-1/2"
                />
            </div>
            <div className="h-screen w-screen flex flex-col items-center py-20 bg-yellow-400">
                hello
            </div>
        </div>
    );
};

export default Home;
