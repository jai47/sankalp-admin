'use client';
import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import useParams from '@/hooks/useParams';
import Link from 'next/link';
// import Profile from './Account/Profile';
// import EditCollegeDetails from './CollegeDetails/EditCollegeDetails';

const Profile = dynamic(() => import('./Account/Profile'), {
    suspense: true,
});
const EditCollegeDetails = dynamic(
    () => import('./CollegeDetails/EditCollegeDetails'),
    {
        suspense: true,
    }
);

const Subscriptions = dynamic(() => import('./Subscription/Subscrition'), {
    suspense: true,
});

const SectionRenderer = () => {
    const section = useParams('section') || 'profile';
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('/api/user/fetch')
            .then((req) => req.json())
            .then((data) => {
                if (data.success) {
                    setUser(data.user);
                }
            });
    }, []);

    const Navbar = [
        {
            name: 'My Account',
            section: 'profile',
        },
        {
            name: 'Institute Configuration',
            section: 'editCollegeDetails',
        },
        { name: 'Subscriptions', section: 'subscriptions' },
    ];

    const renderSection = () => {
        switch (section) {
            case 'profile':
                return <Profile user={user} />;
            case 'editCollegeDetails':
                return <EditCollegeDetails user={user} />;
            case 'subscriptions':
                return <Subscriptions user={user} />;
            default:
                return <Profile user={user} />;
        }
    };

    return (
        <>
            <nav className="flex border-b border-b-gray-300 mt-5">
                <div className="flex">
                    {Navbar.map((item, key) => (
                        <Link
                            key={key}
                            href={`?section=${item.section}`}
                            className={`${
                                section == item.section &&
                                'border-b-3 border-b-amber-900'
                            } p-4 text-md font-light cursor-pointer`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="mt-6 p-4">{renderSection()}</div>
            </Suspense>
        </>
    );
};

export default SectionRenderer;
