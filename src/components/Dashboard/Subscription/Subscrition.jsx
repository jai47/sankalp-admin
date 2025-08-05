import React from 'react';

const Subscriptions = () => {
    return (
        <>
            <div>
                <h1 className="text-2xl font-light tracking-widest mb-2">
                    Subscriptions
                </h1>
                <p className="text-sm font-extralight text-gray-500 mb-4">
                    View and manage the subscriptions you've purchased.
                </p>
            </div>
            <span className="h-[1px] w-full bg-gray-200 block" />

            <div>
                <div className="flex mt-4 mb-2 w-full justify-between items-center">
                    <div className="flex w-1/2 justify-between">
                        <span className="text-sm font-extralight text-gray-500">
                            Plan
                        </span>
                        <span className="text-sm font-extralight text-gray-500">
                            Expires: 23 Oct 2025
                        </span>
                    </div>
                    <span className="text-sm font-extralight text-green-500 p-1 bg-green-200">
                        Activate
                    </span>
                </div>
                <div className="flex w-1/2 justify-between items-center mb-4">
                    <span className="text-sm font-extralight text-gray-500">
                        Free Plan
                    </span>
                    <span className="text-sm font-extralight text-gray-500">
                        Starts date: 12 Aug 2025
                    </span>
                </div>
            </div>
            <span className="h-[1px] w-full bg-gray-200 block" />
            <div>
                <div className="flex mt-4 mb-2 w-full justify-between items-center">
                    <div className="flex w-1/2 justify-between">
                        <span className="text-sm font-extralight text-gray-500">
                            Plan
                        </span>
                        <span className="text-sm font-extralight text-gray-500">
                            Expires: 23 Oct 2025
                        </span>
                    </div>
                    <span className="text-sm font-extralight text-red-500 p-1 bg-red-200">
                        Expired
                    </span>
                </div>
                <div className="flex w-1/2 justify-between items-center mb-4">
                    <span className="text-sm font-extralight text-gray-500">
                        Free Plan
                    </span>
                    <span className="text-sm font-extralight text-gray-500">
                        Starts date: 12 Aug 2025
                    </span>
                </div>
            </div>
            <span className="h-[1px] w-full bg-gray-200 block" />
        </>
    );
};

export default Subscriptions;
