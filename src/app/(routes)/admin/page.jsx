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
import AdminSectionRender from '@/components/Admin/AdminSectionRender';

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
            <AdminSectionRender section={section} />
        </div>
    );
};

export default page;
