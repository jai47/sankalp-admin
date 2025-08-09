'use client';
import Footer from '@/components/Footer/Footer';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { useSession } from 'next-auth/react';

const Page = () => {
    const { data: session } = useSession();
    const [userDetails, setUserDetails] = useState({
        name: '',
        phone: '',
        dob: '',
    });
    const [instituteDetails, setInstituteDetails] = useState({
        instituteName: '',
        address: '',
        domain: '',
        subDomain: '',
        logo: '',
        type: '',
        plan: '',
    });

    const [errors, setErrors] = useState({});

    const [section, setSection] = useState('Accounts');
    const accountRef = useRef(null);
    const instituteRef = useRef(null);
    const plansRef = useRef(null);
    const accountArrowRef = useRef(null);
    const instituteArrowRef = useRef(null);
    const plansArrowRef = useRef(null);

    const [activePlan, setActivePlan] = useState('Premium');
    const freeRef = useRef(null);
    const premiumRef = useRef(null);
    const freeArrowRef = useRef(null);
    const premiumArrowRef = useRef(null);

    const loadScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadScript().then((loaded) => {
            if (loaded) {
                console.log('Razorpay script loaded successfully');
            } else {
                console.error('Failed to load Razorpay script');
            }
        });
    }, []);

    useEffect(() => {
        if (section === 'Accounts' && accountRef.current) {
            gsap.fromTo(
                accountRef.current,
                { height: 0, opacity: 0, y: -20 },
                {
                    height: 'auto',
                    display: 'block',
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                }
            );
            gsap.fromTo(
                accountArrowRef.current,
                { rotation: 0 },
                {
                    rotation: 90,
                    duration: 0.4,
                    ease: 'power2.out',
                }
            );
        }

        if (section === 'Institute' && instituteRef.current) {
            gsap.fromTo(
                instituteRef.current,
                { height: 0, opacity: 0, y: -20 },
                {
                    height: 'auto',
                    display: 'block',
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                }
            );
            gsap.fromTo(
                instituteArrowRef.current,
                { rotation: 0 },
                {
                    rotation: 90,
                    duration: 0.4,
                    ease: 'power2.out',
                }
            );
        }

        if (section === 'Plans' && plansRef.current) {
            gsap.fromTo(
                plansRef.current,
                { height: 0, opacity: 0, y: -20 },
                {
                    height: 'auto',
                    display: 'block',
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                }
            );
            gsap.fromTo(
                plansArrowRef.current,
                { rotation: 0 },
                {
                    rotation: 90,
                    duration: 0.4,
                    ease: 'power2.out',
                }
            );
        }
    }, [section]);

    const handleSectionChange = (newSection) => {
        const allRefs = {
            Accounts: accountRef,
            Institute: instituteRef,
            Plans: plansRef,
        };

        const allArrowRefs = {
            Accounts: accountArrowRef,
            Institute: instituteArrowRef,
            Plans: plansArrowRef,
        };

        if (section === newSection) {
            // Closing animation
            const ref = allRefs[newSection];
            const arrowRef = allArrowRefs[newSection];

            gsap.to(ref.current, {
                height: 0,
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => setSection(null),
            });

            gsap.to(arrowRef.current, {
                rotation: 0,
                duration: 0.3,
                ease: 'power2.inOut',
            });
        } else {
            // Close previous section (if any)
            if (section) {
                const prevRef = allRefs[section];
                const prevArrowRef = allArrowRefs[section];

                gsap.to(prevRef.current, {
                    height: 0,
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.inOut',
                });

                gsap.to(prevArrowRef.current, {
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.inOut',
                });
            }

            // Open new section
            setSection(newSection);
        }
    };

    const togglePlan = (plan) => {
        const refs = {
            Free: freeRef,
            Premium: premiumRef,
        };

        const arrowRefs = {
            Free: freeArrowRef,
            Premium: premiumArrowRef,
        };

        if (activePlan === plan) {
            // Collapse current open plan
            gsap.to(refs[plan].current, {
                height: 0,
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: 'power2.inOut',
            });
            gsap.to(arrowRefs[plan].current, {
                rotation: 0,
                duration: 0.3,
                ease: 'power2.inOut',
            });
            setActivePlan(null);
        } else {
            // Collapse previously open plan
            if (activePlan) {
                gsap.to(refs[activePlan].current, {
                    height: 0,
                    opacity: 0,
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.inOut',
                });
                gsap.to(arrowRefs[activePlan].current, {
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.inOut',
                });
            }

            // Expand selected plan
            gsap.fromTo(
                refs[plan].current,
                { height: 0, opacity: 0, y: -10 },
                {
                    height: 'auto',
                    display: 'block',
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                }
            );
            gsap.to(arrowRefs[plan].current, {
                rotation: 90,
                duration: 0.3,
                ease: 'power2.out',
            });

            setActivePlan(plan);
        }
    };

    const handleUserDetailsChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    const handleInstituteDetailsChange = (e) => {
        setInstituteDetails({
            ...instituteDetails,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    const validateForm = (data) => {
        let valid = true;
        const newErrors = {};

        const keys = Object.keys(data);

        keys.forEach((key) => {
            if (!data[key]) {
                newErrors[key] = `${
                    key.toString()[0].toUpperCase() + key.toString().slice(1)
                } is required`;
                valid = false;
            }
        });

        if (!valid) {
            setErrors((prev) => ({ ...prev, ...newErrors }));
            return false;
        }

        return true;
    };

    const updateUserDetails = async () => {
        if (!validateForm(userDetails)) {
            // console.error('Form validation failed');
            return false;
        }
        try {
            const response = await fetch('/api/update/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...userDetails,
                    email: session?.user?.email,
                }),
            });
            const data = await response.json();
            if (data.success) {
                console.log('User details updated successfully:', data.user);
                return true;
            } else {
                console.error('Failed to update user details:', data.message);
                return false;
            }
        } catch (error) {
            console.error('Error updating user details:', error);
            return false;
        }
    };

    const createInstitute = async () => {
        const { plan, ...detailsWithoutPlan } = instituteDetails;

        if (!validateForm(detailsWithoutPlan)) {
            console.log(instituteDetails);
            console.error('Form validation failed');
            return false;
        }

        try {
            const res = await fetch('/api/institute/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...instituteDetails,
                    userID: session?.user?.email,
                }),
            });

            const data = await res.json();

            console.log(data.message);
            return data.success; // ✅ Now this gets returned properly
        } catch (error) {
            console.error('Error creating institute:', error);
            return false;
        }
    };

    return (
        <div className="w-screen mt-24 flex flex-col items-center">
            <div className="w-3/5 h-fit">
                <div>
                    <h1 className="text-4xl font-medium mb-10">Get Started</h1>
                </div>

                <div
                    className="hover:bg-gray-50 cursor-pointer mb-4 bg-white relative"
                    onClick={() => {
                        handleSectionChange('Accounts');
                    }}
                >
                    <h1 className="text-2xl font-light tracking-widest mb-2">
                        My Account
                    </h1>
                    <p className="text-sm font-extralight text-gray-500 mb-4">
                        View and edit you personal info below
                    </p>

                    <MdOutlineArrowForwardIos
                        ref={accountArrowRef}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    />
                    <span className="block w-full h-[1px] bg-gray-300" />
                </div>

                <div ref={accountRef} className="hidden">
                    <h2 className="text-xl font-light tracking-widest mt-4 mb-2">
                        Primary Details
                    </h2>
                    <p className="text-sm font-extralight text-gray-500 mb-4">
                        Update your institute information.
                    </p>
                    <div className="flex flex-wrap justify-between gap-4">
                        <div className="w-[48%]">
                            {errors.name ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.name}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Your Name
                                </p>
                            )}
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleUserDetailsChange}
                                className="outline-none border p-2 w-full"
                            />
                        </div>

                        <div className="w-[48%]">
                            {errors.phone ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.phone}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Phone
                                </p>
                            )}
                            <input
                                type="number"
                                name="phone"
                                value={userDetails.phone}
                                onChange={handleUserDetailsChange}
                                className="outline-none border p-2 w-full no-spinner"
                            />
                        </div>

                        <div className="w-[48%]">
                            {errors.dob ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.dob}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Date of Birth
                                </p>
                            )}

                            <input
                                type="date"
                                name="dob"
                                value={userDetails.dob}
                                onChange={handleUserDetailsChange}
                                className="outline-none border p-2 w-full"
                            />
                        </div>

                        <div className="w-[48%]">
                            <p className="text-sm font-extralight text-gray-500 mb-4">
                                Email
                            </p>

                            <input
                                type="text"
                                name="email"
                                value={session?.user?.email || ''}
                                disabled
                                className="outline-none border border-black p-2 w-full text-gray-400"
                            />
                        </div>
                        <div className="w-full flex justify-end items-center mb-4">
                            <div className="flex gap-5">
                                <button
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        const success =
                                            await updateUserDetails();
                                        if (success) {
                                            handleSectionChange('Institute');
                                        }
                                    }}
                                    className="bg-yellow-400 text-black text-md font-light px-3 py-2 border hover:bg-black hover:text-white duration-200 cursor-pointer"
                                >
                                    Proceed Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="hover:bg-gray-50 cursor-pointer bg-white relative mb-4"
                    onClick={() => {
                        handleSectionChange('Institute');
                    }}
                >
                    <h1 className="text-2xl font-light tracking-widest mb-2">
                        Configure Institute
                    </h1>
                    <p className="text-sm font-extralight text-gray-500 mb-4">
                        View and edit you personal info below
                    </p>
                    <MdOutlineArrowForwardIos
                        ref={instituteArrowRef}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    />
                    <span className="block w-full h-[1px] bg-gray-300" />
                </div>
                <div ref={instituteRef} className="hidden">
                    <h2 className="text-xl font-light tracking-widest mt-4 mb-2">
                        Primary Details
                    </h2>
                    <p className="text-sm font-extralight text-gray-500 mb-4">
                        Update your institute information.
                    </p>
                    <form className="flex flex-wrap justify-between gap-4">
                        <div className="w-[48%]">
                            {errors.instituteName ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.instituteName}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Institute Name
                                </p>
                            )}

                            <input
                                type="text"
                                name="instituteName"
                                value={instituteDetails.instituteName}
                                onChange={handleInstituteDetailsChange}
                                className="outline-none border p-2 w-full"
                            />
                        </div>

                        <div className="w-[48%]">
                            {errors.address ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.address}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Address
                                </p>
                            )}

                            <input
                                type="text"
                                name="address"
                                value={instituteDetails.address}
                                onChange={handleInstituteDetailsChange}
                                className="outline-none border p-2 w-full"
                            />
                        </div>

                        <div className="w-[48%]">
                            {errors.domain ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.domain}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Email Domain
                                </p>
                            )}
                            <div className="relative border p-2 w-full flex justify-between items-center">
                                <input
                                    type="text"
                                    name="domain"
                                    value={instituteDetails.domain}
                                    onChange={handleInstituteDetailsChange}
                                    className="outline-none w-[90%] h-full"
                                    placeholder="e.g. @myinstitute.co.in"
                                    autoComplete="off"
                                />

                                {/* Info Icon + Tooltip */}
                                <div className="relative group flex">
                                    <IoIosInformationCircleOutline className="inline-block ml-2 text-black cursor-pointer" />

                                    <div className="absolute right-0 top-full mt-1 w-64 text-sm bg-gray-800 text-white p-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                        This is your institute’s email
                                        subdomain. Only users with this email
                                        can access the platform. For example:{' '}
                                        <strong>
                                            user@myinstitute.shrk.in
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[48%]">
                            {errors.logo ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.logo}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Logo
                                </p>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                className="outline-none border p-2 w-full"
                                onChange={async (e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;

                                    const formData = new FormData();
                                    formData.append('image', file);

                                    try {
                                        const response = await fetch(
                                            process.env
                                                .NEXT_PUBLIC_IMAGE_SERVER,
                                            {
                                                method: 'POST',
                                                body: formData,
                                            }
                                        );

                                        const data = await response.json();
                                        setInstituteDetails({
                                            ...instituteDetails,
                                            logo: data.url,
                                        });
                                        setErrors({
                                            ...errors,
                                            logo: '',
                                        });
                                    } catch (err) {
                                        console.error(
                                            'Image upload failed:',
                                            err
                                        );
                                    }
                                }}
                            />
                        </div>
                        <div className="w-[48%]">
                            {errors.type ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.type}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Organisation Type
                                </p>
                            )}
                            <select
                                name="organisationType"
                                className="outline-none border p-2 w-full"
                                value={instituteDetails.type}
                                onChange={(e) =>
                                    setInstituteDetails({
                                        ...instituteDetails,
                                        type: e.target.value,
                                    })
                                }
                            >
                                <option value="">
                                    Select Organisation Type
                                </option>
                                <option value="school">School</option>
                                <option value="college">College</option>
                                <option value="university">University</option>
                                <option value="coaching">Coaching</option>
                            </select>
                        </div>

                        <div className="w-[48%]">
                            {errors.subDomain ? (
                                <p className="text-sm font-extralight text-red-500 mb-4">
                                    {errors.subDomain}
                                </p>
                            ) : (
                                <p className="text-sm font-extralight text-gray-500 mb-4">
                                    Domain Configuration
                                </p>
                            )}
                            <input
                                type="text"
                                name="subDomain"
                                value={instituteDetails.subDomain}
                                onChange={handleInstituteDetailsChange}
                                className="outline-none border p-2 w-full"
                                placeholder={`ex. ${
                                    instituteDetails?.name?.split(' ')[0] ||
                                    'myinstitute'
                                }.shrk.in`}
                            />
                            <p className="text-sm mt-1 text-gray-500">
                                Full domain:{' '}
                                <strong>
                                    {instituteDetails.subDomain || 'yourdomain'}
                                    .shrk.in
                                </strong>
                            </p>
                        </div>

                        <div className="w-full flex justify-end items-center mb-4">
                            <div className="flex gap-5">
                                <button
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        const success = await createInstitute();
                                        console.log(success);
                                        if (success) {
                                            handleSectionChange('Plans');
                                        }
                                    }}
                                    className="bg-yellow-400 text-black text-md font-light px-3 py-2 border hover:bg-black hover:text-white duration-200 cursor-pointer"
                                >
                                    Select Plan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div
                    className="hover:bg-gray-50 cursor-pointer mb-4 bg-white relative"
                    onClick={() => {
                        handleSectionChange('Plans');
                    }}
                >
                    <h1 className="text-2xl font-light tracking-widest mb-2">
                        Select a Plan
                    </h1>
                    <p className="text-sm font-extralight text-gray-500 mb-4">
                        View and edit your subscription plan below
                    </p>
                    <MdOutlineArrowForwardIos
                        ref={plansArrowRef}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    />
                    <span className="block w-full h-[1px] bg-gray-300" />
                </div>

                <div ref={plansRef} className="hidden">
                    <div className="flex flex-col relative mt-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => togglePlan('Free')}
                        >
                            <h2 className="text-xl font-light tracking-widest">
                                Free
                            </h2>
                            <MdOutlineArrowForwardIos
                                ref={freeArrowRef}
                                className="transition-transform duration-300"
                            />
                        </div>

                        <div
                            ref={freeRef}
                            className={`${
                                activePlan === 'Free' ? '' : 'hidden'
                            } overflow`}
                        >
                            <ul className="list-disc pl-5 mt-3">
                                <li className="text-sm font-extralight text-gray-500 mb-4">
                                    Basic event and member management
                                </li>
                                <li className="text-sm font-extralight text-gray-500 mb-4">
                                    Access to public resources
                                </li>
                                <li className="text-sm font-extralight text-gray-500 mb-4">
                                    Single admin dashboard
                                </li>
                            </ul>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setInstituteDetails({
                                        ...instituteDetails,
                                        plan: 'Free',
                                    });
                                }}
                                className="w-32 h-10 bg-black text-white text-md font-light px-3 py-2 border hover:bg-yellow-400 hover:text-black duration-200 cursor-pointer"
                            >
                                Select
                            </button>
                        </div>
                    </div>
                    <span className="block w-full h-[1px] bg-gray-300 mt-4" />

                    <div className="flex flex-col relative mt-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => togglePlan('Premium')}
                        >
                            <h2 className="text-xl font-light tracking-widest">
                                Premium
                            </h2>
                            <MdOutlineArrowForwardIos
                                ref={premiumArrowRef}
                                className="transition-transform duration-300"
                            />
                        </div>

                        <div
                            ref={premiumRef}
                            className={`${
                                activePlan === 'Premium' ? '' : 'hidden'
                            } overflow`}
                        >
                            <ul className="list-disc pl-5 mt-3 pb-4">
                                <li className="text-sm font-extralight text-gray-500 mb-4">
                                    Everything in Free plan
                                </li>
                                <li className="text-sm font-extralight text-gray-500 mb-4">
                                    Automated certificate generator
                                </li>
                                <li className="text-sm font-extralight text-gray-500 mb-4">
                                    Custom subdomain and email support
                                </li>
                            </ul>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setInstituteDetails({
                                        ...instituteDetails,
                                        plan: 'Premium',
                                    });
                                }}
                                className="w-32 h-10 bg-black text-white text-md font-light px-3 py-2 border hover:bg-yellow-400 hover:text-black duration-200 cursor-pointer"
                            >
                                Select
                            </button>
                        </div>
                    </div>
                    <span className="block w-full h-[1px] bg-gray-300 mt-4" />
                </div>
            </div>
            <div className="mt-52" />
            <Footer />
        </div>
    );
};

export default Page;
