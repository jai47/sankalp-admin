import React from 'react';

const PricingPlans = ({
    plan,
    price,
    description,
    duration,
    benefits,
    valueFor,
}) => {
    return (
        <div className={`h-[35rem] w-full z-10 ${valueFor ? 'scale-105' : ''}`}>
            {/* Top Section */}
            <div
                className={`relative h-3/5 ${
                    valueFor ? 'bg-black' : 'bg-yellow-400'
                } p-8 flex flex-col justify-between rounded-t-lg`}
            >
                {valueFor && (
                    <div className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-4 py-2 border text-xs font-semibold">
                        Best Value
                    </div>
                )}
                <div>
                    <h2
                        className={`text-xl font-light mb-4 ${
                            valueFor ? 'text-white' : 'text-black'
                        }`}
                    >
                        {plan}
                    </h2>
                    <div
                        className={`relative text-6xl font-bold mb-2 pl-3 ${
                            valueFor ? 'text-white' : 'text-black'
                        }`}
                    >
                        <span className="absolute text-lg top-0 left-0">₹</span>
                        {price}
                    </div>
                    <p
                        className={`text-xs font-extralight mb-2 ${
                            valueFor ? 'text-white' : 'text-black'
                        }`}
                    >
                        Every month
                    </p>
                    <p
                        className={`text-sm font-light text-black/80 mb-5 ${
                            valueFor ? 'text-white' : 'text-black'
                        }`}
                    >
                        {description}
                    </p>
                    <p
                        className={`text-xs font-light text-black/70 ${
                            valueFor ? 'text-white' : 'text-black'
                        }`}
                    >
                        Valid for {duration} months
                    </p>
                </div>

                <button
                    className={`${
                        valueFor ? 'bg-white text-black' : 'bg-black text-white'
                    } font-semibold px-6 py-3 rounded-lg w-full mt-3`}
                >
                    Get Started
                </button>
            </div>

            {/* Bottom Section */}
            <div className="h-2/5 bg-pink-200 px-8 py-6 space-y-4 rounded-b-lg">
                {benefits.map((text, idx) => (
                    <div className="flex items-center gap-3" key={idx}>
                        <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                            ✓
                        </div>
                        <p className="text-sm">{benefits?.[idx]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPlans;
