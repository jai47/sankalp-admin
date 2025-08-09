'use client';
import Image from 'next/image';
import React from 'react';
import useParams from '@/hooks/useParams';
import Link from 'next/link';

import { IoSearchOutline } from 'react-icons/io5';
import { BsCommand } from 'react-icons/bs';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { MdPayment } from 'react-icons/md';
import { FaDocker } from 'react-icons/fa6';
import { IoIosAnalytics } from 'react-icons/io';
import { IoIosList } from 'react-icons/io';
import { TfiAnnouncement } from 'react-icons/tfi';
import { MdOutlineAnnouncement } from 'react-icons/md';
import { LuUsers } from 'react-icons/lu';
import { GoGear } from 'react-icons/go';
import { FaAngleDown } from 'react-icons/fa6';
import PlansAdminSection from '@/components/Admin/sections/Plans/PlansAdminSection';

const sideBarOptions = [
    {
        icon: <MdOutlineSpaceDashboard size={20} />,
        query: 'dashboard',
        label: 'Dashboard',
        secondaryMenu: {
            'Total Institutes': [],
            'Active Containers': [],
        },
    },
    {
        icon: <HiOutlineAcademicCap size={20} />,
        query: 'institute',
        label: 'Institute',
    },
    { icon: <IoIosList size={20} />, query: 'services', label: 'Services' },
    { icon: <MdPayment size={20} />, query: 'plans', label: 'Plans' },
    { icon: <FaDocker size={20} />, query: 'docker', label: 'Docker' },
    {
        icon: <IoIosAnalytics size={20} />,
        query: 'analytics',
        label: 'Analytics',
    },
    {
        icon: <MdOutlineAnnouncement size={20} />,
        query: 'announcements',
        label: 'Announcements',
    },
    {
        icon: <TfiAnnouncement size={20} />,
        query: 'ads',
        label: 'Advertisements',
    },
    { icon: <LuUsers size={20} />, query: 'users', label: 'Users' },
    { icon: <GoGear size={20} />, query: 'settings', label: 'Settings' },
];

const page = () => {
    const section = useParams('section') || 'dashboard';
    const [search, setSearch] = React.useState('');
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <nav className="h-full w-[5%] bg-[#ffffff] border border-[#E1E0DC] flex flex-col gap-10">
                <div className="h-[10%] flex justify-center items-center">
                    <div className="p-2 bg-[#ececec] rounded-full">
                        <Link href={'/'}>
                            <Image
                                src={'/logo.png'}
                                width={35}
                                height={35}
                                className="grayscale invert-100 transition duration-300 hover:grayscale-0 hover:invert-0 cursor-pointer"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                </div>
                <ul className="flex flex-col h-[65%] items-center justify-center">
                    {sideBarOptions.map((option) => (
                        <Link
                            key={option.query}
                            href={`/admin?section=${option.query}`}
                            className={`w-full h-[14%] flex border-l-2 justify-center items-center hover:bg-[#f0f0f0] ${
                                section === option.query
                                    ? 'border-black'
                                    : 'border-white'
                            }`}
                        >
                            {option.icon}
                        </Link>
                    ))}
                </ul>
            </nav>
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
            <section className="h-full w-full bg-[#f5f5f5] border border-[#E1E0DC]">
                <div className="w-full h-[7%] border-b border-[#E1E0DC] flex items-center pl-4">
                    <p className="text-2xl font-medium">
                        {section?.toString()[0].toUpperCase() +
                            section?.toString().slice(1)}
                    </p>
                </div>
                <PlansAdminSection />
            </section>
        </div>
    );
};

export default page;
