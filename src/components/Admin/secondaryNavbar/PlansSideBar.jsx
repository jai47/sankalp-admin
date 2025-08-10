'use client';
import React from 'react';
import { BsCommand } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa6';
import { IoSearchOutline } from 'react-icons/io5';

const PlansSideBar = () => {
    const [search, setSearch] = React.useState('');

    return (
        <nav className="h-full w-[17%] bg-[#ffffff] relative">
            <div className="w-full h-[7%] border-b border-[#E1E0DC] flex justify-center items-center">
                <div className="flex items-center justify-around bg-[#ececec] rounded-md gap-2 py-2 px-1">
                    <IoSearchOutline />
                    <input
                        type="text"
                        className="text-xs border-none outline-none w-[70%] h-full"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <p className="flex justify-center items-center gap-1 text-xs bg-[#ffffff] border border-[#d5d5d5] p-1 rounded-md">
                        <BsCommand size={10} /> <span>K</span>
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <p className="text-sm w-full p-2 px-4 flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0]">
                    <span>Current Plans</span> <FaAngleDown />
                </p>
                <ul className="text-sm w-full flex flex-col justify-center items-center my-5">
                    <li className="w-[80%] flex items-center justify-start p-2 gap-2 hover:bg-[#f0f0f0] rounded-lg">
                        {' '}
                        <span className="w-3 h-3 rounded-full bg-[#91ff93] block" />{' '}
                        Basic
                    </li>
                    <li className="w-[80%] flex items-center justify-start p-2 gap-2 hover:bg-[#f0f0f0] rounded-lg">
                        {' '}
                        <span className="w-3 h-3 rounded-full bg-[#ffd1d1] block" />{' '}
                        Premium
                    </li>
                    <li className="w-[80%] flex items-center justify-start p-2 gap-2 hover:bg-[#f0f0f0] rounded-lg">
                        {' '}
                        <span className="w-3 h-3 rounded-full bg-[#98c8ff] block" />{' '}
                        Enterprise
                    </li>
                </ul>

                <p className="text-sm w-full p-2 px-4 flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0]">
                    <span>Create Plans</span>
                </p>
                <p className="text-sm w-full p-2 px-4 flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0]">
                    <span>Billing History</span>
                </p>
                <p className="text-sm w-full p-2 px-4 flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0]">
                    <span>Invoices</span>
                </p>
            </div>
            <div className="text-sm w-full flex justify-center items-center absolute bottom-8">
                <div className="w-[80%] p-2 cursor-pointer bg-[#fcfcfc] border border-[#E1E0DC] rounded-lg text-center">
                    Collapse
                </div>
            </div>
        </nav>
    );
};

export default PlansSideBar;
