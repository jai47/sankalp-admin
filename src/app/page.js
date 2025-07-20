import Image from 'next/image';
import React from 'react';
import heroImage from '@/assets/heroImage.png';

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
                <div className="h-20 relative w-full overflow-hidden">
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
            <div
                className="h-96 w-screen flex items-center justify-around"
                style={{ backgroundColor: '#facc15' }}
            >
                <h2 className=" text-4xl font-light">
                    With the Right <br /> Software, Great <br /> Things Can
                    Happen
                </h2>
                <p className="w-1/3 text-md font-light">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font. Feel free
                    to drag and drop me anywhere you like on your page. I’m a
                    great place for you to tell a story and let your users know
                    a little more about you.
                </p>
            </div>
            <div className="h-screen w-screen flex items-center justify-around"></div>
        </div>
    );
};

export default Home;
